import dashboard from '../assets/dashboard.PNG';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import jet from '../assets/jet.png';
import '../App.css'
import BoltIcon from '@mui/icons-material/Bolt';
import PushPinIcon from '@mui/icons-material/PushPin';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import WalletIcon from '@mui/icons-material/Wallet';

function Webbody() {
  return (
    <div className='flex items-center justify-center flex-col p-0 mt-[9%] lg:mt-0'>
    <div className='bg-[#F9F9FB] w-full flex items-center justify-center flex-col pb-[0 !important] pt-[5%] lg:pt-[3%]' >
        <h1 className='max-w-2xl pb-2 px-8 lg:px-0 pt-[8%] text-3xl lg:text-5xl lg:pb-4'>We don't just teach. We develop greatness</h1>
        <h4 className='max-w-xl px-5 lg:px-0 text-sm lg:text-lg'>Walkers is a DAO revolutionizing Web3 education and empowerment. It is a training school of highly skilled and experienced tutors committed to nurturing and developing everyone to capture the full value of the digital world.</h4>
        <img className='px-[20%] lg:mx-0 mt-4' src ={dashboard} alt='dashboard'/>
    </div>
    <div className='px-[5%]'>
      <Section1 className='mt-8' />
      <Values className='mt-8' />
    </div>   
  </div>
  )
}

export default Webbody


function Section1() {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };
  return (
    <div className='lg:flex mt-5 lg:justify-between items-center px-[3%]'>
      <div className='text-center mb-4 lg:max-w-[45%] flex items-center flex-col lg:text-left lg:items-start'>
        <h2 className='text-xl text-center lg:text-4xl lg:text-left'>The digital world is full of innovation. Learn how to take advantage of them!</h2>
        <h4 className='text-sm text-center lg:text-left lg:text-lg lg:mt-5'>Walkers DAO is a training school of highly skilled and experienced tutors committed to nurturing and developing everyone.</h4>       
        <div className='my-4 lg:mt-4 lg:text-left flex'>
          <div className='shift'>
            <div>
                <button className="bg-[#000] text-[#fff] flex p-3 rounded-md" onClick={handleButtonClick}>
                  <span className='pr-1'>Launch DAO</span>
                  <img
        src="https://icongr.am/material/foot-print.svg?size=29&color=ffffff"
        alt="Footprint Icon"
        style={{ transform: 'scaleX(-1)', marginTop: '-4%', marginLeft: '-2%' }} // Flip horizontally
    />
                </button>
            </div>  
          </div>                
        </div>
      </div>
      <div className='border-red-400 lg:max-w-[50%] lg:justify-end'>
      <div className='flex items-center lg:w-[41.5vw]'>
          <div className='bg-[#fff] p-[5%] lg:p-[3%] lg:pr-[2%] mt-8 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:w-[100%] '>
            <div className='mui_icons'>
             <BoltIcon />
            </div>
            <h3 className='py-2'>Our Vision</h3>
            <h6>To help everyone, everywhere realize their full potential within the digital world.</h6>
          </div>
        <div className='hidden lg:flex p-3'>
          <img src={jet} alt='' className='mt-[100%] ml-5'/>
        </div>
      </div>       
          <div  className='bg-[#fff] p-[5%] lg:p-[3%] my-8 rounded-2xl py-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] lg:w-[34vw] lg:justify-end lg:float-right '>
          <div className='mui_icons'>
             <PushPinIcon />
            </div>
          <h3 className='py-2'>Our Mission</h3>
          <h6>To nurture and empower everyone, everywhere with the best tools and training necessary for the digital world</h6>
        </div>    
      </div>
    </div>
  )
}


function Values() {
  return(
    <div className='rounded-lg bg-[#F9F9FB] pt-8 py-6 items-center text-center lg:pt-[40px]'>
      <div className='items-center'>
          <h1 className='text-2xl lg:text-4xl'>Our Core Values</h1>
          <h4 className='text-sm lg:text-lg lg:py-2 px-5 text-center lg:px-[27%] lg:pb-5'>Walkers is a DAO revolutionizing Web3 education and empowerment. It is a training school of highly skilled</h4>
      </div>
      <div> 
      </div>
      <div className='px-[5%] lg:flex lg:flex-wrap justify-center'>
            <div className='bg-[#fff] p-[4%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%]'>
            <div className='mui_icons'>
             <EngineeringIcon />
            </div>
              <h3 className='py-2'>We are Ambitious:</h3>
              <h6 className='text-[13px] lg:text-sm'>In everything we do, we strive for the highest level of quality. We're always on the lookout for "the NEXT BIG THING!" By putting ourselves under constant pressure to develop projects and break new grounds within the digital world</h6>
            </div>
          <div className='bg-[#fff] p-[4%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%]'>
          <div className='mui_icons'>
             <TagFacesIcon />
            </div>
            <h3 className='py-2'>We are Understanding:</h3>
            <h6 className='text-[13px] lg:text-sm'>The digital world can be frustrating, con- fusing and even scary. We have all been there, therefore we re- spect our students and teach with care and empathy.</h6>
          </div>
          <div className='bg-[#fff] p-[4%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%]'>
          <div className='mui_icons'>
             <TipsAndUpdatesIcon />
            </div>
            <h3 className='py-2'>We are innovative:</h3>
            <h6 className='text-[13px] lg:text-sm'>Our passion for teaching gives us the courage to step outside of our comfort zone and try new and unconven- tional ideas. We see genuine failure as an opportunity to learn through our experience.</h6>
          </div>
          <div className='bg-[#fff] p-[4%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%]'>
          <div className='mui_icons'>
             <ThumbUpOffAltIcon />
            </div>
            <h3 className='py-2'>We value Integrity:</h3>
            <h6 className='text-[13px] lg:text-sm'>Integrity is the foundation for everything we do. We are admired and respected for our commitment to training our students with an honest and transparent approach to the digital world.</h6>
        </div>
          <div className='bg-[#fff] p-[4%] my-5 rounded-2xl py-7 lg:w-[30%] lg:p-7 text-left mx-[1.5%]'>
          <div className='mui_icons'>
             <WalletIcon />
            </div>
            <h3 className='py-2'>We are Dependable:</h3>
            <h6 className='text-[13px] lg:text-sm'>Our desire to act in the best interests of our students ensures that we price our courses in a way that is af- fordable for everyone interested in learning.</h6>
          </div>     
      </div>
    </div>
  )
}