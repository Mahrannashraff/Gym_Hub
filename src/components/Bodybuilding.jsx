import React from 'react'
import { Link } from 'react-router-dom'

const Bodybuilding = () => {
  return (
    <div className='flex flex-col bg-customBackground'>
        {/* Bodybuilding part */}
        <div className='flex gap-4 justify-evenly mt-6'>
            {/* Text */}
            <div className='flex flex-col justify-center gap-4'>
                <h1 className='sm:text-5xl font-bold text-customColor'>Bodybuilding</h1>
                <p className='sm:text-2xl text-customColor'>Bodybuilding involves structured strength training <br/> and nutrition plans designed to increase muscle mass, strength, <br/>and definition, typically for competitive purposes <br/>or personal aesthetic goals.</p>
                <p className='sm:text-2xl text-customColor'>If you want some workout plans go to <span className='font-bold underline'><Link to='/Gym_hub/workout'>Workout Page</Link></span></p>
                <p className='sm:text-2xl text-customColor'>If you want some nutrition plans go to <span className='font-bold underline'><Link to='/Gym_hub/nutrition'>Nutrition Page</Link></span></p>
            </div>
            <img className='sm:max-h-[550px] max-h-[300px] rounded-t-[100px] border-solid border-[10px] border-black/70 shadow-2xl' src="https://images.pexels.com/photos/3014237/pexels-photo-3014237.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bodybuilding" />
        </div>

        <div className='border-2 border-black mt-16 w-[800px] mx-auto'></div>
        
        {/* Powerlifting part */}
        <div className='flex gap-8 m-6 mt-12 text-customColor'>
            <img className='sm:max-h-[550px] max-h-[300px] rounded-t-[100px] border-solid border-[10px] border-black/70 shadow-2xl  sm:max-w-[600px]' src="https://media.istockphoto.com/id/892366954/photo/huge-man-is-preparing-to-perform-an-exercise-called-deadlift.jpg?b=1&s=612x612&w=0&k=20&c=S7XoFSLwDWzrBXEWFjx9rBiJB46B-a6L4TuMvT9XPAE=" alt="bodybuilding" />
            {/* Text */}
            <div className='flex flex-col justify-center gap-4'>
                <h1 className='sm:text-5xl font-bold'>Powerlifting</h1>
                <p className='sm:text-2xl'>Powerlifting is a strength sport that involves three primary lifts—squat, bench press, and deadlift—aiming to lift maximal weight within specific weight classes, emphasizing raw strength and technique.</p>
                <p className='sm:text-2xl'>If you want some workout plans go to <span className='font-bold underline'><Link to='/Gym_hub/workout'>Workout Page</Link></span></p>
                <p className='sm:text-2xl'>If you want some nutrition plans go to <span className='font-bold underline'><Link to='/Gym_hub/nutrition'>Nutrition Page</Link></span></p>
            </div>
        
        </div>
        <div className='border-2 border-black mt-16 w-[800px] mx-auto'></div>

        <div className='text-4xl text-center font-bold text-amber-950 mt-16'>Other Pages</div>
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6'>
          {/*CARDS PART */}
          {/* Frist Card */}
          <div className='relative rounded-xl'>
            {/* Overlay */}
            <Link to='/Gym_Hub/nutrition'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>Nutrition</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bodybuilding" />
            </Link>
          </div>
          {/* second Card */}
          <div className='relative rounded-xl'>
            {/* Overlay */}
            <Link to='/Gym_Hub/workout'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>Workout</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bodybuilding" />
            </Link>
          </div>
          {/* Third Card */}
          <div className='relative rounded-xl'>
            {/* Overlay */}
            <Link to='/Gym_Hub/crossfit'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>Crossfit</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bodybuilding" />
            </Link>
          </div>
          {/* Fourth Card */}
          <div className='relative rounded-xl'>
            {/* Overlay */}
            <Link to='/Gym_Hub/yoga'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-center'>Yoga</h1>
              </div>
              <img className='max-[160px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://media.istockphoto.com/id/1184595440/photo/beautiful-happy-girl-with-closed-eyes-practicing-yoga-in-lotus-position-in-bedroom-in-the.jpg?b=1&s=612x612&w=0&k=20&c=ptwoMjXPLSWsajHWaOJyQfU9P7vbWBtD1b_HSimkAnY=" alt="bodybuilding" />
            </Link>
          </div>
          
        </div>
    </div>
  )
}

export default Bodybuilding