import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Workout from './components/Workout';
import PPLsplit from './pages/PPLsplit';
import Brosplit from './pages/Brosplit';
import Arnoldsplit from './pages/Arnoldsplit';
import Nutrition from './components/Nutrition';
import Weightloss from './pages/Weightloss';
import Musclegain from './pages/Musclegain';
import Athletic from './pages/Athletic';
import Bodybuilding from './components/Bodybuilding';
import Crossfit from './components/Crossfit';
import Yoga from './components/Yoga';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/Gym_Hub' element={<Home />}/>
            <Route path='/Gym_Hub/workout' element={<Workout />}/>
            <Route path='/Gym_Hub/ppl' element={<PPLsplit />}/>
            <Route path='/Gym_Hub/bro' element={<Brosplit />}/>
            <Route path='/Gym_Hub/arnold' element={<Arnoldsplit />}/>
            <Route path='/Gym_Hub/nutrition' element={<Nutrition />}/>
            <Route path='/Gym_Hub/weightloss' element={<Weightloss />}/>
            <Route path='/Gym_Hub/musclegain' element={<Musclegain />}/>
            <Route path='/Gym_Hub/atheltic' element={<Athletic />}/>
            <Route path='/Gym_Hub/bodybuilding' element={<Bodybuilding />}/>
            <Route path='/Gym_Hub/crossfit' element={<Crossfit />}/>
            <Route path='/Gym_Hub/yoga' element={<Yoga />}/>
          </Routes>
        </div>
        <Footer />
        
    </>
  )
}

export default App
