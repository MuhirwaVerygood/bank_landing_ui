import React from 'react';
import image from '../assets/images/Picture.png';
import { IoArrowForward } from 'react-icons/io5';

const More = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center max-md:mb-[6rem]">

      {/* Left Section (Image) */}
      <div className="flex-1">
        <img src={image} alt="" className="max-xl:w-full xl:w-[80%] md:h-full max-lg:h-full md:object-cover" />
      </div>

      {/* Right Section (Text Content) */}
      <div className='max-md:px-[3rem] max-md:text-center max-md:pt-[10%] flex flex-1'>
        <div className="flex-1 md:p-[5rem] ">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl max-sm:text-xl text-[#343434]">IPDC AT A GLANCE</h2>
            <p className="text-[#676767] text-lg max-lg:text-lg max-sm:text-[16px]">
            IPDC Finance Limited (previously known as "Industrial Promotion and Development Company of
            Bangladesh Limited") is the first private sector financial institution of the country established
            in 1981 by a distinguished group of shareholders namely International Finance Corporation (IFC),
            USA, German Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development
            (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh
            </p>
            <button className="flex items-center gap-2 mt-[10%] md:mt-6 max-md:ml-[40%] max-md:mt-[10%]">
            <span className="text-[#ED017F] text-lg md:text-xl font-semibold">Read More</span>
            <IoArrowForward color="#ED017F" size={20} />
            </button>
        </div>
      </div>
      
    </div>
  );
};

export default More;
