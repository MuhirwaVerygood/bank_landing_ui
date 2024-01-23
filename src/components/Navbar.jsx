import React, { useState } from 'react';
import Logo from '../assets/logos/logo.png';
import { IoSearch } from 'react-icons/io5';
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 120,
  delay: 0, 
  duration: 800, 
  easing: 'ease',
});

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleNav =()=>{
        setNav(!nav);
    }
    
  return (
    <header data-aos="fade-down" className="py-4 top-0 2xl:px-32 xl:px-14 lg:px-7 absoulte z-40 w-full max-lg:px-7">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src={Logo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center 2xl:gap-16 xl:gap-14 lg:gap-7 max-lg:hidden xl:text-[16px] font-bold tracking-widest lg:text-[12px]">
          <li className='cursor-pointer'>RETAIL</li>
          <li className='cursor-pointer'>SME</li>
          <li className='cursor-pointer'>CORPORATE</li>
          <li className='cursor-pointer'>ABOUT US</li>
          <li className='cursor-pointer'>COVID 19</li>
          <li className='cursor-pointer'>CAMPAIGN</li>
        </ul>

        <div className="flex flex-row flex-3 justify-between xl:gap-10 lg:gap-3 items-center max-lg:hidden">
          <IoSearch size={30} color="#ED017F" />
          <button className='border-transparent text-[17px] rounded-md bg-[#ED017F] px-10 py-[10px] text-white tracking-widest'>iSERVICE</button>
        </div>

        <div className='hidden max-lg:block cursor-pointer' onClick={handleNav}>
          {!nav ? <TbMenuDeep size={40} /> : <IoMdClose size={40} />}
        </div>

        <div className={nav ? ' bg-white h-screen shadow-xl w-[60%] absolute top-0 left-0 px-10 py-14 ease-in-out duration-300 z-50' : 'hidden ease-in-out duration-150'}>
        <a href="/">
          <img src={Logo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-col text-black p-10 gap-4">
          <li className='cursor-pointer'>RETAIL</li>
          <li className='cursor-pointer'>SME</li>
          <li className='cursor-pointer'>CORPORATE</li>
          <li className='cursor-pointer'>ABOUT US</li>
          <li className='cursor-pointer'>COVID 19</li>
          <li className='cursor-pointer'>CAMPAIGN</li>
        </ul>
        <div className="flex flex-row gap-4 items-center">
          <button className='border-transparent text-[17px] rounded-md bg-[#ED017F] px-10 py-[10px] text-white tracking-widest'>iSERVICE</button>
          <IoSearch size={30} color="#ED017F" />
        </div>
        </div>


      </nav>
    </header>
  );
};

export default Navbar;
