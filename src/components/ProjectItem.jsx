import React from 'react';

const ProjectItem = ({ img, title }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group hover:bg-gradient-to-r from-gray-200 top-[#001b5e]'>
      <img src={img} alt='' className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h3 className='text-xl font-bold text-black tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-black font-bold text-center'>React JS</p>
        <a href="https://github.com/suaib92 " target=' blank'>
          <p className='text-center p-3 rounded-lg text-gray-700 font-bold cursor-pointer text-lg '>More Info</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
