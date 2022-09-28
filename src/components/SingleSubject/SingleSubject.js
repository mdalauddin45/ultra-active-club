import React from 'react';
import Details from '../Details/Details';
import './SingleSubject.css';

const SingleSubject = ({sub}) => {
    console.log(sub);
    const {img,name,description,age,time}= sub;
    return (
        <div className='subject-card'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{description} </p>
            <p>For Age:{age} </p>
            <p>Time Required:{time} </p>
 <button className='add-btn'>Add to list</button>
        </div>
    );
};

export default SingleSubject;