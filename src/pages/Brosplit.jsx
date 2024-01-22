import React from 'react'

const Brosplit = () => {
  return (
    <div id='bro' className='flex flex-col'>

        <h1 className='font-bold text-4xl sm:text-5xl md:text-7xl text-center m-2'>Brosplit</h1>
        {/* Push Day */}
        <div className='flex flex-col'>
            <h1 className='text-4xl font-bold mx-2 mt-8'>Day 1:Chest</h1>
            <ol className='flex flex-col gap-2 mt-2 mx-4'>
                <li  className='text-xl'>1.Barbell Bench Press</li>
                <li className='text-xl'>2.Incline Dumbbell Press</li>
                <li className='text-xl'>3.Chest Flyes</li>
                <li className='text-xl'>4.Push-Ups</li>
            </ol>
        </div>

        {/* Border */}
        <div className='border-2 border-black mt-8 w-[800px] mx-auto'></div>

        {/* Pull Day */}
        <div>
            <h1 className='text-4xl font-bold mx-2 mt-8'>Day 2:Back</h1>
            <ol className='flex flex-col gap-2 mt-2 mx-4'>
                <li className='text-xl'>1.Lat Pulldowns</li>
                <li className='text-xl'>2.Barbell Rows</li>
                <li className='text-xl'>3.Seated Cable Rows</li>
                <li className='text-xl'>4.Face Pulls</li>
            </ol>
        </div>

        {/* Border */}
        <div className='border-2 border-black mt-8 w-[800px] mx-auto'></div>

        {/* Legs Day */}
        <div>
            <h1 className='text-4xl font-bold mx-2 mt-4 '>Day 3:Shoulders</h1>
            <ol className='flex flex-col gap-2 mt-2 mx-4'>
                <li className='text-xl'>1.Overhead Press</li>
                <li className='text-xl'>2.Lateral Raises</li>
                <li className='text-xl'>3.Front Raises</li>
                <li className='text-xl'>4.Shrugs</li>
            </ol>
        </div>

        {/* Border */}
        <div className='border-2 border-black mt-8 w-[800px] mx-auto'></div>

        {/* Rest Day */}
        <div>
            <h1 className='text-4xl font-bold mx-2 mt-8'>Day 4:Arms</h1>
            <ol className='flex flex-col gap-2 mt-2 mx-4'>
                <li className='text-xl'>1.Bicep Curls (Barbell or Dumbbell)</li>
                <li className='text-xl'>2.Hammer Curls</li>
                <li className='text-xl'>3.Tricep Dips or Tricep Pushdowns</li>
                <li className='text-xl'>4.Skull Crushers</li>
            </ol>
        </div>

        {/* Border */}
        <div className='border-2 border-black mt-8 w-[800px] mx-auto'></div>

        {/* Push Day */}
        <div>
            <h1 className='text-4xl font-bold mx-2 mt-8'>Day 5:Legs</h1>
            <ol className='flex flex-col gap-2 mt-2 mx-4'>
                <li className='text-xl'>1.Squats</li>
                <li className='text-xl'>2.Leg Press</li>
                <li className='text-xl'>3.Leg Extensions</li>
                <li className='text-xl'>4.Leg Curls</li>
                <li className='text-xl'>5.Calf Raises</li>
            </ol>
        </div>

        {/* Border */}
        <div className='border-2 border-black mt-8 w-[800px] mx-auto'></div>

        {/* Pull Day */}
        <div>
            <h1 className='text-4xl font-bold mx-2 mt-8'>Day 6:Rest or Active Recovery</h1>
        </div>

        {/* Border */}
        <div className='border-2 border-black mt-8 w-[800px] mx-auto'></div>

        {/* Legs Day */}
        <div>
            <h1 className='text-4xl font-bold mx-2 mt-8'>Day 7:Rest</h1>
        </div>

        {/* Border */}
        <div className='border-2 border-black mt-8 w-[800px] mx-auto'></div>

        {/* IMP Points */}
        <div className=''>
            <h1 className='text-4xl font-bold mx-2 mt-8'>Important Points:</h1>
            <ol className='flex flex-col gap-5 mt-2'>
                <li className='text-xl ml-6'>
                    <span className='font-bold '>Frequency:</span> The PPL split typically involves training each major muscle group twice a week, promoting a higher frequency of training compared to other splits.
                </li>
                <li className='text-xl ml-6'>
                    <span className='font-bold'>Compound Movements:</span> Compound exercises like bench press, squats, deadlifts, and overhead press form the foundation of this split.
                </li>
                <li className='text-xl ml-6'>
                    <span className='font-bold'>Progressive Overload:</span>  Focus on progressively increasing the weight and intensity of your workouts to stimulate muscle growth and strength gains.
                </li>
                <li className='text-xl ml-6'>
                    <span className='font-bold'>Adaptations:</span> The PPL split is versatile and can be adapted based on individual preferences, fitness levels, and goals.
                </li>
                <li className='text-xl ml-6'>
                    <span className='font-bold'>Rest and Recovery:</span> Adequate rest and recovery are crucial, and incorporating rest days or active recovery days as needed is essential for preventing overtraining.
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Brosplit