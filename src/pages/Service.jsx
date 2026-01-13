import React from 'react'
import { FaDigitalTachograph, FaMobile, FaPaintBrush } from 'react-icons/fa'
import { FaCode, FaServicestack } from 'react-icons/fa6'

const Service = () => {
  return (
    <div className='py-20'>
      <div className="container mx-auto px-6 sm:px-12  md:px-24 lg:px-40 ">
         <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl text-dark mb-6'>How we can Help you?</h1>
          <p className='text-dark/60 text-xl max-w-2xl mx-auto'>Whether you're launching a new business or looking to elevate your existing brand.</p>

         </div>


         <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
               



              <div className="border border-primary rounded-xl p-12 flex flex-col md:flex-row items-center gap-6
                cursor-pointer transition-transform duration-300 hover:scale-105 will-change-transform">
  
  <div className="flex-shrink-0 w-20 aspect-square border-4 border-primary/30 
                  rounded-full flex items-center justify-center">
    <FaCode className="w-10 h-10 text-primary" />
  </div>

  <div>
    <h3 className="text-xl font-semibold text-dark mb-5">Web Development</h3>
    <p className="text-sm text-gray-600 mt-1">
      We create fast, responsive, and user-friendly websites tailored to your business need
    </p>
  </div>

</div>


                <div className="border border-primary rounded-xl p-12 flex flex-col md:flex-row items-center gap-6
                cursor-pointer transition-transform duration-300 hover:scale-105 will-change-transform">
  
  <div className="flex-shrink-0 w-20 aspect-square border-4 border-primary/30 
                  rounded-full flex items-center justify-center">
    <FaPaintBrush className="w-10 h-10 text-primary" />
  </div>

  <div>
    <h3 className="text-xl font-semibold text-dark mb-5">Graphic Design</h3>
    <p className="text-sm text-gray-600 mt-1">
     Eye-catching visuals that speak your brand's language. Our graphic design services
    </p>
  </div>

</div>



<div className="border border-primary rounded-xl p-12 flex flex-col md:flex-row items-center gap-6
                cursor-pointer transition-transform duration-300 hover:scale-105 will-change-transform">
  
  <div className="flex-shrink-0 w-20 aspect-square border-4 border-primary/30 
                  rounded-full flex items-center justify-center">
    <FaDigitalTachograph className="w-10 h-10 text-primary" />
  </div>

  <div>
    <h3 className="text-xl font-semibold text-dark mb-5">Digital Marketing</h3>
    <p className="text-sm text-gray-600 mt-1">
     Grow your online presence with our strategic digital marketing services.
    </p>
  </div>

</div>



<div className="border border-primary rounded-xl p-12 flex flex-col md:flex-row items-center gap-6
                cursor-pointer transition-transform duration-300 hover:scale-105 will-change-transform">
  
  <div className="flex-shrink-0 w-20 aspect-square border-4 border-primary/30 
                  rounded-full flex items-center justify-center">
    <FaMobile className="w-10 h-10 text-primary" />
  </div>

  <div>
    <h3 className="text-xl font-semibold text-dark mb-5">Mobile App Development</h3>
    <p className="text-sm text-gray-600 mt-1">
Transform your ideas into functional, high-performance mobile apps.
    </p>
  </div>

</div>

         </div>
      </div>
    </div>
  )
}

export default Service