import React, { useState } from 'react';
import jet from '../assets/jet.png';
import chevronleft from '../assets/chevron-left.png';
import chevronright from '../assets/chevron-right.png';
import '../App.css'
import backgroundImage from '../assets/background.png'
import BoltIcon from '@mui/icons-material/Bolt';
import PushPinIcon from '@mui/icons-material/PushPin';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import WalletIcon from '@mui/icons-material/Wallet';
import Blog from './Blog';
import slide1 from '../assets/aichain.png';
import slide2 from '../assets/bolt.png';
import slide3 from '../assets/dao.png';
import firstleft from '../assets/Group 7 (1).png'
import firstmiddle from '../assets/Group 10.png'
import firstright from '../assets/Group 9.png'
import Partners from './Partners';
import Waitlist from './Waitlist'
import WWIT from './WWIT';

function Webbody() {
  const slides = [slide1, slide2, slide3];

  return (
  <div className='flex items-center justify-center flex-col p-0'>
    <div className='w-full flex items-center justify-center flex-col pb-[0 !important] pt-[5%] lg:pt-[0] lg:pb-[6%] lg:h-[90vh] my-[10%] lg:my-0 lg:mt-[2%]' style={{backgroundImage: `url(${backgroundImage})`}} >
      <h4 className='bg-[#FFF6DB] border-[#D0D5DD] border mt-[18%] lg:mt-[10%] px-5 rounded-xl py-[5px]  text-xs lg:text-sm animate-pulse'>Introducing Walkers DAO</h4>
      <h1 className='max-w-2xl pb-2 px-8 lg:px-0 text-4xl lg:text-6xl lg:pb-4 pt-2 lg:pt-5 text-center font-semibold'>This is the path,<br /> Walk ye in it</h1>
      <h4 className='max-w-xl lg:px-0 text-sm lg:text-lg px-7'>Walkers Dao is a community driven organization empowering and educating individuals through the Web3 journey. As believers, we pave the way for innovative solutions, community driven initiatives and a collective vision of progress steps into the world of Web3.</h4>
      <div>
      <button disabled className="bg-black text-white mt-5 lg:mt-7 flex p-2 pl-3 lg:p-3 rounded-md text-sm">
          <span className='px-1'>Launch DAO</span>
          <img className='hidden lg:flex'
            src="https://icongr.am/material/foot-print.svg?size=29&color=ffffff"
            alt="Footprint Icon"
            style={{ transform: 'scaleX(-1)', marginTop: '-4%', marginLeft: '-2%'}}
          />
          <img className='lg:hidden flex'
            src="https://icongr.am/material/foot-print.svg?size=20&color=ffffff"
            alt="Footprint Icon"
            style={{ transform: 'scaleX(-1)', marginTop: '-1.5%', marginLeft: '-2%'}}
          />
        </button>
      </div>  
      </div>
    <div>
      <Section1 className='mt-8' />
      <Partners />
      <Values className='mt-8' />
      {/* <Testimonials className="container mx-auto mt-8" slides={slides} /> */}
      <Waitlist />
      <WWIT />
      <Blog />
    </div>   
  </div>
  )
}

export default Webbody


function Section1() {
  return (
    <div className='lg:flex flex-col py-[3%] mt-5 lg:justify-between items-center lg:px-[5%] bg-[#F9F9FB] mx-[5%]'>
      <div className='flex flex-col items-center'>
          <h1 className='text-base lg:text-4xl text-center max-w-[85%] lg:max-w-[60%]'>The digital world is full of innovation. We know to take advantage of them!</h1>
          <h4 className='text-sm lg:text-lg lg:py-2 px-[5%] text-center lg:px-[27%] lg:pb-5'>At Walkers Dao, every stride shapes the future we envision together.</h4>
      </div>
      <div className='lg:justify-end lg:px-0'>
      <div className='flex items-center justify-between'>
          <div className='bg-[#fff] px-5 py-4 lg:px-[3%] lg:py-[1.5%] lg:pr-[2%] mt-8 rounded-2xl border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:w-[100%] lg:max-w-[67%]'>
            <div className='mui_icons'>
             <BoltIcon />
            </div>
            <h3 className='py-2 text-base lg:text-xl '>Our Vision</h3>
            <h6 className='text-sm lg:text-base'>To onboard and spread the knowledge of web3 to as many young persons as possible, walking them through the various steps and bringing them up to the latest development of this evolving space while bridging the gap in the web2 space.</h6>
          </div>
        <div className='hidden lg:flex p-3 mr-[10%]'>
          <img src={jet} alt='illustration' className='mt-[100%] ml-5'/>
        </div>
      </div>    
      <div className='flex items-center justify-between'>
        <div className='hidden lg:flex p-3 ml-[10%]'>
          <img src={jet} alt='illustration'/>
        </div>
        <div className='bg-[#fff] lg:max-w-[67%] px-5 lg:py-[1.5%] lg:px-[3%] my-5 lg:my-10 rounded-2xl py-4 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:justify-end lg:float-right '>
          <div className='mui_icons'>
             <PushPinIcon />
          </div>
          <h3 className='py-2 text-base lg:text-xl '>Our Mission</h3>
          <h6 className='text-sm lg:text-base'>Simplifying the complexities in web3 technologies enabling anyone to thrive in the ecosystem, through education, innovations, mentorship and community management.</h6>
        </div>    
      </div>   
      </div>
    </div>
  )
}


