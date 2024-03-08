import React from 'react'

const Crossfit = () => {
  return (
    <div>
        {/* Image part */}
        <div className='flex flex-col gap-6'>
            <h1 className='md:text-5xl text-2xl font-bold text-customColor text-center'>CrossFit</h1>
            <p className='sm:text-2xl text-customColor text-center'>CrossFit is a high-intensity fitness program that combines elements of cardio, weightlifting, gymnastics, and other exercises to create varied, challenging workouts. It was founded by Greg Glassman and Lauren Jenai in 2000 and has since grown into a global fitness phenomenon.</p>
            <img className='md:max-w-[1200px] rounded-[50px] object-cover sm:mx-auto max-h-[600px] mx-4' src="https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Crossfit