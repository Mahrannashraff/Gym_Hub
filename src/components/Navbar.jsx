import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { GrPlan, GrYoga } from "react-icons/gr";
import { IoIosNutrition, IoIosHome } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { GiWeightLiftingUp } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav= () => setNav(!nav)

  return (
    <div className='navbar max-w-[1640px] flex justify-between items-center mx-auto py-2 h-[70px] bg-stone-400 text-customColor'>
        {/*Left side */}
        <div className='flex items-center' >
            {/* Gym Hub */}
            <AiOutlineMenu className='cursor-pointer' size={35} onClick={toggleNav}/>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl px-2 text-stone-800'><Link to='/Gym_Hub' className='flex'>GYM <span className='font-bold ml-1'>HUB</span></Link></h1>
        </div>
        
        {/*Middle*/}
        <div className='px-2 flex items-center bg-stone-200 rounded-full w-[100px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='w-full focus:outline-none p-2 bg-transparent' type="text" placeholder='Search...'/>
        </div>
        
        {/*Right side */}
        <div className=''>
            <button className='bg-customColor text-stone-300 text-xl sm:w-[100px] rounded-lg p-2 mr-2 hover:text-customColor hover:bg-customBackground'>Sign In</button>
        </div>
        
        {/*Mobile Menu*/}
        {/*Overlay */}
        {nav ? <div className='bg-black/80 fixed h-screen w-full top-0 left-0'></div> : ''}
        
        {/*Side Menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[350px] h-screen bg-stone-400 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-stone-400 z-10 duration-300'}>
            <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={toggleNav}/>
            <h2 className='text-2xl p-4 cursor-pointer' onClick={toggleNav}><Link to='/'>GYM <span className='font-bold'>HUB</span></Link></h2>
            <nav>
                <ul className='flex flex-col p-4 text-customColor' onClick={()=>setNav(!nav)}>
                    <li className='text-2xl py-4 flex'>
                        <Link to='/Gym_Hub' className='flex'>
                            <IoIosHome className=' mr-1' size={30}/> Home
                        </Link> 
                    </li>
                    <li className='text-2xl py-4 flex'>
                        <Link to='/Gym_Hub/workout' className='flex'>
                            <GrPlan className='mt-1 mr-1.5'/> Workout Plans
                        </Link> 
                    </li>
                    <li className='text-2xl py-4 flex'>
                        <Link to='/Gym_Hub/nutrition' className='flex'>
                            <IoIosNutrition className=' mr-1' size={30}/> Nutrition
                        </Link> 
                    </li>
                    <li className='text-2xl py-4 flex'>
                        <Link to='/Gym_Hub/bodybuilding' className='flex'>
                            <CgGym className='mt-1 mr-1' size={35}/> Bodybuilding & Powerlifting
                        </Link> 
                    </li>
                    <li className='text-2xl py-4 flex'>
                        <Link to='/Gym_Hub/crossfit' className='flex'>
                            <GiWeightLiftingUp className=' mr-1' size={30}/> CrossFit
                        </Link> 
                    </li>
                    <li className='text-2xl py-4 flex'>
                        <Link to='/Gym_Hub/yoga' className='flex'>
                            <GrYoga className=' mr-1' size={30}/> Yoga & Mindfulness
                        </Link> 
                    </li>
                </ul>
            </nav>
        </div>
        
    </div>
  )
}

export default Navbar