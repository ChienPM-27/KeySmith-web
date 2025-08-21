import React from 'react'

const Navbar = () => {
  
  return (
    <nav className="fixed -top-3 left-0 w-full flex justify-between text-[#E1E0E0] z-30">
      <div className="px-5 xl:px-30 py-4 flex w-full items-center">
        {/* Logo */}
        <a className="text-3xl font-bold font-heading text-[#E1E0E0]" href="#">
          <img className="h-40 w-auto" src="./src/assets/logo.png" alt="logo" />
        </a>  

        {/* Nav Links */}
        <ul className="hidden md:flex px-4 -mt-2 mx-auto font-semibold font-heading space-x-12">
          <li><a className="text-[#E1E0E0] text-xl font-mono hover:text-gray-200" href="#Store">Store</a></li>
          <li><a className="text-[#E1E0E0] text-xl font-mono hover:text-gray-200" href="#Category">Category</a></li>
          <li><a className="text-[#E1E0E0] text-xl font-mono hover:text-gray-200" href="#Collections">Collections</a></li>
          <li><a className="text-[#E1E0E0] text-xl font-mono hover:text-gray-200" href="#Contact">Contact Us</a></li>
        </ul>

        {/* Header Icons */}
        <div className="hidden -mt-2 xl:flex items-center space-x-5">
          {/* Search */}
          <a className="text-[#E1E0E0] hover:text-gray-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </a>
          <a className="flex items-center hover:text-gray-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                   2.293c-.63.63-.184 1.707.707 1.707H17
                   m0 0a2 2 0 100 4 2 2 0 000-4
                   zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 
                rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 
                bg-pink-500"></span>
            </span>
          </a>

          {/* User */}
          <a className="flex items-center hover:text-gray-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16
                   c2.5 0 4.847.655 6.879 1.804M15 10a3 
                   3 0 11-6 0 3 3 0 016 0zm6 2a9 9 
                   0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="size-6 md:hidden w-7" alt="">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            {/* mobile menu */}
            <div className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all'>
              <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
                <a href="Store" className='px-4 py-2 rounded-full inline-block'>Store</a>
                <a href="Store" className='px-4 py-2 rounded-full inline-block'>Category</a>
                <a href="Store" className='px-4 py-2 rounded-full inline-block'>Collections</a>
                <a href="Store" className='px-4 py-2 rounded-full inline-block'>Contact Us</a>
              </ul>
            </div>
        </div>
      </div>

      {/* Responsive icons */}
      <div className="xl:hidden flex items-center space-x-4 mr-6">
        {/* Cart (mobile) */}
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5
                 M7 13l-2.293 2.293c-.63.63-.184 1.707.707 
                 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4
                 zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </a>

        {/* Hamburger menu */}
        <a className="navbar-burger self-center" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
