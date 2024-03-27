import Socials from './components/Socials'
import backgroundImage from './assets/background.png'
import Team from './components/Team'
import frame1 from './assets/Frame 58.png'
import frame from './assets/Frame 59.png'

function About() {
  return (
    <div className='flex items-center justify-center flex-col p-0 mt-[12%] lg:mt-0'>
    <div className='w-full flex items-center justify-center flex-col pb-[0 !important] pt-[5%] lg:pt-[5%] lg:pb-[6%] lg:h-[90vh] my-[10%] lg:my-0 lg:mt-[5%]'  style={{backgroundImage: `url(${backgroundImage})`}} >
      <h4 className='bg-[#FFF6DB] border-[#D0D5DD] border px-5 rounded-xl py-[5px] text-xs lg:text-sm animate-pulse'>Explaining the DAO</h4>
      <h1 className='max-w-2xl pb-2 px-8 lg:px-0 text-4xl lg:text-6xl lg:pb-4 pt-2 lg:pt-5 text-center font-semibold'>About Us,<br /> Walkers DAO</h1>
      <h4 className='max-w-xl lg:px-0 text-sm lg:text-lg px-7'>Walkers Dao is a community driven organization empowering and educating individuals through the Web3 journey. We pave the way for innovative solutions, community driven initiatives and a collective vision of progress steps into the world of Web3. At Walkers, every stride shapes the future we envision together.</h4>
      <div>
        <button className="bg-black text-white mt-3 lg:mt-7 flex p-2 pl-3 lg:p-3 rounded-md text-sm">
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
    </div>
    <Statements />
    <Team />
    <Socials />
  </div>
  )
}


export default About


function Statements() {
    return(
        <div className='pl-[7%] bg-[#F9F9FB] lg:py-0 pr-[5.5%] lg:pr-0'>
            <div className='flex justify-evenly items-center'>
                <div className="py-8 lg:py-0">
                  <h3 className='text-xl lg:text-3xl'>Our Mission</h3>
                  <h4 className='text-sm lg:text-lg text-left lg:max-w-[90%] pt-1 lg:pt-3'>Enabling the complexities in web3 technologies enables anyone to thrive in the ecosystem, through education, innovations, mentorship and community management. <br />We're committed to fostering an inclusive environment where diverse voices are heard, and everyone has the opportunity to contribute and succeed. Together, we're building more than just a platform; we're cultivating a movement for positive change in the digital landscape. 🌐</h4>
                </div>
                <div className='hidden lg:flex w-[100%]'>
                  <img src={frame} alt="illustration" />
                </div>
            </div>
            <div className='flex justify-evenly items-center'>
                <div className='w-[100%] hidden lg:flex'>
                  <img src={frame1} alt='ïllustration' />
                </div>
                <div className='lg:pr-[7%] pb-8 lg:pb-0'>
                  <h3 className='text-xl lg:text-3xl text-right'>Our Vision</h3>
                  <h4 className='text-sm lg:text-lg text-right pt-1 lg:pt-3'>Our vision is to onboard and spread the knowledge of web3 to as many young persons as possible, not only will we spread the knowledge but we will walk them through the various steps and bring them up to the latest development of this evolving space while bridging the gap in the web2 space.</h4>
                </div>
            </div>
        </div>
    )
}