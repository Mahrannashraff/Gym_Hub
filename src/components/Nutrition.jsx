import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../data.json'

const Nutrition = () => {
  return (
    <>
        <div id='nutrition' className='bg-customBackground'>

                <h1 className='font-bold text-4xl sm:text-5xl md:text-7xl text-center pt-2'>Nutrition Plans</h1>
                <p className='sm:text-5xl text-3xl text-center mt-[30px] underline text-customColor'>Choose the plan</p>

                {/* Cards Part */}
                <div className='max-w-[1640px] sm:mx-[180px] p-4 py-12 gap-6 flex flex-col justify-center min-w-[250px] '>
                    {/* First One */}
                    <div className='rounded-xl relative '>
                        <Link to="/Gym_Hub/weightloss">
                            <div className='bg-black/50 absolute w-full h-full rounded-xl text-stone-300 flex flex-col justify-center '>
                                <h1 className='font-bold text-4xl text-center'>Weight Loss</h1>
                            </div>
                            <img className='max-[160px] md:max-h-[300px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                        </Link>
                    </div>
                    {/* Second One */}
                    <div className='rounded-xl relative'>
                        <Link to="/Gym_Hub/musclegain">
                            <div className='bg-black/50 absolute w-full h-full rounded-xl text-stone-300 flex flex-col justify-center'>
                                <h1 className='font-bold text-4xl text-center'>Muscle Gain</h1>
                            </div>
                            <img className='max-[160px] md:max-h-[300px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                        </Link>
                    </div>
                    {/* Third One */}
                    <div className='rounded-xl relative'>
                        <Link to="/Gym_Hub/atheltic">
                            <div className='bg-black/50 absolute w-full h-full rounded-xl text-stone-300 flex flex-col justify-center'>
                                <h1 className='font-bold text-4xl text-center'>Athletic Performance</h1>
                            </div>
                            <img className='max-[160px] md:max-h-[300px] sm:w-full w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                        </Link>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Nutrition