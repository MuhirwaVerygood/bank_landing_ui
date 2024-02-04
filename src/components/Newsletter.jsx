import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset: 120,
  delay: 0,
  duration: 800,
  easing: 'ease',
});

const Newsletter = () => {
  return (
    <div className="bg-[#FEF9FC] flex flex-col gap-10 py-[10rem] px-32 justify-center items-center max-sm:px-10">
      <div className="flex flex-col gap-7 text-center">
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="300"
          className="text-[#343434] text-4xl max-md:text-3xl font-bold"
        >
          Newsletter
        </h1>
        <p
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="300"
          className="text-[#999999]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Eget
          ac quis aliquam arcu lacus.
        </p>
      </div>

      <div className="flex flex-row gap-5">
        <input
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="300"
          type="email"
          placeholder="Your email"
          className="outline-none px-3 text-[#CCCCCC] w-[486px] rounded-lg border border-gray-300 max-md:w-[350px] max-sm:w-[260px] max-sm:p-3"
        />
        <button
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="300"
          className="border-transparent text-[17px] rounded-md lg:py-[10px] lg:text-[15px] lg:px-3 bg-[#ED017F] xl:px-10 xl:py-[15px] text-white tracking-widest max-lg:py-[10px] max-lg:px-4 max-lg:text-[14px] max-md:text-[12px] max-sm:text-[13px] max-sm:font-bold max-sm:py-1 max-sm:px-4"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
