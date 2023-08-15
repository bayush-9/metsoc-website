import React, { useState } from 'react';
import logo from "../assets/logo.png"
import IonIcon from '@reacticons/ionicons';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex items-center font-medium justify-between ">
        <div className="z-50 md:w-auto w-full flex justify-between">
          <a href="/">
          <img src={logo} alt="logo"  className="md:cursor-pointer  w-15 h-16 ml-2 scale-100" /></a>
          <div className={`text-5xl md:hidden  duration-500 m-2 pt-2 ${open ? "rotate-0" : "rotate-360" }`} onClick={() => setOpen(!open)}>
            <IonIcon name={`${open ? "close" : "menu"}`}></IonIcon>
          </div>
        </div>
        <div className='nav-links'>
        <ul className="md:flex hidden uppercase items-center gap-8  font-sans">
          <li>
            <a href="/"  color="inherit" className="py-7  hover:text-berry active:text-berry font-medium font-sans tracking-wider px-3 inline-block ">
              Home
            </a>
          </li>
          <li>
            <a href="/Events" className="py-7  hover:text-berry active:text-berry px-3 font-medium tracking-wider inline-block">
              Events
            </a>
          </li>
          <li>
            <a href="/updates" className="py-7  hover:text-berry active:text-berry px-3 font-medium tracking-wider inline-block">
              Updates
            </a>
          </li>
          <li>
            <a href="/gallery" className="py-7  hover:text-berry active:text-berry font-medium tracking-wider px-3 inline-block">
              Gallery
            </a>
          </li>
          <li>
            <a href="/teams" className="py-7  hover:text-berry active:text-berry font-medium tracking-wider px-3 inline-block">
              Teams
            </a>
          </li>
         
        </ul></div>
        <div className='flex space-x-4'>
          
    </div>   
    
        <ul
          className={`
        md:hidden items-center fixed w-full top-0 overflow-y-auto bottom-0 py-20  z-20 h-[120%] 
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <div className='bg-berry text-center justify-between text-blush h-full nav-links'>
          <li >
            <a href="/" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>
          <li >
            <a href="/events" className="py-7 px-3 inline-block">
             Events
            </a>
          </li>
          <li >
            <a href="/updates" className="py-7 px-3 inline-block">
              Updates
            </a>
          </li>
          <li >
            <a href="/gallery" className="py-7 px-3 inline-block">
              Gallery
            </a>
          </li>
          <li >
            <a href="/teams" className="py-7 px-3 inline-block">
              Teams
            </a>
          </li>
          
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;