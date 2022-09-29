import React, { useState } from 'react';

const Cart = ({times}) => {
    const [totalbt,setTotalbt]=useState(0);

    let total = 0;
   for(const time of times){
     total = total + time;
    //  console.log(total);
   }
   const secondsBtn=()=>{
  const newbrektime= totalbt + 10;
   setTotalbt(newbrektime);
   }
    return (
       <div>
        <div className='five-btn'>
    <button onClick={secondsBtn}>10s</button>
    <button onClick={secondsBtn}>20s</button>
    <button onClick={secondsBtn}>30s</button>
    <button onClick={secondsBtn}>40s</button>
    <button onClick={secondsBtn}>50s</button>
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