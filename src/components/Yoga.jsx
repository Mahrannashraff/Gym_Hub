import React from 'react'

const Yoga = () => {
  return (
    <div>
        {/* Image part */}
        <div className='flex flex-col gap-6'>
            <h1 className='md:text-5xl text-2xl font-bold text-customColor text-center'>Yoga</h1>
            <p className='sm:text-2xl text-customColor text-center'>Yoga is a holistic practice originating from ancient India that focuses on integrating the mind, body, and spirit. It encompasses a wide range of physical, mental, and spiritual disciplines, with the ultimate goal of achieving harmony and balance. While yoga has its roots in Hinduism, it is not a religious practice, and people of all backgrounds and beliefs can participate.</p>
            <img className='md:max-w-[1200px] rounded-[50px] object-cover sm:mx-auto max-h-[600px] mx-4' src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Yoga