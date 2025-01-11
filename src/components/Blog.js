// Blog.js
import React from 'react';
import Props from './Props';
import img1 from '../assets/ethmerge.png';
import img4 from '../assets/dao.png';

function Blog() {
  return (
    <div className='px-[4%] py-[5%]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl lg:text-4xl'>Read Our Blog</h1>
        <h4 className='text-sm lg:text-lg lg:py-2 px-5 text-center lg:px-[27%] lg:pb-5'>Read articles from our brilliant writers</h4>
      </div>
      <div className='flex justify-between items-center pb-2 pt-4 lg:py-8 px-[1%] overflow-x-auto'>
        <h2 className="text-lg lg:text-4xl">Walkers DAO on Medium</h2>
        <h4>
          <a className='text-[#000] flex items-center font-medium text-sm' target='_blank' rel="noreferrer" href="https://walkersdao.medium.com/" alt="medium channel">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H12V5H5V19H19V12H21V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5ZM9.7 15.7L8.3 14.3L17.6 5H14V3H21V10H19V6.4L9.7 15.7Z"
                fill="#e99e2d"
              />
            </svg>
          </a>
        </h4>
      </div>
      <div className='lg:max-w-[100vw] flex items-start pb-[3%] lg:pb-0 overflow-x-auto'>
        <Props
          image={img1}
          title='Walkers DAO Simplified'
          sublet="The Walkers DAO is finally complete as..."
          link="#"
          mobilePadding // Add a custom prop for applying padding only on mobile
        />
        <Props image={img4} title="Airdrop Season: LFG🚀" sublet="There are seasons in crypto. Did you know?..." link="#" mobilePadding />
        <Props image={img1} title="What are NFTs" sublet="Let's break down non fungible tokens..." link="#" mobilePadding />
        <Props image={img4} title="DAO’s: What are they?" sublet="The rise of DAO's..." link="#" mobilePadding />
      </div>
    </div>
  );
}

export default Blog;
