import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Subject from '../Subject/Subject';
import './Home.css'

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
<div className="subject-container">
    <Subject 
    subject={subject}
    times={times}
    setTimes={setTimes}
     ></Subject>
</div>
            </div>
            <div className='AddToList-container'>
<h1>This cart</h1>
<Cart
times={times}
></Cart>
            </div>
        </div>
    );
};

export default Home;