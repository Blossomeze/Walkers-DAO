import React from 'react'
import Props from './Props'
import img1 from '../assets/ethmerge.png'
import img4 from '../assets/dao.png'

function Blog() {
  return (
    <div className='px-[5%]'>
        <div className='flex justify-between items-center py-8 px-[2%]'>
            <h2>Walkers DAO on Medium</h2>
            <h4>
                <a className='text-[#000] flex items-center font-medium' target='blank' href="https://geeakpan.medium.com/" alt="youtube channel">
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
        <div className='flex items-start pb-[3%]'>
            <Props
            image={img1}
            title='Walkers DAO Simplified'
            sublet="The Walkers DAO is finally complete as the cryptocurrency switches..."
            link="#"
            />
            <Props image={img4} title="Airdrop Season:Are you Bullish" sublet="There are seasons in cryptocurrency. Did you know?..." link="#" />
            <Props image={img1} title="What are NFTs" sublet="Let's break down the intricacies on non fungible tokens..." link="#" />
            <Props image={img4} title="DAO’s: Decentralized Autonomous Organizations" sublet="The rise of DAO's..." link="#" />
        </div>
    </div>
  )
}

export default Blog