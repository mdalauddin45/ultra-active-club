import React, { useState } from 'react';
import './Cart.css'
import Swal from 'sweetalert2'

const Cart = ({times}) => {
    const [totalBreak,setTotalBreak]=useState('000');
    const breakTime= ['10','20','30','40','50'];

    let total = 0;
   for(const time of times){
     total = total + time;
    //  console.log(total);
   }
   const secondsBtn1=()=>{
    // setTotalBreak(breakTime[0]);
    const info ={
      breakTime:10
    }
    

    
   }
   const secondsBtn2=()=>{
 setTotalBreak(breakTime[1]);

   }
   const secondsBtn3=()=>{
 setTotalBreak(breakTime[2]);
   }
   const secondsBtn4=()=>{
 setTotalBreak(breakTime[3]);
   }
   const secondsBtn5=()=>{
 setTotalBreak(breakTime[4]);
   }
   const activityBtn=()=>{
    Swal.fire(
      'congratulations!',
      'You clicked the button!',
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
            <p>75 kg <br /> weight</p>
            <p>5 <br /> Height</p>
            <p>21 yrs <br /> Age</p>
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