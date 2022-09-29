import React, { useState } from 'react';
import './Cart.css';
import Swal from 'sweetalert2';

const Cart = ({times}) => {
    const [totalBreak,setTotalBreak]=useState('0');
    // const breakTime= ['10','20','30','40','50'];

// Exercise time 
    let total = 0;
   for(const time of times){
     total = total + time;
    //  console.log(total);
   }
   

  // Break Time
   const secondsBtn1=()=>{
      setTotalBreak(10);
   }
   const secondsBtn2=()=>{
 setTotalBreak(20);

   }
   const secondsBtn3=()=>{
 setTotalBreak(30);
   }
   const secondsBtn4=()=>{
 setTotalBreak(40);
   }
   const secondsBtn5=()=>{
 setTotalBreak(50);
   }


   // sweetAlert
   const activityBtn=()=>{
    Swal.fire(
      'congratulations!',
      'Activity Completed!',
      'success'
    )
   }

   
    return (
       <div>
         <div className='details'>
            <div className='my-details'>
                <img src="https://i1.sndcdn.com/avatars-gWjvzHQfdPnL6XRG-Vz3Txw-t500x500.jpg" alt="" />
            </div>
            <div className='my-name'>
          <h4>Md Ala Uddin <br /> Chittagong, Bangladesh </h4>    
        </div>
        </div>
        <div className='wha'>
            <p><span className='wha-text'>75</span> kg <br /> weight</p>
            <p><span className='wha-text'>5</span> <br /> Height</p>
            <p><span className='wha-text'>21</span> yrs <br /> Age</p>
        </div>
<h3 className='break'>Add A Break
</h3>
        <div className='five-btn'>
    <button onClick={secondsBtn1}>10s</button>
    <button onClick={secondsBtn2}>20s</button>
    <button onClick={secondsBtn3}>30s</button>
    <button onClick={secondsBtn4}>40s</button>
    <button onClick={secondsBtn5}>50s</button>
</div>
<h3 className='break'>Exercise Details</h3>
         <div  className='time'>
            <h2>Exercise time: {total} seconds</h2>
        </div>
        <div className='time'>
            <h2>Break time: {totalBreak} seconds</h2>
        </div>
        <button onClick={activityBtn} className='complete-btn'>Activity Completed</button>
       </div>
    );
};

export default Cart;