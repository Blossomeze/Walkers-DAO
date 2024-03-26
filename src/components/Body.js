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

function Webbody() {
  const slides = [slide1, slide2, slide3];

  const handleButtonClick = () => {
    console.log('Button clicked');
  };
  return (
  <div className='flex items-center justify-center flex-col p-0 mt-[12%] lg:mt-0'>
    <div className='w-full flex items-center justify-center flex-col pb-[0 !important] pt-[5%] lg:pt-[1%] lg:pb-[6%] lg:h-[100vh]'  style={{backgroundImage: `url(${backgroundImage})`}} >
      <h4 className='bg-[#FFF6DB] border-[#D0D5DD] border mt-[18%] lg:mt-[10%] px-5 rounded-xl py-[5px]  text-xs lg:text-sm animate-pulse'>Introducing Walkers DAO</h4>
      <h1 className='max-w-2xl pb-2 px-8 lg:px-0 text-4xl lg:text-6xl lg:pb-4 pt-2 lg:pt-5 text-center font-semibold'>Little Strides,<br /> Giant Prints</h1>
      <h4 className='max-w-xl lg:px-0 text-sm lg:text-lg px-7'>Walkers Dao is a community driven organization empowering and educating individuals through the Web3 journey. We pave the way for innovative solutions, community driven initiatives and a collective vision of progress steps into the world of Web3.<span className='hidden lg:flex'> At our Dao, every stride shapes the future we envision together.</span></h4>
      <div>
        <button className="bg-[#070707] text-[#fff] mt-7 flex p-3 rounded-md" onClick={handleButtonClick}>
          <span className='pr-1'>Launch DAO</span>
          <img
            src="https://icongr.am/material/foot-print.svg?size=29&color=ffffff"
            alt="Footprint Icon"
            style={{ transform: 'scaleX(-1)', marginTop: '-4%', marginLeft: '-2%' }} // Flip horizontally
          />
        </button>
      </div>  
      </div>
    <div>
      <Section1 className='mt-8' />
      <Partners />
      <Values className='mt-8' />
      <Testimonials className="container mx-auto mt-8" slides={slides} />
      <Blog />
      
      <Waitlist />
    </div>   
  </div>
  )
}

export default Webbody


function Section1() {
  return (
    <div className='lg:flex flex-col py-[3%] mt-5 lg:justify-between items-center px-[5%] bg-[#F9F9FB] mx-[5%]'>
      <div className='flex flex-col items-center'>
          <h1 className='text-2xl lg:text-4xl text-center max-w-[60%]'>The digital world is full of innovation. We khow to take advantage of them!</h1>
          <h4 className='text-sm lg:text-lg lg:py-2 px-5 text-center lg:px-[27%] lg:pb-5'>At Walkers Dao, every stride shapes the future we envision together.</h4>
      </div>
      <div className='lg:justify-end'>
      <div className='flex items-center justify-between'>
          <div className='bg-[#fff] p-[5%] lg:px-[3%] lg:py-[1.5%] lg:pr-[2%] mt-8 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:w-[100%] max-w-[67%]'>
            <div className='mui_icons'>
             <BoltIcon />
            </div>
            <h3 className='py-2'>Our Vision</h3>
            <h6>To onboard and spread the knowledge of web3 to as many young persons as possible, walking them through the various steps and bringing them up to the latest development of this evolving space while bridging the gap in the web2 space.</h6>
          </div>
        <div className='hidden lg:flex p-3 mr-[10%]'>
          <img src={jet} alt='illustration' className='mt-[100%] ml-5'/>
        </div>
      </div>    
      <div className='flex items-center justify-between'>
        <div className='hidden lg:flex p-3 ml-[10%]'>
          <img src={jet} alt='illustration'/>
        </div>
        <div  className='bg-[#fff] max-w-[67%] p-[5%] lg:py-[1.5%] lg:px-[3%] my-8 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:justify-end lg:float-right '>
          <div className='mui_icons'>
             <PushPinIcon />
          </div>
          <h3 className='py-2'>Our Mission</h3>
          <h6>Simplifying the complexities in web3 technologies enabling anyone to thrive in the ecosystem, through education, innovations, mentorship and community management.</h6>
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
      <div className='lg:flex lg:flex-wrap justify-center'>
            <div className='bg-[#fff] p-[1%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)]'>
            <div className='mui_icons '>
             <EngineeringIcon />
            </div>
              <h3 className='py-1'>We are Ambitious:</h3>
              <h6 className='text-[13px] lg:text-sm'>In everything we do, we strive for the highest level of quality. We're always on the lookout for "the NEXT BIG THING!" By putting ourselves under constant pressure to develop projects and break new grounds within the digital world</h6>
            </div>
          <div className='bg-[#fff] p-[1%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)]'>
          <div className='mui_icons'>
             <TagFacesIcon />
            </div>
            <h3 className='py-1'>We are Understanding:</h3>
            <h6 className='text-[13px] lg:text-sm'>The digital world can be frustrating, con- fusing and even scary. We have all been there, therefore we re- spect our students and teach with care and empathy.</h6>
          </div>
          <div className='bg-[#fff] p-[1%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)]'>
          <div className='mui_icons'>
             <TipsAndUpdatesIcon />
            </div>
            <h3 className='py-1'>We are innovative:</h3>
            <h6 className='text-[13px] lg:text-sm'>Our passion for teaching gives us the courage to step outside of our comfort zone and try new and unconven- tional ideas. We see genuine failure as an opportunity to learn through our experience.</h6>
          </div>
          <div className='bg-[#fff] p-[1%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)]'>
          <div className='mui_icons'>
             <ThumbUpOffAltIcon />
            </div>
            <h3 className='py-1'>We value Integrity:</h3>
            <h6 className='text-[13px] lg:text-sm'>Integrity is the foundation for everything we do. We are admired and respected for our commitment to training our students with an honest and transparent approach to the digital world.</h6>
        </div>
          <div className='bg-[#fff] p-[1%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)]'>
          <div className='mui_icons'>
             <WalletIcon />
            </div>
            <h3 className='py-1'>We are Dependable:</h3>
            <h6 className='text-[13px] lg:text-sm'>Our desire to act in the best interests of our students ensures that we price our courses in a way that is af- fordable for everyone interested in learning.</h6>
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
