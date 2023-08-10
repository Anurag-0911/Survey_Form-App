import React, { useState } from 'react'
import './Page1.css'
import { useNavigate } from 'react-router-dom';
import img1 from './image/background6.jpg'

const Page1 = () => {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const navigate = useNavigate();


    const upd_name = (event) => {
        setName(event.target.value);
    };

    const upd_mail = (event) => {
        setMail(event.target.value);
    };
    const start = ()=>
    
        {
            
            if (name === "" || mail === '') {
                console.log("empty value")
                alert("Please Enter your Name and Email carefully.")
                
            } else {
                console.log(name , mail)
                localStorage.setItem("username", name);
                localStorage.setItem("useremail", mail);
                navigate("/ques")
            }
    }

    return (
        <>
            
                <img src={img1} alt = ""/>
            
            
            <h1 id='title'>Welcome To The Survey Form</h1>
           
            

            <div className='container'>
                <div className='name'>
                    <input type='text' placeholder='Enter your Name' value={name} onChange={upd_name}></input>
                </div>
                <div className='input_mail'>
                    <input type='email' placeholder='Enter Email' value={mail} onChange={upd_mail}></input>
                </div>
                <div>

                    <button id='start' onClick={()=>start()
                    }>
                        Start Survey
                    </button>
                </div>

            </div>
        </>
    )
};

export default Page1


