import React from 'react'
import { Link } from 'react-router-dom'
import { MdPlayCircle } from "react-icons/md";
import Navbar from './Navbar';
import Workout from './Workout';
import PPLsplit from '../pages/PPLsplit';

const Home = () => {
  return (
    <>
      
      <div className='bg-stone-300 min-h-screen bg-no-repeat w-screen bg-cover bg-center '>

          {/* Text for home page */}
          <div className=' sm:ml-[150px] ml-5 flex flex-col '>
              <h1 className='text-customColor text-4xl mt-[220px] md:text-6xl md:mt-[220px] font-bold'>Your body hears everything <br/> your mind says.<br/> Feed it positivity at<br/> <span className='text-amber-950'>GYM HUB</span></h1>
              <div className='flex sm:mr-[410px] mt-2'>
                  <button className='bg-customColor text-stone-300 text-2xl rounded-lg p-2 mr-2 sm:w-[150px] h-[50px] hover:bg-stone-400 hover:text-customColor hover:scale-110 hover:duration-500'>Get Started</button>

                  <Link to="https://youtu.be/eaRQF-7hhmo">
                      <button className='bg-customColor text-stone-300 w-[200px] h-[50px] rounded-lg p-2 mr-2 text-2xl flex hover:bg-stone-400 hover:text-customColor hover:scale-110 hover:duration-500'> <MdPlayCircle size={35} className='mr-1'/> Watch video</button>
                  </Link>
                  
              </div>
              
          </div>
          
      </div>

    </>
    
  )
}

export default Home