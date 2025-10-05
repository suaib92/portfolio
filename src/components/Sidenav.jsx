import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
     setNav(!nav);
  }

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden text-white' /> 
      {
        nav ? (
            // UPDATED: Mobile menu background changed to dark
            <div className='fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20'>
              {/* UPDATED: Mobile menu links styled for dark theme */}
              <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 text-white shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineHome size={20}/>
                <span className='pl-4'>Home</span>
              </a>
              <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 text-white shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <BsPerson size={20}/>
                <span className='pl-4'>About</span>
              </a>
              <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 text-white shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <GrProjects size={20}/>
                <span className='pl-4'>Work</span>
              </a>
              <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 text-white shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineProject size={20}/>
                <span className='pl-4'>Projects</span>
              </a>
              <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 text-white shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineMail size={20}/>
                <span className='pl-4'>Contact</span>
              </a>
            </div>
        ) : (
          <div className='md:block hidden fixed top-[25%] z-50'>
             <div className='flex flex-col'>
                {/* UPDATED: Desktop icon background changed to a darker grey */}
               <a href="#main" className='rounded-full shadow-lg bg-gray-800 text-white shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineHome size={20}/>
               </a>
               <a href="#about" className='rounded-full shadow-lg bg-gray-800 text-white shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <BsPerson size={20}/>
               </a>
               <a href="#work" className='rounded-full shadow-lg bg-gray-800 text-white shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <GrProjects size={20}/>
               </a>
               <a href="#projects" className='rounded-full shadow-lg bg-gray-800 text-white shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineProject size={20}/>
               </a>
               <a href="#contact" className='rounded-full shadow-lg bg-gray-800 text-white shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail size={20}/>
               </a>
             </div>
          </div>
        )
      }
    </div>
  )
}

export default Sidenav;