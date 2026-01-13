import React from 'react'
import { FaApple, FaAppStore, FaFacebook, FaGoogle, FaGoogleDrive, FaInstagram, FaLinkedin, FaMicrosoft } from 'react-icons/fa6'

const Company = () => {
  return (
    <div className='py-20 bg-white mx-auto'>
            <div className="container mx-auto px-6">
                     <p className='text-center text-black/80 text-xl md:text-2xl lg:text-3xl mb-16'>Trusted by leading companies</p>

                    {/* {display company icon} */}
                    <div className='flex flex-wrap items-center  justify-center gap-12'>
                                        <div className='w-20 h-20 rounded-full border border-primary flex justify-center items-center hover:scale-105 duration-300 transition cursor-pointer'>
                                            <FaMicrosoft  className='w-10 h-10 text-primary'/>
                                        </div>

                                          <div className='w-20 h-20 rounded-full border border-primary flex justify-center items-center hover:scale-105 duration-300 transition cursor-pointer'>
                                            <FaFacebook  className='w-10 h-10 text-primary'/>
                                        </div>

                                          <div className='w-20 h-20 rounded-full border border-primary flex justify-center items-center hover:scale-105 duration-300 transition cursor-pointer'>
                                            <FaLinkedin  className='w-10 h-10 text-primary'/>
                                        </div>

                                          <div className='w-20 h-20 rounded-full border border-primary flex justify-center items-center hover:scale-105 duration-300 transition cursor-pointer'>
                                            <FaApple  className='w-10 h-10 text-primary'/>
                                        </div>

                                          <div className='w-20 h-20 rounded-full border border-primary flex justify-center items-center hover:scale-105 duration-300 transition cursor-pointer'>
                                            <FaGoogle  className='w-10 h-10 text-primary'/>
                                        </div>

                                          <div className='w-20 h-20 rounded-full border border-primary flex justify-center items-center hover:scale-105 duration-300 transition cursor-pointer'>
                                            <FaGoogleDrive  className='w-10 h-10 text-primary'/>
                                        </div>

                                          <div className='w-20 h-20 rounded-full border border-primary flex justify-center items-center hover:scale-105 duration-300 transition cursor-pointer'>
                                            <FaInstagram  className='w-10 h-10 text-primary'/>
                                        </div>
                    </div>
            </div>
    </div>
  )
}

export default Company