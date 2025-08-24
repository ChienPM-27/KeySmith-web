import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
    id ='About'>
      <h1 className='font-sans text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>
        Our Brand</span></h1>
        <p className='font-sans text-center text-lg md:text-xl max-w-3xl mt-6'>
            Welcome to our brand, where we specialize in crafting exquisite resin keycaps that tran
            sform your keyboard into a work of art. Our passion for design and quality shines through
            in every piece we create, ensuring that each keycap is not jus
            t functional but also a unique expression of style.
        </p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
          <img></img>
        </div>
          
    </div>
  )
}

export default About
        