import React from 'react';
import './Details.css';

const Details = () => {
    return (
        <div className='all-details'>
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
    <button>10s</button>
    <button>20s</button>
    <button>30s</button>
    <button>40s</button>
    <button>50s</button>
</div>
<h3 className='break'>Exercise Details
</h3>
<div className='time'>
   <p>Exercise time</p>
</div>
<div className='time'>
    <p>Break time</p>
</div>
<button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default Details;