
import SingleSub from '../SingleSub/SingleSub';
import './Subject.css'

const Subject = ({subject}) => {
    console.log(subject);

    return (
        <div className='sub-card-containers'>
            {
                subject.map(sub=> 
                    <SingleSub 
                    key={sub.id}
                    sub={sub}
                    ></SingleSub>
                    )
            }
          
        </div>
    );
};

export default Subject;