import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail, AiFillMail} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
const Sidenav = () => {
  const [nev, setNev] =useState(false);
  const handleNev = ( ) =>{
     setNev(!nev);
     
  }
  return (
    <div>
      <AiOutlineMenu onClick={handleNev} className=' absolute top-4 right-4 z-[99] md:hidden' /> 
      {
        nev ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-conter items-center z-20 mt-20'>
              <a onClick={handleNev} href="#main" className='  w-96 flex justify-center  items-center rounded-full shadow-lg bg-gray-100 n shodow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200  '>
                <AiOutlineHome size={20}/>
                <span className='pl-4'>Home</span>
              </a>
              <a onClick={handleNev}  href="#about" className='  w-96 flex justify-center  items-center rounded-full shadow-lg bg-gray-100 n shodow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200  '>
                <BsPerson size={20}/>
                <span className='pl-4'>About</span>
              </a>
              <a onClick={handleNev}  href="#work" className='  w-96 flex justify-center  items-center rounded-full shadow-lg bg-gray-100 n shodow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200  '>
                <GrProjects size={20}/>
                <span className='pl-4'>Work</span>
              </a>
              <a onClick={handleNev}  href="#projects" className=' w-96 flex justify-center  items-center rounded-full shadow-lg bg-gray-100 n shodow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200  '>
                <AiOutlineProject size={20}/>
                <span className='pl-4'>Projects</span>
              </a>
             
              <a onClick={handleNev}  href="#contact" className=' w-96 flex justify-center  items-center rounded-full shadow-lg bg-gray-100 n shodow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200  '>
                <AiOutlineMail size={20}/>
                <span className='pl-4'>Contact</span>
              </a>
            </div>
        ) : (
            <div className='md:block hidden fixed top-[25%] z-10 '>
                 <div className=' flex flex-col'>
                  <a href="#main" className=' rounded-full shadow-lg bg-gray-100 m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                  </a>
                  <a href="#about" className=' rounded-full shadow-lg bg-gray-100  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPerson size={20}/>
                  </a>
                  <a href="#work" className=' rounded-full shadow-lg bg-gray-100  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={20}/>
                  </a>
                  <a href="#projects" className=' rounded-full shadow-lg bg-gray-100  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20}/>
                  </a>
                  
                  <a href="#contact" className=' rounded-full shadow-lg bg-gray-100  m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20}/>
                  </a>
                  
                 </div>
            </div>
        )
      }
    </div>
  )
}

export default Sidenav
