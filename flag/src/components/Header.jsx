import React, { useContext } from 'react'
import {  Settings2, X } from 'lucide-react'
import { UserContext } from '../context/userContext'

const Header = () => {
    const {showModal,  setShowModal }  = useContext(UserContext);

  return (
    <div className='w-full bg-transparent p-4 flex items-center justify-between px-12'>
         <div>
            <h1>logo</h1>
         </div>

       <div>
          <span className='cursor-pointer duration-500 ease hover:text-white' onClick={() => setShowModal(!showModal)} >{showModal ? <X /> : <Settings2 />}</span>
        </div>
    </div> 
  )
}

export default Header
