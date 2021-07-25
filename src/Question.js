import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import "./Me.css"
import questions from './ques';
const Question = ({title, info}) => {

  const [showInfo, setShowInfo] = useState(false)

  return <>
  <div className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=> setShowInfo(!showInfo)}>
      {!showInfo? <AiOutlinePlus/> : <AiOutlineMinus/>}

      </button>
    </header>
    {
      showInfo && <p>{info}</p>
    }
    
  </div>
  </>;
};

export default Question;
