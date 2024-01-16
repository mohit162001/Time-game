import React, { useRef, useState } from 'react'

function Player() {
    const playerName = useRef();
    const [name,setName] = useState('unkwon entitiy');

    function handleInput(){
            setName(playerName.current.value)
            
    }
    function handleKeyPress(event){
        if(event.key==='Enter'){
            setName(playerName.current.value)
        }
        
    }
  return (
    <section id='player'>
        <h2>welcome <span>{name}</span></h2>
        <p>
            <input ref={playerName} onKeyDown={handleKeyPress} type="text" maxLength='12' placeholder='Your name'/>
            <button onClick={handleInput}>Set Name</button>
        </p>
    </section>
  )
}

export default Player