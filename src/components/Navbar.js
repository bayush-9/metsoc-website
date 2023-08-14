import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { useAuth0 } from "@auth0/auth0-react";


import IonIcon from '@reacticons/ionicons';
const Navbar = () => {
  const { loginWithPopup } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated} = useAuth0();
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
              Event
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
          
        {
            isAuthenticated ? (
            
              <button class="bg-berry  text-white font-bold py-2 rounded px-4 focus:bg-mauve " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Logout
        </button>
             
            ) : (
              <button class="bg-berry text-white font-bold py-2 px-4 rounded mr-2 focus:bg-mauve " onClick={() => loginWithPopup()}>SignUp</button>
              
              )
          }

{ isAuthenticated && 
 (<div class="dropdown relative profile">
    <a class="dropdown-toggle flex items-center hidden-arrow" href="/" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      <img class="rounded-full border-berry border-2" src={user.picture} alt={user.name} loading="lazy" height={40} width={40}/>
    </a>
  </div>)
  }
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
            <a href="/about" className="py-7 px-3 inline-block">
             Careers
            </a>
          </li>
          <li >
            <a href="/departments" className="py-7 px-3 inline-block">
              Blog
            </a>
          </li>
          <li >
            <a href="/doctors" className="py-7 px-3 inline-block">
              Career Guidance
            </a>
          </li>
          
          </div>
        </ul>
        { isAuthenticated && 
 (<div class="dropdown relative md:hidden ml-2 mr-2 ">
    <a class="dropdown-toggle flex items-center hidden-arrow" href="/" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      <img class="rounded-full border-berry border-2" src={user.picture} alt={user.name} loading="lazy" height={50} width={50}/>
    </a>
  </div>)
  }
      </div>
    </nav>
  );
};

export default Navbar;