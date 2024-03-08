import React from 'react'
import Data from '../data.json'

const Musclegain = () => {
  return (
    <div className='text-gray-500'>
            {Data.length > 0 && (
                <div key={Data[1].id}>
                    <h1 className='sm:text-4xl text-2xl text-center font-bold text-gray-700 mb-2'>{Data[1].title}</h1>
                    <p className='text-2xl'><span className='sm:text-3xl font-bold'>Caloric Deficit:</span>{Data[1].Caloric}</p>
                    <p className='text-2xl'><span className='sm:text-3xl font-bold'>Macronutrient Distribution:</span> {Data[1].Distribution}</p>

                    {Data[1].Sample.map((meal, index) => (
                        <div key={index}>
                            <h2 className='text-3xl underline font-bold mt-5 text-center text-gray-700'>Meal</h2>
                            <div className='flex flex-col gap-2 ml-2'>
                                <p className='text-xl'><span className='text-2xl font-bold'>Breakfast:</span> {meal.Breakfast}</p>
                                <p className='text-xl'><span className='text-2xl font-bold'>Snack:</span> {meal.Snack}</p>
                                <p className='text-xl'><span className='text-2xl font-bold'>Lunch:</span> {meal.Lunch}</p>
                                <p className='text-xl'><span className='text-2xl font-bold'>Snack:</span> {meal.Snack2}</p>
                                <p className='text-xl'><span className='text-2xl font-bold'>Dinner:</span> {meal.Dinner}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
  )
}

export default Musclegain