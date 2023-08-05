import React, { useState } from 'react'
import ShowQ from './ShowQ'; 
import './Page1.css';

const App = () => {

  const [name,setName] = useState("");
  const [mail,setMail] = useState(""); 
  


  const upd_name = (event) => {
    setName(event.target.value);
  };

  const upd_mail = (event) => {
    setMail(event.target.value);
  };
  const Start = () => {
    if (name.trim() !== '' || mail.trim() !== '') {
      console.log("hello");
    } else {
      alert("Name or Mail Option Can't be empty.");
    }
  }
  
  return (
    <>
    <h1 id='title'>Welcome To the Survey Form</h1>
    
        <div className='container'>
        <div className='name'>
        <input type='text' placeholder='Enter your Name' value={name} onChange={upd_name}></input>
        </div>
        <div className='input_mail'>
        <input type='email' placeholder='Enter Email' value={mail} onChange={upd_mail}></input>
        </div>
        <div>

        <button id='start' onClick={Start} disabled={!name || !mail}>
            Start Survey
          </button>
          </div>

       </div>
       <ShowQ/>
    </>
  )
};

export default App




