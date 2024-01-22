import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Workout from './components/Workout';
import PPLsplit from './pages/PPLsplit';
import Brosplit from './pages/Brosplit';
import Arnoldsplit from './pages/Arnoldsplit';

function App() {
  
  return (
    <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/workout' element={<Workout />}/>
            <Route path='/ppl' element={<PPLsplit />}/>
            <Route path='/bro' element={<Brosplit />}/>
            <Route path='/arnold' element={<Arnoldsplit />}/>
          </Routes>
        </div>
        
    </>
  )
}

export default App
