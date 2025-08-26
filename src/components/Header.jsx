import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage: "url('/header_bg.png')" }} id = 'Header'>
      <Navbar /> 
        <div className='container text-left mx-0 py-4 px-6 md:px-0
            lg:px-32 text-white -mt-10'>
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block
                max-w-3xl font-semibold leading-[1.1]'>Forging Keys, <br/>Crafting Art</h2>
                {/* Subtitle */}
                <p className="mt-4 text-lg sm:text-xl font-light md:text-2xl text-gray-200 max-w-2xl">
                Discover premium resin keycaps where every detail <br/> is sculpted to perfection.
                </p>
                <div className='space-x-6 mt-6'>
                  <a href="#Store" className='border border-white px-8 py-3 rounded'>Discover</a>
                </div>
        </div>
    </div>
  ) 
}

export default Header
