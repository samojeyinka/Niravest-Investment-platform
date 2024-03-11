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
        <div>
            <h2>Deposit Form</h2>
            <label>
                Amount:
                <input type="number" value={amount} onChange={handleAmountChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <button onClick={payWithPastack}>Deposit</button>
        </div>
    );
};

export default PaystackDepositForm;
