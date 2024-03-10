import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';

const PaystackDepositForm = () => {
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount * 100, // Convert amount to kobo (Paystack's currency unit)
        publicKey: 'pk_test_ed99e88c9f3e1caf961089161641b23813a8fc41',
    };

    const onSuccess = (reference) => {
        // Store the amount deposited in local storage
        localStorage.setItem('depositAmount', amount);
        console.log(amount);
        console.log('Payment successful. Amount deposited:', amount);
    };

    const onClose = () => {
        console.log('Payment closed');
    };

    const initializePayment = usePaystackPayment(config);

    const handleDeposit = () => {
        initializePayment(onSuccess, onClose);
    };

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
            <button onClick={handleDeposit}>Deposit</button>
        </div>
    );
};

export default PaystackDepositForm;
