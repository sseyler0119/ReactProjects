import { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const Question = ({id, title, info, activeId, toggleQuestion}) => {
   //const [showInfo, setShowInfo] = useState(false);
   const isActive = id === activeId;
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        {/* <button className='question-btn' onClick={() => setShowInfo(!showInfo)}> */}
        <button className='question-btn' onClick={() => toggleQuestion(id)}>
          {/* {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* {showInfo && <p>{info}</p> } */}
      {isActive && <p>{info}</p>}
    </article>
  );
}
export default Question