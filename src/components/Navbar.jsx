import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 z-50 drop-shadow-2xl bg-amber-100'>
        <div className='flex justify-between items-center px-6 py-4 sm:px-12 md:px-24 lg:px-40 '>
                    {/* {left} */}
                <div className="left">
                    <h1 className='text-2xl font-bold text-dark'>Network <span className='text-rose-600'>Marketing</span></h1>
                </div>

                {/* {mid} */}
                <div className="mid hidden md:flex items-center gap-6 text-dark/80 font-semibold">
                    <Link to='/'>home</Link>
                    <Link to='/about'>Services</Link>
                    <Link>Work</Link>
                    <Link>Contact</Link>
                </div>


                {/* {right} */}
                <div className='hidden md:block'>
                    <button className="right  px-6 py-2.5 bg-primary text-dark font-semibold rounded-full cursor-pointer flex gap-2 items-center">contect me
                        <FaArrowRightLong />


                    </button>
                </div>

                {/* small devive version*/}


        </div>
    </div>
  )
}

export default Navbar