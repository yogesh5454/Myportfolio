import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <div className='px-45 bg-[#0f1d30] items-center flex justify-between py-4 '>
      <div className='logo '>
            <h1 className='text-[#72e3af] font-extrabold text-4xl'>YOGESH.</h1>

      </div>
      <div className="navbars text-white flex items-center gap-8 ">
        <a className='hover:underline  underline-offset-8 decoration-[#72e3af] decoration-3' href="#">HOME</a>
        <a className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3' href="#">ABOUT</a>
        <a className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3' href="#">EXPERIENCE</a>
        <a className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3' href="#">WORKS</a>
        <a className='hover:underline underline-offset-8 decoration-[#72e3af] decoration-3' href="#">CONTACT</a>
      </div>
      <div className='resume  '>
            <button className='bg-[#72e3af] px-3 py-2 text-black hover:bg-white flex items-center gap-3 rounded-sm'>Resume <IoDocumentTextOutline/></button>
      </div>
    </div>
  )
}

export default Nav
