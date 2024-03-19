import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import axios from 'axios';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { dmd } from '../assets/assets';
import numberFormat from '../utils/NumberFormatter';
import { useNavigate } from 'react-router-dom';
import Unauthorized from '../utils/Unauthorized';
import '../stylesheets/user/Package.css'

const Package = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [totalProfits, setTotalProfits] = useState("");
    const [dailyProfits, setDailyProfits] = useState("");
    const [duration, setDuration] = useState("");
    const navigate = useNavigate();

    const [pId, setPId] = useState("");

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');


    const isLoggedIn = Cookies.get('token');
    const userId = Cookies.get('userId');
    const balance = localStorage.getItem('amount');

    const url = process.env.REACT_APP_URL;

    const showPackage = async () => {
        try {
            const token = Cookies.get('token');
            const response = await axios.get(`${url}/users/${userId}/packages/${id}`, {
                headers: {

                    Authorization: `${token}`
                }
            });

            const details = response.data;
            const { name, price, total_profits,
                daily_profits, duration } = details;

            setName(name);
            setPrice(price);
            setTotalProfits(total_profits);
            setDailyProfits(daily_profits);
            setDuration(duration);



        } catch (error) {
            console.log(error);
        }
    }


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [dateActivated, setDateActivated] = useState("");

    useEffect(() => {
        const activationDate = localStorage.getItem(`activationDate-${id}`);
        if (activationDate) {
            const formattedDate = new Date(activationDate).toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });
            setDateActivated(formattedDate);
        }
    }, [id]);


    const [expirationDate, setExpirationDate] = useState("");

    useEffect(() => {
        const activationDate = localStorage.getItem(`activationDate-${id}`);
        const days = parseInt(duration.split(" ")[0]); // Parse number of days from duration string
        if (activationDate && !isNaN(days)) {
            const expiration = new Date(activationDate);
            expiration.setDate(expiration.getDate() + days);
            const formattedExpirationDate = expiration.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });
            setExpirationDate(formattedExpirationDate);
        }
    }, [id, duration]);

    const [accumulatedProfits, setAccumulatedProfits] = useState(0);

    useEffect(() => {
        const activationDate = localStorage.getItem(`activationDate-${id}`);
        const days = parseInt(duration.split(" ")[0]); // Parse number of days from duration string
        if (activationDate && !isNaN(days)) {
            const expiration = new Date(activationDate);
            expiration.setDate(expiration.getDate() + days);
            const currentDate = new Date();
            if (currentDate <= expiration) {
                const millisecondsPerDay = 24 * 60 * 60 * 1000;
                const daysElapsed = Math.floor((currentDate - new Date(activationDate)) / millisecondsPerDay);
                const accumulated = daysElapsed * parseFloat(dailyProfits);
                setAccumulatedProfits(accumulated);
            }
        }
    }, [id, duration, dailyProfits]);

    const [canWithdraw, setCanWithdraw] = useState(false);

    useEffect(() => {
        const activationDate = localStorage.getItem(`activationDate-${id}`);
        const days = parseInt(duration.split(" ")[0]); // Parse number of days from duration string
        if (activationDate && !isNaN(days)) {
            const expiration = new Date(activationDate);
            expiration.setDate(expiration.getDate() + days);
            const currentDate = new Date();
            if (currentDate > expiration) {
                setCanWithdraw(true);
            }
        }
    }, [id, duration]);


    const handleCashout = async (packageTP) => {
        const newBalance = parseFloat(balance) + parseFloat(packageTP);
        localStorage.setItem('amount', newBalance);
        try {
            const token = Cookies.get('token');
            await axios.delete(`${url}/users/${userId}/packages/${id}`,
                {
                    headers: {
                        Authorization: `${token}`
                    }
                });

            const activatedPackages = JSON.parse(localStorage.getItem('activatedPackages')) || [];
            const updatedActivatedPackages = activatedPackages.filter(packageId => packageId !== parseInt(id));
            localStorage.setItem('activatedPackages', JSON.stringify(updatedActivatedPackages));
            alert("Cashed out successfully");
            navigate("/overview");

        } catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {
        showPackage();
    })
    return (
        <div>
            {isLoggedIn ?
                <section className='user'>
                    <UserNav />
                    <main className='user-main'>
                        <div className='package-parent'>
                            <div className='package-con'>
                                <div className='pc-flex'>
                                    <div className='pc-flex-left'>


                                        <Bar
                                            data={{
                                                labels: ["2 Days ago", "7 Days ago", "14 Days ago", duration],
                                                datasets: [
                                                    {
                                                        label: "Revenue",
                                                        data: [totalProfits * 0.4, totalProfits * 0.6, totalProfits * 0.9, totalProfits],
                                                        backgroundColor: [
                                                            "#2FB574",

                                                        ],
                                                        borderRadius: 5,

                                                    },
                                                    {
                                                        label: "Loss",
                                                        data: [0, 30, 40, 10],
                                                        backgroundColor: [
                                                            "red",

                                                        ],
                                                    },
                                                ],
                                            }}
                                        />
                                    </div>
                                    <div className='pc-flex-right'>
                                        <div className='package-box'>

                                            <div className='pbbl-img-box'>
                                                <img src={dmd} />
                                            </div>
                                            <h2>{capitalizeFirstLetter(name)}</h2>






                                            <div className='p-box-btm-right'>
                                                <div className='p-box-btm-right-details'>
                                                    <div className='p-box-details-left'>
                                                        <b>Duration</b>
                                                        <b>Daily Profits</b>
                                                        <b>Total Profits</b>
                                                        <b className='p-price'>Price</b>
                                                    </div>
                                                    <div className='p-box-details-right'>
                                                        <b>{duration}</b>
                                                        <b>{numberFormat(dailyProfits)}</b>
                                                        <b>{numberFormat(totalProfits)}</b>
                                                        <b className='p-price'>{numberFormat(price)}</b>

                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                </div>
                                <div className='pc-keypoints'>
                                    <div className='pc-keypoints-left'>
                                        <div><span>Accumulates[24H]: </span><b className='money-accumulates'>{canWithdraw ? numberFormat(totalProfits) : numberFormat(accumulatedProfits)}</b></div>
                                        <div><span>Activated on: </span><b className='date-activated'>{dateActivated}</b></div>
                                        <div><span>Expires on: </span><b className='date-activated'>{expirationDate}</b></div>
                                        {canWithdraw ? <div><button className='withdraw-btn' onClick={() => handleCashout(totalProfits)}>Cashout</button></div> : <div><button disabled className='withdraw-btn disabled' >Cashout not available</button></div>}

                                    </div>
                                    <div className='pc-keypoints-right'>
                                        <h4>How it works</h4>
                                        <div className='hiw-textxs'>
                                            <p>You have activated this investment package with {numberFormat(price)}, and your
                                                expected profit is {numberFormat(totalProfits)}, which you will earn {numberFormat(dailyProfits)} after every 24 hours.
                                                Then, after {duration}, you can withdraw your accumulated profits. You cannot
                                                withdraw until the expiry date and time.
                                                You can withdraw to your balance or directly to your bank.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </main>
                </section>
                :
                <Unauthorized />

            }

        </div>
    )
}

export default Package