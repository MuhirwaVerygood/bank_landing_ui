import React from 'react';
import Family from '../assets/images/family.png'
import Frame1 from '../assets/images/Frame 2.png'
import Frame2 from '../assets/images/Frame 3.png'
import { HiOutlinePhone } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";


const Hero = () => {
  return (
    <div className="mb-[10rem] pl-32 max-lg:px-[2rem] flex flex-row items-center max-lg:flex-col max-lg:mt-[4rem] max-lg:text-center">
      {/* left side */}
      <div className="flex flex-1 h-[85vh] flex-col justify-center gap-10">
        <h1 className='md:text-[5rem] 2xl:mt-8 tracking-tight font-bold xl:text-[5rem] max-md:text-[3rem] lg:text-[4rem] max-sm:text-[2.3rem]'>
          Chase Your <br /> Dream with us
        </h1>
        <p className=' text-gray-500 xl:text-2xl md:text-xl sm:text-lg lg:text-lg'>
          The harder you work for something, the greater <br /> you’ll feel when you
          achieve it.
        </p>
        <div className=' flex flex-row gap-6 max-lg:justify-center'>
          <button className="border-transparent text-[17px] rounded-md lg:py-[10px] lg:text-[15px] lg:px-3 bg-[#ED017F] xl:px-10 xl:py-[15px] text-white tracking-widest max-lg:py-[10px] max-lg:px-4 max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] max-sm:py-1 max-sm:px-4">
            APPLY ONLINE
          </button>
          <button className="border-[#ED017F] border-[1px] text-[17px] lg:py-[10px] lg:text-[15px] rounded-md bg-transparent px-10 py-[15px] text-[#ED017F] tracking-widest max-lg:py-[10px] max-lg:px-4 max-lg:text-[14px] max-md:text-[12px] max-sm:text-[12px] max-sm:py-[14px] max-sm:px-4">
            LOAN CALCULATOR
          </button>
        </div>

        <div className='flex flex-row items-center gap-6 pt-10 max-lg:justify-center'>
            <div className='flex flex-row gap-5 items-center'>
               <HiOutlinePhone size={26} color='#ED017F' />
               <p className=' text-xl'>16519</p>
            </div>
            
            <div className='flex flex-row gap-5 items-center max-md:gap-8'>
               <FaFacebookF size={26} color='#3333ff' className='max-md: w-[20px] cursor-pointer'/>
               <FaYoutube size={26} color='#ff0000' className='max-md: w-[20px] cursor-pointer'/>
               <FaLinkedin size={26} color='#3399ff' className='max-md: w-[20px] cursor-pointer' />
               <IoLogoInstagram size={26} color='#ff3399' className='max-md: w-[20px] cursor-pointer' /> 
            </div>
        </div>
      </div>

      {/* right side */}
      <div className="relative flex-1 h-[85vh] bg-[#FFEAF5] max-lg:mt-[10rem] max-md:mt-[5rem]">
        <section className=''>
          <img src={Family} alt="/" className='w-[100%] mx-auto lg:mt-[15rem]'/>
 
          <div>
            <img src={Frame2} alt="/" className='absolute top-24 sm:left-[-1rem] 2xl:left-[-8rem] sm:w-[40%] max-sm:w-[40%] max-sm:left-[-1rem]'/>
          </div> 

          <div>
            <img src={Frame1} alt="/" className='absolute top-[20rem] right-0 sm:w-[40%] sm:right-[-1rem]  max-sm:w-[40%] max-sm:right-[-1rem] max-sm:top-10' />
          </div>

          

        </section>
      </div>
    </div>
  );
};

export default Hero;
