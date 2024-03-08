import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        
        <div className='bg-stone-400 text-customColor'>
            {/* upper side */}
            <div className='flex justify-between'>
                {/* Left side */}
                <div className='flex flex-col mx-4 gap-4'>
                    {/* title */}
                    <h1 className='sm:text-5xl '>Gym<span className='font-bold'>Hub</span></h1>
                    {/* Links */}
                    <ul className='grid grid-cols-2 sm:text-2xl'>
                        <li><Link to='/Gym_Hub'>Home</Link></li>
                        <li><Link to='/Gym_Hub/workout'>Workout</Link></li>
                        <li><Link to='/Gym_Hub/nutrition'>Nutrition</Link></li>
                        <li><Link to='/Gym_Hub/bodybuilding'>Bodybuilding</Link></li>
                        <li><Link to='/Gym_Hub/crossFit'>CrossFit</Link></li>
                        <li><Link to='/Gym_Hub/yoga'>Yoga</Link></li>
                    </ul>
                    {/* Social icons */}
                    <div className='text-black flex gap-3 mb-2'>
                        <FaInstagram size={35}/>
                        <FaFacebook size={35}/>
                        <FaTwitter size={35}/>
                        <FaYoutube size={38}/>
                    </div>
                </div>
                {/* Right Side */}
                <div className='flex flex-col gap-5+'>
                    <p className='sm:text-3xl font-bold'>Get the freshest Gym Hub news</p>
                    <div className='flex justify-center'>
                        <input className='border text-customColor border-customColor placeholder:text-customColor w-[280px] p-2' type="search" placeholder='Enter your email here'/>
                        <button className='text-customBackground bg-customColor p-2 hover:bg-customBackground hover:text-customColor'>Subscribe</button>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" className='w-[20px] mb-6'/>
                        <p className='sm:text-xl max-w-[350px]'>By checking this box, you agree that you are at least 16 years of age.</p>
                    </div>
                </div>
            </div>

            {/* lower side */}

        </div>
    </>
  )
}

export default Footer