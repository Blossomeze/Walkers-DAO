import React from 'react'
import footer from './assets/footer.png'
import logo from './assets/logolight.png'

function Footer() {
  return (
    <div className='bg-[#000] text-[#fff] p-5 pt-8'>
        <div className='flex flex-col pb-5 lg:flex-row lg:px-[5%] lg:justify-between items-start'>
            <div className='text-left lg:max-w-[40%]'>
                <img className='max-w-[30%] lg:max-w-[22%]' src={logo} alt="light themed logo" />
                <h6 className='py-2 lg:text-lg'>Walkers is a DAO revolutionizing Web3 education and empowerment
                    It is a training school of highly skilled and experienced 
                    tutors that are committed to nurturing and developing everyone.</h6>
            </div>
            <div className='flex lg:justify-between flex-wrap lg:flex-nowrap pt-3 lg:pt-0 lg:w-[100%] lg:pl-[14%]'>
                <div class="w-1/2 lg:mr-[-10%]">
                    <h5>Links</h5>
                    <nav class="list-none">
                    <li><a>About Us</a></li>
                    <li><a>Our Blog</a></li>
                    <li><a>FAQs</a></li>
                    <li><a>What we do</a></li>
                    <li><a>Linktree</a></li>
                    </nav>
                </div>
                <div class="w-1/2 lg:mr-6">
                    <h5>Address</h5>
                    <nav class="list-none max-w-[90%]">
                    <li><a>Nwaniba Road, Gate 4 <br/> Osongama Estate Uyo, Akwa Ibom</a></li>
                    </nav>
                </div>
                <div class="w-1/2 pt-5 lg:pt-0">
                    <h5>Contact Us</h5>
                    <nav class="list-none">
                    <li><a>+234 902 528 4756</a></li>
                    <li><a>info@walkersdao.com</a></li>
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
                <img src={footer} />
            </div>
        </div>
    </div>
  )
} 

export default Footer