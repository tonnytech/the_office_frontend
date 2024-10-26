import React from "react";

const EmailSubscription = () => {
  return (
    <section className='flex h-full justify-center items-center dark:bg-gray-800'>
      <div className='p-6'>
        <div className='flex flex-wrap items-center w-full max-w-5xl p-5 mx-auto text-left border border-gray-200 rounded lg:flex-nowrap md:p-8 dark:border-gray-700'>
          <div className='flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2'>
            <h3 className='mb-2 text-2xl font-bold text-gray-700 dark:text-gray-200'>
              Subscribe to get updates
            </h3>
            <p className='text-gray-500 dark:text-gray-400 '>
              Provide your email to get email notification and announcement
              related to our workspace.
            </p>
          </div>
          <div className='w-full px-1 flex-0 md:w-auto lg:w-1/2'>
            <form novalidate=''>
              <input type='hidden' name='tags' value='earlyaccess' />
              <div className='flex flex-col sm:flex-row'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter your email address'
                  className='flex-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
                />
                <button
                  type='submit'
                  className='w-full px-6 py-4 mt-5 text-white text-lg bg-gray-900 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap dark:bg-gray-900'>
                  {" "}
                  Subscribe{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
