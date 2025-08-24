import React, { useEffect, useState } from 'react'

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
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up OR when at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setShowNavbar(true);
      } 
      // Hide navbar when scrolling down (but only after scrolling past 100px)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      }
      
      setLastScrollY(currentScrollY);
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if(isMobileMenuOpen){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <> 
      <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 overflow-visible
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}>
        {/* Navbar content */}
        <div className="relative backdrop-blur-md bg-gradient-to-b from-black/60 via-black/40 to-black/20 pb-4 border-b border-gray-700/50">
          <div className="px-5 xl:px-30 py-2 flex w-full items-center justify-between h-20 -mb-4">
          {/* Logo */}
          <a className="flex items-center" href="#">
            <img className="h-36 w-auto" src="./src/assets/logo.png" alt="logo" />
          </a>

          {/* Nav Links - Desktop */}
          <ul className="hidden md:flex px-4 font-semibold space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <li><a className="text-[#E1E0E0] text-xl font-['Bebas_Neue'] hover:text-gray-700 transition-colors duration-200" href="#Store">Store</a></li>
            <li><a className="text-[#E1E0E0] text-xl font-['Bebas_Neue'] hover:text-gray-700 transition-colors duration-200" href="#Collab">Collab</a></li>
            <li><a className="text-[#E1E0E0] text-xl font-['Bebas_Neue'] hover:text-gray-700 transition-colors duration-200" href="#Collection">Collection</a></li>
            <li><a className="text-[#E1E0E0] text-xl font-['Bebas_Neue'] hover:text-gray-700 transition-colors duration-200" href="#Contact">Contact Us</a></li>
          </ul>

          {/* Header Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Search */}
            <a className="text-[#E1E0E0] hover:text-gray-900 transition-colors duration-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </a>
            
            {/* Cart */}
            <a className="flex items-center text-[#E1E0E0] hover:text-gray-700 transition-colors duration-200" href="#">
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
            <a className="flex items-center text-[#E1E0E0] hover:text-gray-700 transition-colors duration-200" href="#">
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

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Cart (mobile) */}
            <a href="#" className="relative text-[#E1E0E0]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200 transition-colors duration-200"
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
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu} 
              className="text-[#E1E0E0] hover:text-gray-700 focus:outline-none transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
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
          </div>
        </div>
        
        {/* Extended fade area */}
        <div className="absolute top-full left-0 w-full h-12 bg-gradient-to-b from-black/20 via-black/10 to-transparent pointer-events-none"></div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible pointer-events-none'
      }`}>
        {/* Background với image từ public/mobile_menu.png */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: 'url(/mobile_menu.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          onClick={closeMobileMenu}
        >
          {/* Overlay để tạo hiệu ứng mờ nếu cần */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        </div>
        
        {/* Menu content với slide-in effect */}
        <div className={`relative z-10 h-full transition-all duration-500 ease-out transform ${
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-95'
        }`}>
          {/* Close Button */}
          <div className="absolute top-6 right-6 z-20">
            <button 
              onClick={closeMobileMenu}
              className="p-2 text-white hover:text-gray-200 focus:outline-none transition-all duration-200 hover:scale-110 hover:bg-white/20 rounded-full backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col items-center justify-center h-full px-8">

            {/* Logo với fade-in animation */}
            <div className={`mb-16 -mt-32 transition-all duration-700 delay-100 ${
              isMobileMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              <img className="h-32 w-auto drop-shadow-lg" src="./src/assets/logo.png" alt="logo" />
            </div>

            {/* Navigation Links với staggered animation */}
            <nav className="flex flex-col items-center space-y-6">
              {[
                { name: 'Store', href: '#Store', delay: 'delay-200' },
                { name: 'Collab', href: '#Collab', delay: 'delay-300' },
                { name: 'Collection', href: '#Collection', delay: 'delay-400' },
                { name: 'About Us', href: '#Contact', delay: 'delay-500' }
              ].map((item, index) => (
                <a 
                  key={item.name}
                  className={`text-3xl font-bold text-white hover:text-gray-200 transition-all duration-300 hover:scale-105 transform drop-shadow-lg font-['Bebas_Neue'] ${
                    isMobileMenuOpen 
                      ? `opacity-100 translate-y-0 ${item.delay}` 
                      : 'opacity-0 translate-y-4'
                  }`}
                  href={item.href}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Additional Actions với delayed animation */}
            <div className={`mt-12 flex flex-col items-center space-y-5 transition-all duration-700 delay-600 ${
              isMobileMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              {/* Search Button */}
              <button className="flex items-center space-x-3 px-6 py-3 text-white hover:text-gray-200 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <span className="text-lg font-medium">Search</span>
              </button>

              {/* User Account */}
              <button className="flex items-center space-x-3 px-6 py-3 text-white hover:text-gray-200 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16
                       c2.5 0 4.847.655 6.879 1.804M15 10a3 
                       3 0 11-6 0 3 3 0 016 0zm6 2a9 9 
                       0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg font-medium">Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar