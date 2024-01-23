import React from 'react'
import Partner1 from '../assets/logos/Frame 1.png'
import Partner2 from '../assets/logos/Frame 14.png'
import Partner3 from '../assets/logos/Frame 15.png'
import Partner4 from '../assets/logos/image 4.png'

const Partner = () => {
  return (
    <div className='bg-[#fff0f8] mt-[10rem] max-sm:mt-[5rem] max-md:px-10 flex flex-col gap-24 max-md:gap-10 py-[5%] items-center w-screen max-md:pt-[10%] max-sm:pb-[10%]'>
       <p className='text-2xl max-sm:text-xl'>BUSINESSS PARTNERS</p>
       <div className='grid grid-cols-4 w-screen place-items-center px-[10%] max-sm:grid-cols-2'>
          <img src={Partner1} alt="/" className='max-sm:w-[60%]'/>
          <img src={Partner2} alt="/" className='max-sm:w-[60%]' />
          <img src={Partner3} alt="/" className='max-sm:w-[60%]' />
          <img src={Partner4} alt="/" className='max-sm:w-[60%]' />
       </div> 
    </div>
  )
}

export default Partner