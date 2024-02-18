import React from 'react'
import Home from './components/Home'
import About from './components/About'
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App