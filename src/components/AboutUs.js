import React from "react";
import aboutImg from "../images/about.webp";

const AboutUs = () => {
  return (
    <div className='sm:flex items-center max-w-screen-xl'>
      <div className='sm:w-1/2 p-10'>
        <div className='image object-center text-center'>
          <img src={aboutImg} alt='' />
        </div>
      </div>
      <div className='sm:w-1/2 p-5'>
        <div className='text'>
          <span className='text-gray-500 border-b-2 border-indigo-600 uppercase'>
            About us
          </span>
          <h2 className='my-4 font-bold text-3xl  sm:text-4xl '>
            About <span className='text-indigo-600'>The Office</span>
          </h2>
          <p className='text-gray-700'>
            "Our office in Rongai offers a serene, productivity-focused
            workspace with free parking, high-speed Wi-Fi, and a backup
            generator, tailored to support professionals and entrepreneurs.".
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
