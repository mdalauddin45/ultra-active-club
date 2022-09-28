import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleSubject from '../SingleSubject/SingleSubject';
import './Subjects.css';
const Subjects = () => {
 const [subject,setSubject] = useState([]);

 useEffect(()=>{
   fetch ('allsubject.json')
   .then(res => res.json())
   .then(data => setSubject(data))
 },[])

    return (
        <div>
              <h1>STUDY ACTIVE CLUB</h1>
        <h3>Select today's subject</h3>
       <div className='sub-containers'>
       {
            subject.map(sub=> 
            <SingleSubject 
            sub={sub}
            key ={sub.id}
            ></SingleSubject>
            )
        }
       </div>
        </div>
    );
};

export default Subjects;