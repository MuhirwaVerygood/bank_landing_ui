import React from 'react';
import services from '../data/Services';
import { IoArrowForward } from 'react-icons/io5';

const Services = () => {
  return (
    <div className='flex flex-col gap-[5rem] justify-center items-center px-32 bg-[#FEF9FC] py-[10rem] max-md:py-[6rem] max-md:px-16'>
      <div className='flex flex-col gap-7 text-center'>
        <h1 className='text-[#343434] text-4xl max-md:text-3xl font-bold'>Our Services</h1>
        <p className='text-[#999999]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          laborum sed adipisci pariatur consectetur sit repellendus, <br/> amet magnam
          nam, soluta ducimus nesciunt nulla expedita aut debitis nostrum
          commodi sunt quaerat.
        </p>
      </div>

      <div className="grid md:grid-cols-3 md:px-[3rem] lg:grid-cols-4 gap-[4rem] max-md:grid-cols-2 max-sm:grid-cols-1 w-screen px-[10rem] max-md:px-[5rem] max-sm:gap-[6rem] max-md:mb-[6rem]">
        {' '}
        {services.map((service) => (
          <div key={service.id} className="flex flex-col gap-5 cursor-pointer hover:ease-out hover:duration-150 hover:scale-105">
            <div className='object-cover'>
              <img
                src={service.image}
                alt={`Service ${service.id}`}
                className="w-full h-auto "
              />
            </div>

            <div className='flex flex-row gap-4 justify-between'>
              <p className='text-[#363940] lg:text-xl uppercase flex flex-col md:text-[16px] max-sm:text-lg'>
                <span>{service.text1}</span>
                <span>{service.text2}</span>
              </p>
              <div className='bg-[#FCE0EF] p-1 rounded-full w-[2rem] h-[2rem]'><IoArrowForward size={25} color='#ED017F' /></div>
            </div>            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
