import React from "react";

const Prices = () => {
  return (
    <div className='bg-gray-100 p-10' id='prices'>
      <div className='max-w-2xl lg:max-w-4xl mx-auto text-center mb-10'>
        <h2 className='text-3xl font-extrabold text-gray-900'>Our Prices</h2>
        <p className='mt-4 text-lg text-gray-500'>We offer affodable prices.</p>
      </div>
      <div className='max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        <div className='rounded-lg overflow-hidden shadow-md bg-white'>
          <div className='px-6 py-8'>
            <h3 className='text-3xl font-bold mb-4 text-purple-600'>Hourly</h3>
            <p className='text-lg text-gray-600 mb-8'>
              For less that five hours, pay hourly to get access to a decidated
              seat for the period of time paid for.
            </p>
            <h2 className='text-5xl font-bold mb-8 text-purple-600'>Ksh 100</h2>
            <a
              href='https://api.whatsapp.com/send?phone=+254708864510&text=Hello,more information on hourly package!'
              className='bg-purple-600 text-white py-2 px-4 rounded-lg text-lg hover:bg-purple-700 transition duration-300 ease-in-out'>
              Reach Out
            </a>
          </div>
        </div>
        <div className='rounded-lg overflow-hidden shadow-md bg-white'>
          <div className='px-6 py-8'>
            <h3 className='text-3xl font-bold mb-4 text-green-600'>Daily</h3>
            <p className='text-lg text-gray-600 mb-8'>
              Get a daily package to have acess to all our services for an
              entire day, from 8am to 8pm.
            </p>
            <h2 className='text-5xl font-bold mb-8 text-green-600'>Ksh 500</h2>
            <a
              href='https://api.whatsapp.com/send?phone=+254708864510&text=Hello,more information on daily package!'
              className='bg-green-600 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-700 transition duration-300 ease-in-out'>
              Reach Out
            </a>
          </div>
        </div>
        <div className='rounded-lg overflow-hidden shadow-md bg-white'>
          <div className='px-6 py-8'>
            <h3 className='text-3xl font-bold mb-4 text-yellow-600'>Monthly</h3>
            <p className='text-lg text-gray-600 mb-8'>
              Get a montly package to get access to all our services every week
              from Monday to Saturday.
            </p>
            <h2 className='text-5xl font-bold mb-8 text-yellow-600'>
              Ksh 6,000
            </h2>
            <a
              href='https://api.whatsapp.com/send?phone=+254708864510&text=Hello,more information on monthly package!'
              className='bg-yellow-600 text-white py-2 px-4 rounded-lg text-lg hover:bg-yellow-700 transition duration-300 ease-in-out'>
              Reach Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
