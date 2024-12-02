import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navToggleRefs = useRef([]);

  const toggleMenu = () => {
    navToggleRefs.current.forEach((element) => {
      element.classList.toggle("hidden");
    });
  };

  return (
    <nav className='flex flex-wrap items-center justify-between py-3 px-2 md:px-10 bg-white'>
      {/* ================================================================== */}
      <Link
        to='/'
        aria-label='Go home'
        title='Company'
        className='inline-flex items-center'>
        <svg
          className='w-8 text-deep-purple-accent-400'
          viewBox='0 0 24 24'
          stroke-linejoin='round'
          stroke-width='2'
          stroke-linecap='round'
          stroke-miterlimit='10'
          stroke='currentColor'
          fill='none'>
          <rect x='3' y='1' width='7' height='12'></rect>
          <rect x='3' y='17' width='7' height='6'></rect>
          <rect x='14' y='1' width='7' height='6'></rect>
          <rect x='14' y='11' width='7' height='12'></rect>
        </svg>
        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
          The Office
        </span>
      </Link>
      {/* ================================================================== */}

      {/* ================================================================== */}
      <div className='flex md:hidden'>
        <button id='hamburger' onClick={toggleMenu}>
          <img
            ref={(el) => (navToggleRefs.current[1] = el)}
            className='toggle block'
            src='https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png'
            width='48'
            height='48'
            alt=''
          />
          <img
            ref={(el) => (navToggleRefs.current[2] = el)}
            className='toggle hidden'
            src='https://img.icons8.com/fluent-systems-regular/2x/close-window.png'
            width='48'
            height='48'
            alt=''
          />
        </button>
      </div>
      {/* ================================================================== */}

      {/* ================================================================== */}
      <div
        className='toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-indigo-900 md:border-none'
        ref={(el) => (navToggleRefs.current[0] = el)}>
        <Link
          to='/'
          onClick={toggleMenu}
          className='block md:inline-block text-indigo-900 hover:text-indigo-500 px-3 py-3 border-b-2 border-indigo-900 md:border-none'>
          Home
        </Link>
        <Link
          onClick={toggleMenu}
          to='/about'
          className='block md:inline-block text-indigo-900 hover:text-indigo-500 px-3 py-3 border-b-2 border-indigo-900 md:border-none'>
          About
        </Link>
        <Link
          onClick={toggleMenu}
          to='/'
          className='block md:inline-block text-indigo-900 hover:text-indigo-500 px-3 py-3 border-b-2 border-indigo-900 md:border-none'>
          blog
        </Link>
        <Link
          onClick={toggleMenu}
          to='/contact'
          className='block md:inline-block text-indigo-900 hover:text-indigo-500 px-3 py-3 border-b-2 border-indigo-900 md:border-none'>
          Contact
        </Link>
      </div>
      {/* ================================================================== */}

      {/* ================================================================== */}
      <a
        ref={(el) => (navToggleRefs.current[3] = el)}
        href='https://api.whatsapp.com/send?phone=+254708864510&text=Hello,more information!'
        className='toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-indigo-900 hover:bg-indigo-500 text-white md:rounded'>
        <span className="pr-2">
          <i class='fa-brands fa-whatsapp'></i>
        </span>
        <span>WhatsApp Us</span>
      </a>
      {/* ================================================================== */}
    </nav>
  );
};

export default Navbar;
