// Props.js
import React from 'react';

function Props({ image, title, sublet, link }) {
  return (
    <div className='min-w-[45%] px-1 lg:min-w-[25%] lg:w-[24%] h-[200px] lg:h-[280px] relative flex flex-col justify-between lg:pb-3'>
      <div>
        <img className='lg:w-[98%]' src={image} alt="event images" />
        <h2 className='text-sm lg:text-lg text-[#000] pt-3'>{title}</h2>
        <h5 className='text-xs lg:text-sm text-[#656B8A]'>{sublet}</h5>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="bg-[#000] text-[#fff] flex p-2 pr-[-3%] rounded-md items-center justify-center text-xs mt-2">
          <span>Read More</span>
          <img src="https://icongr.am/material/foot-print.svg?size=17&color=ffffff" alt="Footprint Icon" style={{ transform: 'scaleX(-1)', marginTop: '-4%', marginLeft: '-1%', marginRight: '-5%' }} />
        </button>
      </a>
    </div>
  );
}

export default Props;
