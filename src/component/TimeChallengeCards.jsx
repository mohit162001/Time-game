import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

function TimeChallengeCards({title,targetTime}) {
    const timer = useRef();

    const [timeRemain,setTimeRemain] = useState(targetTime * 1000);
    const [showModal,setShowModal] = useState(false);
    const timerISActive = timeRemain>0 &&timeRemain<targetTime*1000;

    if(timeRemain<=0){
        clearInterval(timer.current);
        setTimeRemain(targetTime*1000)
        setShowModal(true)
    }

    function handleStart(){
        timer.current = setInterval(()=>{
            setTimeRemain(preTimeRemain=>preTimeRemain-10);
        },10);
    }
    
    
    function closeModal(){
        setShowModal(false)
    }
    function handleStop(){
        setShowModal(true);
        clearInterval(timer.current);
    }
  return (
    <>
    {showModal?<ResultModal result='LOST' targetTime={targetTime} closeModal={closeModal  }  />:''}
    <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
            {targetTime} Second {targetTime>1?'s':''}
        </p>
        <p>
            <button onClick={timerISActive?handleStop:handleStart}>
                {timerISActive?'Stop Challenge':'Star challange'}
            </button>
        </p>
        <p>
            {timerISActive?"Time is runnig":"Time Inactive"}
        </p>
    </section>
    </>
  )
}

export default TimeChallengeCards;