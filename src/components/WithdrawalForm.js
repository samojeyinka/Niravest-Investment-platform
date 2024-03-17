import React, { useState } from 'react';


const WithdrawalForm = () => {
    const balance = localStorage.getItem('amount');
  
    const handleWithdrawal = () => {
        const amountInput = document.getElementById('amountInput');
        const amount = amountInput.value;
        if (parseFloat(balance) < parseFloat(amount)) {
          alert("Insuficient balance");
        } else{
            const newBalance = parseFloat(balance) - parseFloat(amount);
            localStorage.setItem('amount', newBalance);
            alert("Widraw successfully");
        }
      }

    return (
        <div class="pay-form-con">
            <h2>Withdrawal Form</h2>
            <form class="pay-form">
            <div>
            <label>Amount:</label>
            <input type="number" id="amountInput"
            placeholder='Ex. 8500'
            required
            />
            </div>
            <br />
            <div>
            <label>Account Number:</label>
            <input type="number" 
             placeholder='Ex. 7073456890'
             required
            />
            </div>
            <br />
            <div>
            <label>Bank Name:</label>
            <input type="text"
             placeholder='Ex. First Bank'
             required
             />
            </div>
            <br />
            <div>
            <button onClick={handleWithdrawal}>Withdraw</button>
            </div>
            </form>
        </div>
    );
};

export default WithdrawalForm;
