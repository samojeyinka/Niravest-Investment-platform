import React,{useState} from 'react';
import User from '../components/User';

const Account = () => {
    const [currUser, setCurrUser]=useState(null);
  return (
    <>
    <User currUser={currUser} setCurrUser={setCurrUser} />
    </>
  )
}

export default Account