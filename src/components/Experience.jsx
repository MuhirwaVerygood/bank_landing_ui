import React from 'react';
import features from '../data/Features';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset: 120,
  delay: 0, 
  duration: 800, 
  easing: 'ease',
});

const Experience = () => {
    const text = "Creating Extraordinary Customer Experience";
    const textStyle = {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Customize the shadow values here
      };    
  return (
    <div className='px-36 flex flex-col gap-[6rem] mt-[18rem] max-sm:mt-[10rem] justify-center max-sm:px-10 max-lg:px-10'>
      <div className="flex flex-col justify-center text-center gap-5">
        <h2 data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" style={textStyle} className='2xl:text-6xl max-sm:text-3xl sm:text-4xl font-extrabold tracking-tight'>{text.split('').map((letter, index) => (<span key={index}>{letter}</span>))}</h2>
        <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" className=' text-gray-400 text-[18px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          bibendum eget morbi dignissim eu pharetra consequat montes, sagittis. <br />bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.
        </p>
      </div>

      {/* <div className="flex justify-center"> */}
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10 place-items-center">
        {features.map((feature) => (
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="300" key={feature.id} className="w-[15rem] flex flex-col gap-5 p-8 hover:cursor-pointer max-sm:w-[80%] hover:scale-105 hover:shadow-xl rounded-xl">
            <img src={feature.image} alt={feature.title} className='w-[3rem] object-contain' />
            <h2 className='text-3xl font-extrabold'>{feature.title}</h2>
            <p className='text-gray-500'>{feature.text}</p>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Experience;
