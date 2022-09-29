import React from 'react';
import './SingleSub.css'

const SingleSub = ({sub}) => {
    const {img,name,description,age,time}= sub;

    // const handelAddToList=()=>{
    //     const newTime = [...times,sub];
    //     setTimes(newTime);
    //  }
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{description} </p>
            <p>For Age:{age} </p>
            <p>Time Required:{time} </p>
 <button className='add-btn'>Add to list</button>
        </div>
    );
};

export default SingleSub;