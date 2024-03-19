import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import Cookies from 'js-cookie';

const PaystackDepositForm = () => {
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');

    const userEmail = Cookies.get("userEmail");
 
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    

    const payWithPastack = (e) => {
            e.preventDefault();
            const paystack = new PaystackPop();
            paystack.newTransaction({
                key: process.env.REACT_APP_PAYSTACK_SECRET_KEY, 
                amount: amount * 100,
                email: email,
                "currency": "NGN",
                onSuccess(transaction){
                    let message = `Payment successful Reference ${transaction.reference}`
                    alert(message);
                    setAmount("");
                    setEmail("");

                    localStorage.setItem("reference", transaction.reference);
                    localStorage.setItem("recentDeposit", amount)
                    const currentBalance = parseFloat(localStorage.getItem('amount') || 0);
                    const newBalance = currentBalance + parseFloat(amount);
                    localStorage.setItem(`amount`, newBalance);
                    localStorage.setItem("email", email);
                 

                },
                onCancel(){
                    let message = `You cancelled the transaction`;
                    alert(message);
                }
            });
    }

    return (
        <div class="pay-form-con">
            <h2>Deposit Form</h2>
            <form class="pay-form">
            <div>
            <label>Amount:</label>
            <input type="number" value={amount} onChange={handleAmountChange}
             placeholder='Ex. 5680'
             required
            />
            </div>
            <br />
            <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} 
             placeholder={userEmail} 
             required
            />
            </div>
            <br />
            <div>
            <button onClick={payWithPastack}>Deposit</button>
            </div>
            </form>
        </div>
    );
};

export default PaystackDepositForm;
