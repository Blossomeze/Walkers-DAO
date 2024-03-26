import React from 'react';

function Props({ image, title, sublet, link }) {
  return (
    <div className='w-[45vw] lg:w-[25vw] h-[300px] relative flex flex-col px-3 justify-between'>
      <div>
        <img src={image} alt="event images" />
        <h2 className='text-lg text-[#000] pt-3'>{title}</h2>
        <h5 className='text-sm text-[#656B8A]'>{sublet}</h5>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="bg-[#000] text-[#fff] flex p-2 pr-[-3%] rounded-md items-center justify-center text-xs">
          <span>Read More</span>
          <img src="https://icongr.am/material/foot-print.svg?size=20&color=ffffff" alt="Footprint Icon" style={{ transform: 'scaleX(-1)', marginTop: '-4%', marginLeft: '-4%', marginRight: '-5%' }} />
        </button>
      </a>
    </div>
  );
}

export default Props;
