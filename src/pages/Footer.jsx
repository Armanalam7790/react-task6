import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=''>
        <div className="container mx-auto px-6  sm:px-12 md:px-24 lg:px-40">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <div className="left mb-4">
                       <h1 className='text-2xl font-bold text-dark'>Network <span className='text-rose-600'>Marketing</span>
                       </h1>
                       </div>

                     
                      <p className='mb-4 text-dark/50'>Whether you're launching a new business or looking to elevate your existing brand.</p>
                      <div className='flex items-center gap-6 py-2 font-semibold text-dark/70'>
                        <Link>home</Link>
                        <Link>Services</Link>
                        <Link>our work</Link>
                        <Link>contect us</Link>

                      </div>


                    </div>



                    <div>   
                        <h3 className='text-dark text-xl font-semibold mb-3'> subscribe to out newsletters</h3>
                        <p className='text-sm text-dark/70'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                      <div className='mt-4 flex flex-col md:flex-row items-start gap-2'>
                        <input className='w-full px-6 py-3 border border-dark/40 rounded outline-none placeholder:text-sm  placeholder:text-dark/60' type="email"  placeholder='email'/>
                        <button className='px-6 py-3 rounded font-semibold bg-primary text-dark cursor-pointer'>subscribe</button>
                      </div>
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer