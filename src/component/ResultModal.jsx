import React from 'react'
import { createPortal } from 'react-dom'
function ResultModal({result,targetTime,closeModal,timeRemain}) {

  return createPortal(
    <div id='modal-box'>
    <div className='result-modal'>
        <div className="modal-content">
        <h2>
            {timeRemain<=0?'You Lost':''}
        </h2>
        <p>
            The Target time was <strong>{targetTime}</strong>
        </p>
        <p>You stopped the timer with <strong></strong></p>
        <button onClick={closeModal}>Close</button> 
        </div>       
    </div>
    </div>,document.getElementById('modal')
  )
}

export default ResultModal