import React from 'react'
import results from '../data/Results'

const Results = () => {
  return (
    <div className='flex flex-col px-32 py-[10rem] gap-[5rem] sm:px-10 max-sm:px-10'>
        <div className='flex flex-col gap-7 text-center'>
        <h1 className='text-[#343434] text-4xl max-md:text-3xl font-bold'>Our best results for the year</h1>
        <p className='text-[#999999]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus <br/> mattis vel feugiat erat tortor eleifend. 
        </p>
      </div>

      <div className='grid lg:grid-cols-4 lg:gap-9 place-items-center md:grid-cols-3 md:gap-5 sm:grid-cols-2 sm:gap-10 max-sm:grid-cols-2'>
      {results.map((result, index) => (
        <div key={result.id} className={`p-4 w-[172px] h-[76] flex flex-col gap-4 ${index === 0 ? 'text-[#ED017F]' : 'text-black'}`}>
          <p className='text-3xl font-bold max-sm:text-2xl'>{result.percentage}</p>
          <p className=' font-light text-[16px] uppercase max-sm:text-[14px]'>{result.text}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Results