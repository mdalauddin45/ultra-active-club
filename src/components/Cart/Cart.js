import React, { useState } from 'react';

const Cart = ({times}) => {
    const [totalbt,setTotalbt]=useState(0);
    const breakt= [10,20,30,40,50];

    let total = 0;
   for(const time of times){
     total = total + time;
    //  console.log(total);
   }
   const secondsBtn1=()=>{
 setTotalbt(breakt[0]);
   }
   const secondsBtn2=()=>{
 setTotalbt(breakt[1]);
   }
   const secondsBtn3=()=>{
 setTotalbt(breakt[2]);
   }
   const secondsBtn4=()=>{
 setTotalbt(breakt[3]);
   }
   const secondsBtn5=()=>{
 setTotalbt(breakt[4]);
   }
    return (
       <div>
        <div className='five-btn'>
    <button onClick={secondsBtn1}>10s</button>
    <button onClick={secondsBtn2}>20s</button>
    <button onClick={secondsBtn3}>30s</button>
    <button onClick={secondsBtn4}>40s</button>
    <button onClick={secondsBtn5}>50s</button>
</div>
         <div>
            <h2>Exercise time: {total} seconds</h2>
        </div>
        <div>
            <h2>Break time: {totalbt} seconds</h2>
        </div>
       </div>
    );
};

export default Cart;