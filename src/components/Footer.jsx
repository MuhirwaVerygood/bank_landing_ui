import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { HiOutlinePhone } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className='lg:px-32 py-[7rem] grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 place-items-center align-top gap-8 max-sm:grid-cols-2 sm:px-8 max-sm:px-10 max-sm:gap-10 max-sm:w-full'>
      <div className='flex flex-col gap-3'>
        <p className='text-[#010101] text-xl font-bold'>About the company</p>
        <p className='text-[#676767]'>Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch </p>
        <div className='flex flex-row gap-5 pt-[5rem] max-sm:pt-[1rem] sm:pt-[2rem]'>
        <FaFacebookF size={26} color='#3333ff' className='max-md: w-[20px] cursor-pointer'/>
               <FaYoutube size={26} color='#ff0000' className='max-md: w-[20px] cursor-pointer'/>
               <FaLinkedin size={26} color='#3399ff' className='max-md: w-[20px] cursor-pointer' />
               <IoLogoInstagram size={26} color='#ff3399' className='max-md: w-[20px] cursor-pointer' /> 
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <p className='text-[#010101] text-xl font-bold'>Products</p>
        <div className='flex flex-col gap-2'>
          <p className='text-[#676767] cursor-pointer'>CSR Activities</p>
          <p className='text-[#676767] cursor-pointer'>Green Banking</p>
          <p className='text-[#676767] cursor-pointer'>News</p>
          <p className='text-[#676767] cursor-pointer'>Ongoing Campgain</p>
          <p className='text-[#676767] cursor-pointer'>Updates</p>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <p className='text-[#010101] text-xl font-bold'>Get Started</p>
        <div className='flex flex-col gap-2'>
          <p className='text-[#676767] cursor-pointer'>Career</p>
          <p className='text-[#676767] cursor-pointer'>Contact Us</p>
          <p className='text-[#676767] cursor-pointer'>Government Securities</p>
          <p className='text-[#676767] cursor-pointer'>Examples</p>
          <p className='text-[#676767] cursor-pointer'>NIS</p>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <p className='text-[#010101] text-xl font-bold'>About</p>
        <div className='flex flex-col gap-2'>
          <p className='text-[#676767] cursor-pointer'>IPDC at a Glance</p>
          <p className='text-[#676767] cursor-pointer'>IPDC at a Glance</p>
          <p className='text-[#676767] cursor-pointer'>Corporate Governanace</p>
          <p className='text-[#676767] cursor-pointer'>Shareholders</p>
          <p className='text-[#676767] cursor-pointer'>Investor Relations</p>
        </div>
      </div>

      <div className='flex flex-row gap-5 items-center mb-auto'>
        <HiOutlinePhone size={26} color='#ED017F' />
        <p className=' text-xl'>16519</p>
      </div>
    </div>
  )
}

export default Footer