import { usePaystackPayment } from 'react-paystack';


const PaystackHookExample = ({ amount, packageId, handleAddPackage }) => {
    const config = {
      reference: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: amount * 100, // Convert amount to kobo (Paystack's currency unit)
      publicKey: 'pk_test_ed99e88c9f3e1caf961089161641b23813a8fc41', 
    };
  
    const onSuccess = (packageId) => {
      handleAddPackage(packageId);
    };
  
    const onClose = () => {
      console.log('closed');
    };
  
    const initializePayment = usePaystackPayment(config);
    
    return (
      <div>
        <button onClick={() => initializePayment(onSuccess, onClose)}>Activate</button>
      </div>
    );
  };

  export default PaystackHookExample;
  