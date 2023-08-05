import React from 'react'
import Page1 from './Page1'
import { Route , Routes } from 'react-router-dom'
import ShowQ from './ShowQ'
import EndPage from './EndPage'
export default function App() {
  return (
    <Routes>

      <Route path='/' element={<Page1></Page1>}></Route>
      <Route path='/ques' element={<ShowQ></ShowQ>}></Route>
      <Route path='/end' element={<EndPage></EndPage>}></Route>

    </Routes>
  )
}
