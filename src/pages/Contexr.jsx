import React from 'react'
import { FaArrowRightLong, FaUser, FaVoicemail } from 'react-icons/fa6'

const Contexr = () => {
  return (
    <div id='contect' className='py-20 bg-white'>
        <div className="container mx-auto px-6">
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl text-dark mb-6'>Reach out to us
</h1>
<p className='text-dark/60 max-w-xl mx-auto'>Let’s talk! Whether it’s a quick question or a big project, we’re just a message away.</p>
            </div>


            {/* {contect form} */}

            <div className='max-w-2xl mx-auto capitalize'>
                    <form action="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className='block mb-2 text-dark capitalize ' htmlFor="">your name</label>
                                <div className='flex items-center gap-4 py-2 pl-4 rounded border border-dark/40'>
                                    <FaUser />
                                    <input className='w-full outline-none  placeholder:text-dark/60 placeholder:text-sm ' type="text" placeholder='Name' />
                                </div>

                            </div>


                             <div>
                                <label className='block mb-2 text-dark capitalize ' htmlFor="">your email</label>
                                <div className='flex items-center gap-4 py-2 pl-4 rounded border border-dark/40'>
                                    <FaVoicemail />
                                    <input className='w-full outline-none  placeholder:text-dark/60 placeholder:text-sm ' type="email" placeholder='email' />
                                </div>

                            </div>
                        </div>

                        <div className='mt-6'>
                             <label className='block mb-2 text-dark' htmlFor="">yout message</label>
                             <textarea className='w-full h-40 px-6 py-6 outline-none border border-dark/40 rounded ' name="" id="" placeholder='enter messsage'>

                             </textarea>
                        </div>

                        <button className='bg-primary px-6 py-2 rounded-full text-dark font-semibold cursor-pointer flex items-center gap-2 mt-5'>submit
                            <FaArrowRightLong />
                        </button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Contexr