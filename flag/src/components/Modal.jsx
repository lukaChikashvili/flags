import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { HexColorPicker } from "react-colorful";
import { Pencil } from 'lucide-react';

const Modal = () => {
    const { changeColors , setSelectedColor} = useContext(UserContext);
    const [showHex, setShowHex] = useState(false);

  return (
    <div className='w-full bg-white h-screen rounded-full p-4'>
      <div className='flex   gap-4 items-center mt-[4rem] ml-[8rem] '>
         <div className='w-16 h-16 bg-[#B03052] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#B03052')}></div>
         <div className='w-16 h-16 bg-[#608BC1] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#608BC1')}></div>
         <div className='w-16 h-16 bg-[#88C273] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#88C273')}></div>
         <div className='w-16 h-16 bg-orange-500 rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('orange')}></div>
         <div className='w-16 h-16 bg-[#E90074] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#E90074')}></div>

        
      </div>
      <div className='flex   gap-4 items-center mt-[4rem] ml-[8rem] ' >
      <div className='w-16 h-16 bg-[#DDDDDD] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#DDDDDD')}></div>
         <div className='w-16 h-16 bg-[#5E1675] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#5E1675')}></div>
         <div className='w-16 h-16 bg-[#40A2E3] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#40A2E3')}></div>
         <div className='w-16 h-16 bg-[#00FF9C] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#00FF9C')}></div>
         <div className='w-16 h-16 bg-[#E72929] rounded-full shadow-xl cursor-pointer duration-500 ease hover:opacity-50' onClick={() => changeColors('#E72929')}></div>
      </div>
      <button className='flex items-center gap-4 bg-gray-500 text-white px-12 py-2 rounded-md shadow-lg cursor-pointer duration-500 ease-in hover:bg-gray-400 mx-56 my-12' onClick={() => setShowHex(!showHex)}> <Pencil /> Pick a color</button>

      {showHex && <HexColorPicker className='-mt-[15rem] ' onChange={setSelectedColor} />}
    </div>
  )
}

export default Modal
