import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Subject from '../Subject/Subject';
import './Home.css';

const Home = () => {
    const [subject,setSubject] = useState([]);
    const [times,setTimes]=useState([]);
  
    // console.log(times);
 useEffect(()=>{
   fetch ('allsubject.json')
   .then(res => res.json())
   .then(data => setSubject(data))
 },[])
    return (
        <div className='Home-container'>
            <div className='all-subject-container'>
<div>
    <div className='text-container'>
    <div className='logo'>  <img src="https://play-lh.googleusercontent.com/QeeyGg8e30dRVsVcJMgR8juLJpaOd7AFc9f9MczRPK7Fx81nUxDGAw89dxY0zB0_8Rg" alt="" />
        <h2>STUDY ACTIVE CLUB</h2></div>
      <h4>Select today’s study books</h4>
    </div>
    <div className="subject-container">
    <Subject 
    subject={subject}
    times={times}
    setTimes={setTimes}
     ></Subject>
    </div>
   
</div>
            </div>
            <div className='AddToList-container'>
<Cart
times={times}
></Cart>
            </div>
        </div>
    );
};

export default Home;