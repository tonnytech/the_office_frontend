import React from "react";

const Services = () => {
  return (
    <section id='new-features' className='py-8 bg-white sm:py-10 lg:py-16'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl'>
            Boost Your Productivity{" "}
          </h2>
          <p className='mt-4 text-base leading-7 text-gray-600 sm:mt-8'>
            Enhance your workflow with quality services
          </p>
        </div>
        <div className='grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24'>
          {/* <!-- Feature 1 --> */}
          <div className='md:p-8 lg:p-14 flex flex-col justify-center items-center'>
            <div className='w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center'>
              <i className='fa-solid fa-wifi text-3xl text-gray-900'></i>
            </div>
            <h3 className='mt-12 text-xl font-bold text-gray-900'>
              High-speed Internet
            </h3>
            <p className='mt-5 text-base text-gray-600'>
              We offer high-speed internet to ensures fast, reliable
              connectivity for efficient workflows.
            </p>
          </div>

          {/* <!-- Feature 2 --> */}
          <div className='md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center'>
            <div className='w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center'>
              <i className='fa-solid fa-bolt text-3xl text-gray-900'></i>
            </div>
            <h3 className='mt-12 text-xl font-bold text-gray-900'>
              Back-up generator
            </h3>
            <p className='mt-5 text-base text-gray-600'>
              A backup generator ensures continuous power, minimizing downtime
              and maintaining productivity.
            </p>
          </div>

          {/* <!-- Feature 3 --> */}
          <div className='md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center'>
            <div className='w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center'>
              <i className='fa-solid fa-chair text-3xl text-gray-900'></i>
            </div>
            <h3 className='mt-12 text-xl font-bold text-gray-900'>
              Dedicated seat
            </h3>
            <p className='mt-5 text-base text-gray-600'>
              Book early to secure a dedicated seat, ensuring guaranteed
              workspace access for your paid period.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
