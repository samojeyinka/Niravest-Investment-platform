import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import Cookies from 'js-cookie';

const PaystackDepositForm = () => {
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
 
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
                key: 'pk_test_ed99e88c9f3e1caf961089161641b23813a8fc41', 
                amount: amount * 100,
                email: email,
                "currency": "NGN",
                onSuccess(transaction){
                    let message = `Payment successful Reference ${transaction.reference}`
                    alert(message);
                    setAmount("");
                    setEmail("");

                    Cookies.set("reference", transaction.reference);
                    Cookies.set("recentDeposit", amount)
                    const currentBalance = parseFloat(Cookies.get('amount') || 0);
                    const newBalance = currentBalance + parseFloat(amount);
                    Cookies.set(`amount`, newBalance);
                    Cookies.set("email", email);
                    console.log(transaction);

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
            <input type="number" value={amount} onChange={handleAmountChange} />
            </div>
            <br />
            <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
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
