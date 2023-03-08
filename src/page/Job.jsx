import React from 'react'
import Nav from '../component/Nav'

function Job() {
  return (
    <div>
        <Nav />
        <div className='flex p-10 px-40 justify-center'>
            <div className='bg-[#EEE8F7] rounded-lg mt-16 w-full py-8 px-10 h-screen flex flex-col'>
                <span className='text-2xl font-bold'>Add Job</span>
                <input className='mt-5 h-10 rounded outline-none px-5' type="text" placeholder='Eric Bau' />
                <input className='mt-5 h-10 rounded outline-none px-5' type="text" placeholder='Eric Bau' />
                <input className='mt-5 h-10 rounded outline-none px-5' type="text" placeholder='Eric Bau' />
                <input className='mt-5 h-10 rounded outline-none px-5' type="text" placeholder='Eric Bau' />
                <input className='mt-5 h-10 rounded outline-none px-5' type="text" placeholder='Eric Bau' />
                <div>
                    <button className='w-28 h-10 bg-blue-500 mt-5 rounded text-white font-semibold'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Job