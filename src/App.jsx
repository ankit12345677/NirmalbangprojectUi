import React from 'react'
import First from './First'
import "./App.css";
import {Router,Route, Routes} from "react-router-dom"
import Second from './Second';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/first' element={<First/>}></Route>
        <Route path='/second' element={<Second/>}></Route>
      </Routes>
    </>
  )
}

export default App