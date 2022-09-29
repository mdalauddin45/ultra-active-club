
import SingleSub from '../SingleSub/SingleSub';
import './Subject.css'

const Subject = ({subject,times,setTimes}) => {
    // console.log(subject);

    return (
        <div className='sub-card-containers'>
            {
                subject.map(sub=> 
                    <SingleSub 
                    key={sub.id}
                    sub={sub}
                    times={times}
                    setTimes={setTimes}
                    ></SingleSub>
                    )
            }
          
        </div>
    );
};

export default Subject;