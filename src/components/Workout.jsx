import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Workout = () => {

  return (
    <>
    <div id='#workout' className='bg-gray-200'>
        {/* Title */}
        <h1 className='font-bold text-4xl sm:text-5xl md:text-7xl text-center m-2'>Workout Plans</h1>
        <p className='text-5xl text-center mt-[30px] underline'>Choose your plan</p>
        <p className='text-4xl text-center mt-[50px] font-bold text-sky-900'>Bodybuilding</p>

        {/* CARDS PART */}

        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
          {/*First card */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
            <Link to='/bro'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>Brosplit</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://t3.ftcdn.net/jpg/01/19/59/74/360_F_119597487_SnvLBdheEGOxu05rMQ5tCzo250cRrTz9.jpg" alt="" />
            </Link>
          </div>

          {/*Second card */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
            <Link to='/ppl'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>PPL split</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://t3.ftcdn.net/jpg/01/19/59/74/360_F_119597487_SnvLBdheEGOxu05rMQ5tCzo250cRrTz9.jpg" alt="" />
            </Link>
          </div>

          {/*Third card */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
            <Link to='/arnold'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>Arnold split</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://t3.ftcdn.net/jpg/01/19/59/74/360_F_119597487_SnvLBdheEGOxu05rMQ5tCzo250cRrTz9.jpg" alt="" />
            </Link>
          </div>
          
        </div>
        <div className='border-2 border-black mt-16 w-[800px] mx-auto'></div>
        <p className='text-4xl text-center font-bold text-sky-900 mt-16'>Cardio</p>

        {/*Cardio PART */}
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
          {/*First card */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
              <h1 className='font-bold text-4xl text-center'>Home</h1>
            </div>
            <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://media.istockphoto.com/id/1299769825/photo/indian-man-running-on-spot-at-home.jpg?b=1&s=612x612&w=0&k=20&c=OTHW2GyOdJCSEAUkELuTQalCoEmY7Un5MiawDM9Jc9A=" alt="" />
          </div>
          {/*Second card */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
              <h1 className='font-bold text-4xl text-center'>Outdoor</h1>
            </div>
            <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/6039243/pexels-photo-6039243.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          {/*Third card */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
              <h1 className='font-bold text-4xl text-center'>Gym</h1>
            </div>
            <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
        </div>
        <div className='border-2 border-black mt-16 w-[800px] mx-auto'></div>
        {/*Other Pages Part */}
        <div className='text-4xl text-center font-bold text-sky-900 mt-16'>Other Pages</div>
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6'>
          {/*CARDS PART */}
          {/* Frist Card */}
          <div className='relative rounded-xl'>
            {/* Overlay */}
            <Link to='/nutrition'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>Nutrition</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bodybuilding" />
            </Link>
          </div>
          {/* Frist Card */}
          <div className='relative rounded-xl'>
            {/* Overlay */}
            <Link to='/bodybuilding'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>Bodybuilding & Powerlifting</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bodybuilding" />
            </Link>
          </div>
          {/* Third Card */}
          <div className='relative rounded-xl'>
            {/* Overlay */}
            <Link to='/crossfit'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>Crossfit</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bodybuilding" />
            </Link>
          </div>
          {/* Fourth Card */}
          <div className='relative rounded-xl'>
            {/* Overlay */}
            <Link to='/yoga'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>Yoga</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://media.istockphoto.com/id/1184595440/photo/beautiful-happy-girl-with-closed-eyes-practicing-yoga-in-lotus-position-in-bedroom-in-the.jpg?b=1&s=612x612&w=0&k=20&c=ptwoMjXPLSWsajHWaOJyQfU9P7vbWBtD1b_HSimkAnY=" alt="bodybuilding" />
            </Link>
          </div>
          
        </div>




    </div>
    </>
    
  )
}

export default Workout