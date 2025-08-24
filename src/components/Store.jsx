import React, { useState } from 'react'

const Store = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const keycaps = [
    {
      id: 1,
      title: "Cherry MX Artisan",
      price: "$45.99",
      image: "./assets/keycaps/AOT.png"
    },
    {
      id: 2,
      title: "GMK Botanical",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=400&fit=crop"
    },
    {
      id: 3,
      title: "SA Profile Keycaps",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=500&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Custom RGB Keycaps",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Vintage Keycap Set",
      price: "$75.99",
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=500&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Transparent Keycaps",
      price: "$55.99",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=400&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(keycaps.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(keycaps.length / 3)) % Math.ceil(keycaps.length / 3));
  };

  const getVisibleKeycaps = () => {
    const start = currentSlide * 3;
    return keycaps.slice(start, start + 3);
  };

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Store'>
      <div className="text-center mb-12">
        <h1 className='text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent' 
            style={{ fontFamily: 'Bebas Neue' }}>
          FEATURE
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Discover our unique and high quality collection of keycaps for your mechanical keyboard</p>
      </div>

      {/* Slider Controls */}
      <div className="flex justify-end mb-8">
        <div className="flex items-center gap-3">
          <button 
            onClick={prevSlide}
            className="group flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full hover:border-blue-500 hover:bg-blue-500 transition-all duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="group flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full hover:border-blue-500 hover:bg-blue-500 transition-all duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Keycaps Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getVisibleKeycaps().map((keycap, index) => (
            <div key={keycap.id} 
                 className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              
              {/* Large Product Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={keycap.image} 
                  alt={keycap.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {keycap.title}
                  </h3>
                  <span className="text-2xl font-bold text-blue-600">
                    {keycap.price}
                  </span>
                </div>
                
                {/* Buy Now Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: Math.ceil(keycaps.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>  
  )
}

export default Store