function Values() {
  return(
    <div className='rounded-lg pt-8 py-6 items-center text-center lg:pt-[40px] mx-[4%]'>
      <div className='items-center'>
          <h1 className='text-2xl lg:text-4xl'>Our Core Values</h1>
          <h4 className='text-sm lg:text-lg lg:py-2 px-5 text-center lg:px-[27%] lg:pb-5'>Walkers is a DAO revolutionizing Web3 education and empowerment. It is a training school of highly skilled</h4>
      </div>
      <div> 
      </div>
      <div className='lg:flex lg:flex-wrap justify-center mx-[2%]'>
            <div className='bg-[#fff] p-[5%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left lg:mx-[1.5%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] w-[100%]'>
            <div className='mui_icons '>
             <EngineeringIcon />
            </div>
              <h3 className='py-1'>Transparency:</h3>
              <h6 className='text-[13px] lg:text-sm'>We believe that transparency builds trust and encourages accountability. That's why we are committed to being open and honest about our activities and operations. This includes financial transparency, sharing information about decisions, and making sure that everyone in the community is informed and up-to-date.</h6>
            </div>
          <div className='bg-[#fff] p-[5%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left lg:mx-[1.5%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] w-full'>
          <div className='mui_icons'>
             <TagFacesIcon />
            </div>
            <h3 className='py-1'>Inclusiveness:</h3>
            <h6 className='text-[13px] lg:text-sm'>We believe that everyone has something to contribute, and that a diverse community is a stronger community. This means that anyone, regardless of their level of expertise, is welcome to join and contribute to the DAO</h6>
          </div>
          <div className='bg-[#fff] p-[5%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left lg:mx-[1.5%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] w-full'>
          <div className='mui_icons'>
             <TipsAndUpdatesIcon />
            </div>
            <h3 className='py-1'>Innovation:</h3>
            <h6 className='text-[13px] lg:text-sm'>We recognize the importance of innovation for adapting to the ever-changing world of crypto. In order to remain relevant and competitive, we are open to new ideas, and willing to take risks, and embrace change. It is also important to learn from failures and use them as opportunities for growth</h6>
          </div>
          <div className='bg-[#fff] p-[5%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left lg:mx-[1.5%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] w-full'>
          <div className='mui_icons'>
             <ThumbUpOffAltIcon />
            </div>
            <h3 className='py-1'>Integrity:</h3>
            <h6 className='text-[13px] lg:text-sm'>Integrity is the foundation for everything we do. We are admired and respected for our commitment to training young minds with an honest and transparent approach.</h6>
        </div>
          <div className='bg-[#fff] p-[5%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left lg:mx-[1.5%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] w-full'>
          <div className='mui_icons'>
             <WalletIcon />
            </div>
            <h3 className='py-1'>Sustainability:</h3>
            <h6 className='text-[13px] lg:text-sm'>Sustainability is not just a value; it is a guiding principle that shapes our identity, informs our decisions, and inspires our collective action. As a DAO committed to sustainability, we are dedicated to creating a more sustainable, equitable, and prosperous future for all.</h6>
          </div>     
      </div>
    </div>
  )
}


const Testimonials = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#000] text-[#fff] w-[100vw] py-[5%]">
      <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center'>
          <h1 className='text-2xl lg:text-4xl text-[#fff]'>What people say about Walkers DAO</h1>
          <h4 className='text-sm lg:text-lg lg:py-2 px-5 text-center lg:pb-5 text-[#fff]'>Testimonials from some of our community members</h4>
      </div>
        <div className='flex'>
        </div>
      </div>
      <div className="flex items-center justify-center pt-[2%]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="]transition-opacity duration-500"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            {/* Customize the content of each slide */}
            {currentSlide === index && (
              <div className="custom-slide w-full">
                <div className='flex items-center justify-between'>
                  {/* Content for slide 1 */}
                  {index === 0 && (
                    <>
                     <img onClick={prevSlide} src={chevronleft} alt="Previous" className="cursor-pointer" />
                      <img src={firstleft} alt="testimony" />
                      <img src={firstmiddle} alt="testimony" />
                      <img src={firstright} alt="testimony" />
                      <img onClick={nextSlide} src={chevronright} alt="Next" className="cursor-pointer" />
                    </>
                  )}
                  {/* Content for slide 2 */}
                  {index === 1 && (
                    <>
                    <img onClick={prevSlide} src={chevronleft} alt="Previous" className="cursor-pointer" />
                     <img src={firstleft} alt="testimony" />
                     <img src={firstmiddle} alt="testimony" />
                     <img src={firstright} alt="testimony" />
                     <img onClick={nextSlide} src={chevronright} alt="Next" className="cursor-pointer" />
                   </>
                  )}
                  {/* Content for slide 3 */}
                  {index === 2 && (
                    <>
                    <img onClick={prevSlide} src={chevronleft} alt="Previous" className="cursor-pointer" />
                     <img src={firstleft} alt="testimony" />
                     <img src={firstmiddle} alt="testimony" />
                     <img src={firstright} alt="testimony" />
                     <img onClick={nextSlide} src={chevronright} alt="Next" className="cursor-pointer" />
                   </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
