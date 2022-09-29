import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';
import './Home.css'

const Home = () => {
    const [subject,setSubject] = useState([]);
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
     ></Subject>
</div>
            </div>
            <div className='AddToList-container'>
<h1>This cart</h1>
            </div>
        </div>
    );
};

export default Home;