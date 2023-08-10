import React from 'react'
import "./EndPage.css"
import img1 from './image/background6.jpg'

export default function EndPage() {
  return (<>
  <img src={img1} alt = ""/>
    <div className='tyb'>
      <h1 className='ty'> Your responses have been Recorded.<span id='tnq'><br></br>Thank You</span></h1>
      <button className='submit-button'>Submit</button>
    </div>
    </>
  )
}
