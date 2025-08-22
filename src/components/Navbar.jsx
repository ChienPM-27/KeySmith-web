import React, { use, useEffect, useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() =>{
    const handleScroll = () => {
      if(window.scrollY > lastScrollY){

        setShowNavbar(false)
      }else{
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur-md ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="px-5 xl:px-30 py-4 flex w-full items-center">
        {/* Logo */}
        <a className="text-3xl font-bold font-heading text-[#E1E0E0]" href="#">
          <img className="h-40 w-auto" src="./src/assets/logo.png" alt="logo" />
        </a>  

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex px-4 -mt-2 mx-auto font-semibold font-heading space-x-12">
          <li><a className="text-[#E1E0E0] text-xl font-mono hover:text-gray-700" href="#Store">Store</a></li>
          <li><a className="text-[#E1E0E0] text-xl font-mono hover:text-gray-700" href="#Category">Category</a></li>
          <li><a className="text-[#E1E0E0] text-xl font-mono hover:text-gray-700" href="#Collections">Collections</a></li>
          <li><a className="text-[#E1E0E0] text-xl font-mono hover:text-gray-700" href="#Contact">Contact Us</a></li>
        </ul>

        {/* Header Icons - Desktop */}
        <div className="hidden -mt-2 xl:flex items-center space-x-5">
          {/* Search */}
          <a className="text-[#E1E0E0] hover:text-gray-900" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </a>
          
          {/* Cart */}
          <a className="flex items-center text-[#E1E0E0] hover:text-gray-700" href="#">
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
          <a className="flex items-center text-[#E1E0E0] hover:text-gray-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16
                   c2.5 0 4.847.655 6.879 1.804M15 10a3 
                   3 0 11-6 0 3 3 0 016 0zm6 2a9 9 
                   0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Icons */}
      <div className="xl:hidden flex items-center space-x-4 mr-6">
        {/* Cart (mobile) */}
        <a href="#" className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5
                 M7 13l-2.293 2.293c-.63.63-.184 1.707.707 
                 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4
                 zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="flex absolute -top-2 -right-2">
            <span className="animate-ping absolute inline-flex h-3 w-3 
              rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 
              bg-pink-500"></span>
          </span>
        </a>

        {/* Hamburger menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="navbar-burger self-center focus:outline-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-6 w-6 hover:text-gray-200 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-l border-slate-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold text-white font-mono">Menu</h2>
          <button 
            onClick={closeMobileMenu}
            className="p-2 rounded-full hover:bg-slate-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-6 py-8">
          <ul className="space-y-6">
            {[
              { name: 'Store', href: '#Store' },
              { name: 'Category', href: '#Category' },
              { name: 'Collections', href: '#Collections' },
              { name: 'Contact Us', href: '#Contact' }
            ].map((item, index) => (
              <li key={item.name} className={`transform transition-all duration-300 delay-${index * 100}`}>
                <a 
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/70  transition-all duration-200 group"
                >
                  <span className="text-xl font-mono text-white group-hover:text-pink-300 transition-colors duration-200">
                    {item.name}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-auto text-slate-400 group-hover:text-pink-300 group-hover:translate-x-1 transition-all duration-200" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar