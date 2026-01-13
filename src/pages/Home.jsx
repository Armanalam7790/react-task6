import React from 'react'
import Hero from './Hero'
import Company from './Company'
import Service from './Service'
import Contexr from './Contexr'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='w-full py-40'>
        
        <div className='container mx-auto py-6  capitalize'>

            <div className='flex items-center mx-auto gap-4 border border-primary/60 rounded-full pl-2 py-2 w-full text-xs md:text-base md:w-[25%] mb-12'>
                <div className='flex  -space-x-2'>
                    <img className=' w-8 h-8 rounded-full object-cover object-center' src="https://images.pexels.com/photos/7144180/pexels-photo-7144180.jpeg?_gl=1*15ln2ow*_ga*MTMzMzE3MTcyNC4xNzYwMTgwOTQ0*_ga_8JE65Q40S6*czE3NjgyMjkxMDYkbzkkZzEkdDE3NjgyMjkxNjkkajU5JGwwJGgw" alt="" />
                     <img className=' w-8 h-8 rounded-full object-cover object-center' src="https://images.pexels.com/photos/3993305/pexels-photo-3993305.jpeg" alt="" />
                      <img className=' w-8 h-8 rounded-full object-cover object-center' src="https://images.pexels.com/photos/7144180/pexels-photo-7144180.jpeg?_gl=1*15ln2ow*_ga*MTMzMzE3MTcyNC4xNzYwMTgwOTQ0*_ga_8JE65Q40S6*czE3NjgyMjkxMDYkbzkkZzEkdDE3NjgyMjkxNjkkajU5JGwwJGgw" alt="" />
                     <img className=' w-8 h-8 rounded-full object-cover object-center' src="https://images.pexels.com/photos/3993305/pexels-photo-3993305.jpeg" alt="" />
                      <img className=' w-8 h-8 rounded-full object-cover object-center' src="https://images.pexels.com/photos/7144180/pexels-photo-7144180.jpeg?_gl=1*15ln2ow*_ga*MTMzMzE3MTcyNC4xNzYwMTgwOTQ0*_ga_8JE65Q40S6*czE3NjgyMjkxMDYkbzkkZzEkdDE3NjgyMjkxNjkkajU5JGwwJGgw" alt="" />
                     <img className=' w-8 h-8 rounded-full object-cover object-center' src="https://images.pexels.com/photos/3993305/pexels-photo-3993305.jpeg" alt="" />
                </div>
                <span>trusted by 20k+ people</span>
            </div>
            <h1 className='text-center text-dark text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6'>
                <span>We Help Brands Grow With</span>
                <br />
                <span className='text-primary'>Performance</span> <span>Marketing</span>
            </h1>
            <p className='max-w-xl mx-auto text-2xl font-thin text-dark/80 text-center mb-12'>At our agency, we take pride in delivering impactful solutions that combine creativity, strategy, and technology.</p>

            <div className='flex items-center justify-center gap-6 mb-16'>
                <button className='px-6 py-2.5 bg-primary text-dark font-semibold rounded-full cursor-pointer flex gap-2 items-center' >Contact Me</button> <button className='px-6 py-2.5 bg-dark text-white font-semibold rounded-full cursor-pointer flex gap-2 items-center'>Digital Market</button>
            </div>
            {/* {image} */}

          <div className='max-w-5xl mx-auto  rounded-2xl shadow overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://brightmatter.vercel.app/assets/hero-Jz0ycX1P.jpg" alt="" />
          </div>
        </div>
    <Company />
    <Service />
    <Contexr />
    <Footer />
        </div>
  )
}

export default Home