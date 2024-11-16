import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

const Modal = () => {
    const { changeColors } = useContext(UserContext);

  return (
    <div className='w-full bg-white h-screen rounded-full p-4'>
      <div className='flex  gap-4 items-center mt-[4rem] ml-[8rem] '>
         <div className='w-16 h-16 bg-[#B03052] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#B03052')}></div>
         <div className='w-16 h-16 bg-[#608BC1] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#608BC1')}></div>
         <div className='w-16 h-16 bg-[#88C273] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#88C273')}></div>
         <div className='w-16 h-16 bg-orange-500 rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('orange')}></div>
         <div className='w-16 h-16 bg-[#E90074] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#E90074')}></div>
      </div>
    </div>
  )
}

export default Modal
