import React from 'react'
import results from '../data/Results'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset: 120,
  delay: 0, 
  duration: 800, 
  easing: 'ease',
});

const Results = () => {
  return (
    <div className='flex flex-col px-32 py-[10rem] gap-[5rem] sm:px-10 max-sm:px-10'>
        <div className='flex flex-col gap-7 text-center'>
        <h1 data-aos="fade-up" data-aos-offset="200" data-aos-delay="300" className='text-[#343434] text-4xl max-md:text-3xl font-bold'>Our best results for the year</h1>
        <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="300" className='text-[#999999]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus <br/> mattis vel feugiat erat tortor eleifend. 
        </p>
      </div>

      <div className='grid lg:grid-cols-4 lg:gap-9 place-items-center md:grid-cols-3 md:gap-5 sm:grid-cols-2 sm:gap-10 max-sm:grid-cols-2'>
      {results.map((result, index) => (
        <div data-aos="fade-down" data-aos-offset="200" data-aos-delay="300" key={result.id} className={`p-4 w-[172px] h-[76] flex flex-col gap-4 ${index === 0 ? 'text-[#ED017F]' : 'text-black'}`}>
          <p className='text-3xl font-bold max-sm:text-2xl'>{result.percentage}</p>
          <p className=' font-light text-[16px] uppercase max-sm:text-[14px]'>{result.text}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Results