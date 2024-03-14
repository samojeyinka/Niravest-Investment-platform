import React, { useState } from 'react';


const WithdrawalForm = () => {
  

    return (
        <div class="pay-form-con">
            <h2>Withdrawal Form</h2>
            <form class="pay-form">
            <div>
            <label>Amount:</label>
            <input type="number" />
            </div>
            <br />
            <div>
            <label>Account Number:</label>
            <input type="number" />
            </div>
            <br />
            <div>
            <label>Bank Name:</label>
            <input type="text" />
            </div>
            <br />
            <div>
            <button >Withdraw</button>
            </div>
            </form>
        </div>
    );
};

export default WithdrawalForm;
