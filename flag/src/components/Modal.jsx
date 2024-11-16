import React from 'react'

const Modal = () => {
  return (
    <div className='w-full bg-white h-screen rounded-full p-4'>
      <div className='flex  gap-4 items-center mt-[4rem] ml-[8rem] '>
         <div className='w-16 h-16 bg-red-500 rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50'></div>
         <div className='w-16 h-16 bg-blue-500 rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50'></div>
         <div className='w-16 h-16 bg-green-500 rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50'></div>
         <div className='w-16 h-16 bg-orange-500 rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50'></div>
         <div className='w-16 h-16 bg-black rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50'></div>
      </div>
    </div>
  )
}

export default Modal
