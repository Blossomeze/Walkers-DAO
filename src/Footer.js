import React from 'react'
import footer from './assets/footer.png'
import logo from './assets/logolight.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black text-white p-5 pt-8'>
        <div className='flex flex-col pb-5 lg:flex-row lg:px-[5%] lg:justify-between items-start'>
            <div className='text-left lg:max-w-[40%]'>
                <img className='max-w-[30%] lg:max-w-[25%]' src={logo} alt="light themed logo" />
                <h6 className='py-2 lg:text-lg'>We are a community driven organization empowering and educating individuals through the Web3 journey. We pave the way for innovative solutions, community driven initiatives and a collective vision of progress steps into the world of Web3.</h6>
            </div>
            <div className='flex lg:justify-between flex-wrap lg:flex-nowrap pt-3 lg:pt-0 lg:w-[100%] lg:pl-[22%]'>
                <div class="w-1/2">
                    <h5 className='text-primary font-semibold'>Links</h5>
                    <nav class="list-none">
                    <li><Link to="/about">About Us</Link></li>
                    <li><a href="https://medium.com/@walkersdao" target='_blank' rel="noreferrer">Our Blog</a></li>
                    <li><Link to="/faq">FAQs</Link></li>
                    <li><Link to="/what_we_do">What we do</Link></li>
                    <li><a href="https://linktr.ee/walkersdao" target='_blank' rel="noreferrer">Linktree</a></li>
                    </nav>
                </div>
                <div class="w-1/2">
                    <h5 className='text-primary font-semibold'>Address</h5>
                    <nav class="list-none max-w-[90%]">
                    <li>Remote</li>
                    </nav>
                    <h5 className='text-primary pt-5 font-semibold'>Careers</h5>
                    <nav class="list-none max-w-[90%]">
                    <li>Coming Soon</li>
                    </nav>
                </div>
                <div class="w-1/2 pt-5 lg:pt-0">
                    <h5 className='text-primary font-semibold'>Contact Us</h5>
                    <nav class="list-none">
                    <li><a href="tel:+2349027511282">+234 902 751 1282</a></li>
                    <li><a href="mailto:walkersdao1@gmail.com">walkersdao1@gmail.com</a></li>
                    </nav>
                </div>
            </div>
        </div>
        <hr className=' py-2 justify-center'/>
        <div className='text-center'>
            <div>
               <h6>© Copyright 2024 , Walkers DAO</h6> 
            </div>
            <div className='py-2 text-center flex justify-center'>
                <img alt="logo" src={footer} />
            </div>
        </div>
    </div>
  )
} 

export default Footer