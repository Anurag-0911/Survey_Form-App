import React from 'react'
import "./EndPage.css"
import img1 from './image/background6.jpg'
import { useNavigate } from 'react-router-dom';

export default function EndPage() {
  const navigate = useNavigate();

  const responsearr = localStorage.getItem("userans");
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("useremail");
  const submitresponse =()=>
  {
    fetch("http://localhost:8000/submit",
    {
      method :"post",
      headers:{ "Content-Type":"application/json"},
      body: JSON.stringify({

       username:username,
       email:email,
       response:responsearr
      })
  
    }).then(res => res.json()).then(data => {
    
        if(data.message)
        {
          console.log("success")
          localStorage.setItem("submitted","true");
          navigate("/thankyou");              
        }
        else{
            console.log("error saving data");    
      }

    });


  }
  return (<>
  <img src={img1} alt = ""/>
    <div className='tyb'>
      <h1 className='ty'> Your responses have been Recorded.<span id='tnq'><br></br>Please submit </span></h1>
      <button className='submit-button' onClick={()=>submitresponse()}>Submit</button>
    </div>
    </>
  )
}
