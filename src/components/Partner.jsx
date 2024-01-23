import React from 'react'
import Partner1 from '../assets/logos/Frame 1.png'
import Partner2 from '../assets/logos/Frame 14.png'
import Partner3 from '../assets/logos/Frame 15.png'
import Partner4 from '../assets/logos/image 4.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset: 120,
  delay: 0, 
  duration: 800, 
  easing: 'ease',
});

const Partner = () => {
  return (
    <div className='bg-[#fff0f8] mt-[10rem] max-sm:mt-[5rem] max-md:px-10 flex flex-col gap-24 max-md:gap-10 py-[5%] items-center w-screen max-md:pt-[10%] max-sm:pb-[10%]'>
       <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="300" className='text-2xl max-sm:text-xl'>BUSINESSS PARTNERS</p>
       <div className='grid grid-cols-4 w-screen place-items-center px-[10%] max-sm:grid-cols-2'>
          <img data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" src={Partner1} alt="/" className='max-sm:w-[60%]'/>
          <img data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" src={Partner2} alt="/" className='max-sm:w-[60%]' />
          <img data-aos="fade-up" data-aos-offset="200" data-aos-delay="300" src={Partner3} alt="/" className='max-sm:w-[60%]' />
          <img data-aos="fade-up" data-aos-offset="200" data-aos-delay="400" src={Partner4} alt="/" className='max-sm:w-[60%]' />
       </div> 
    </div>
  )
}

export default Partner