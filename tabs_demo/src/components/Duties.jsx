import {FaAngleDoubleRight} from 'react-icons/fa';
import {v4 as uuidv4 } from 'uuid'; 

const Duties = ({duties}) => {

    return (
    <div>
        {duties.map((duty) => {
            const id = uuidv4(); // generate random unique id
            return (
                <div className="job-desc" key={id}>
                    <FaAngleDoubleRight className='job-icon'/>
                    <p>{duty}</p>
                </div>
            )
        })}
    </div>
  )
}
export default Duties