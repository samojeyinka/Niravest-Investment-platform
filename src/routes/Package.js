import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import axios from 'axios';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { dmd } from '../assets/assets';


const Package = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [totalProfits, setTotalProfits] = useState("");
    const [dailyProfits, setDailyProfits] = useState("");
    const [duration, setDuration] = useState("");

    const [pId, setPId] = useState("");

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id)

    const isLoggedIn = Cookies.get('token');
    const userId = Cookies.get('userId');



    const showPackage = async () => {
        try {
            const token = Cookies.get('token');
            const response = await axios.get(`http://localhost:3000/users/${userId}/packages/${id}`, {
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
            setDailyProfits(duration);
            setDuration(duration);

            console.log(name, duration);
            console.log(details);


        } catch (error) {
            console.log(error);
        }
    }


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
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
                                                labels: ["A", "B", "C", "D"],
                                                datasets: [
                                                    {
                                                        label: "Revenue",
                                                        data: [200, 300, 400, 110],
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
                            <b>₦{dailyProfits}</b>
                            <b>₦{totalProfits}</b>
                            <b className='p-price'>₦{price}</b>

                          </div>
                        </div>
                        






                      </div>

               

                  </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </main>
                </section>
                :
                <div>sorry</div>

            }

        </div>
    )
}

export default Package