import backgroundImage from './assets/background.png'
import airdrop from './assets/bro.png'
import defi from './assets/cuate1.png'
import discord from './assets/cuate.png'
import degen from './assets/amico.png'
import research from './assets/rafiki.png'

function Whatwedo() {
  return (
    <div className='flex items-center justify-center flex-col p-0 mt-[12%] lg:mt-0'>
    <div className='w-full flex items-center justify-center flex-col pb-[0 !important] pt-[5%] lg:pt-[5%] lg:pb-[6%] lg:h-[90vh] my-[10%] lg:my-0 lg:mt-[5%]'  style={{backgroundImage: `url(${backgroundImage})`}} >
      <h4 className='bg-[#FFF6DB] border-[#D0D5DD] border px-5 rounded-xl py-[5px] text-xs lg:text-sm animate-pulse'>Walking the DAO</h4>
      <h1 className='max-w-2xl pb-2 px-8 lg:px-0 text-4xl lg:text-6xl lg:pb-4 pt-2 lg:pt-5 text-center font-semibold'>What We Do,<br /> @Walkers DAO</h1>
      <h4 className='max-w-xl lg:px-0 text-sm lg:text-lg px-7'>At WALKERS DAO, we empower growth in the digital landscape through technology, partnerships, innovation and community.</h4>
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
    <div className='max-w-full'>
  <div className='p-[5%] lg:flex lg:flex-row bg-gray lg:py-[3%] items-center justify-between'>
    <div className='max-w-full lg:max-w-[55%]'>
      <h3 className='text-xl lg:text-3xl text-center lg:text-left'>Airdrop And Testnets Tutorials:</h3>
      <h4 className='lg:text-left pt-3 text-sm lg:text-2xl'>At Walkers' DAO, we cultivate an active community, offering accurate information, threads, and links to airdrops and test nets. Our tutorials empower members with step-by-step guidelines for participation. Together, we shape the future of blockchain and DeFi while members reap the rewards.</h4>
    </div>
    <div className='mt-4 lg:mt-0 flex justify-center'>
      <img className='max-w-[70%] lg:max-w-auto' src={airdrop} alt='illustration' />
    </div>
  </div>
  <div className='p-[5%] flex flex-col-reverse lg:flex lg:flex-row bg-white lg:py-[3%] lg:px-[5%] items-center justify-between'>
    <div className='mt-4 pr-[5%] lg:mt-0 flex justify-center'>
      <img className='max-w-[70%] lg:max-w-auto' src={discord} alt='illustration' />
    </div>
    <div className='max-w-full lg:max-w-[58%]'>
      <h3 className='text-xl lg:text-3xl text-center lg:text-left'>Discord Tutorial</h3>
      <h4 className='lg:text-left pt-3 text-sm lg:text-2xl'>On our Discord server, our vibrant community drives organizational success. Our team tirelessly facilitates discussions, organizes events, and encourages collaboration. Discord tutorials cover:</h4>
      <h4 className='lg:text-left pt-3 text-sm lg:text-2xl'>
        <ul className='list-disc pl-8 text-left'>
          <li>Community engagement strategies</li>
          <li>Event organization and AMA sessions</li>
          <li>Creation of engagement channels</li>
        </ul>
      </h4>
      <h4 className='lg:text-left pt-3 text-sm lg:text-2xl'>We also provide guidance on Web3 jobs, community moderation, collaboration management, content writing, and ambassadorial roles, ensuring members are equipped to participate in DeFi activities.</h4>
    </div>
  </div>
  <div className='p-[5%] lg:flex lg:flex-row bg-[#070707] lg:py-[3%] lg:px-[5%] items-center justify-between'>
        <div className='max-w-full lg:max-w-[58%]'>
          <h3 className='text-xl lg:text-3xl text-center lg:text-left text-white'>DeFi Onboarding</h3>
          <h4 className='lg:text-left pt-3 text-sm lg:text-2xl text-white'>In our DAO, we democratize access to DeFi knowledge and advantages, regardless of background. Our onboarding includes: </h4>
          <span>
            <ul className='list-disc text-sm lg:text-2xl pl-8 text-white'>
              <li>Introduction to DeFi and platform navigation</li>
              <li>Community support and mentorship</li>
              <li>Risk management Education and awareness</li>
            </ul>
          </span>
          <h4 className='lg:text-left pt-3 text-sm lg:text-2xl text-white'>We guide users through these processes, fostering collective learning, growth, and the reshaping of the future with DeFi.</h4>
        </div>
        <div  className='mt-4 lg:mt-0 flex justify-center pl-[5%]'>
          <img className='max-w-[70%] lg:max-w-auto' src={defi} alt='illustration' />
        </div>
      </div>
      <div className='p-[5%] flex flex-col-reverse lg:flex lg:flex-row bg-white lg:py-[3%] lg:px-[5%] items-center justify-between'>
        <div className='mt-4 lg:mt-0 flex justify-center'>
          <img className='max-w-[70%] lg:max-w-auto' src={degen} alt='illustration' />
        </div>
        <div className='max-w-full lg:max-w-[58%]'>
          <h3 className='text-xl lg:text-3xl text-center lg:text-left'>DEGEN</h3>
          <h4 className='lg:text-left pt-3 text-sm lg:text-2xl'>Degen stands for degeneration. It means taking high risk in the crypto space. It doesn't involve much fundamental or technical analysis. At Walker’s DAO, our aim is to guide our community members in taking high risk play with low capital instead of high capital like the 0-2 Sol, 0-10 Sol play and also the $10- $100 . We teach them to use different degen/trading bots.</h4>
        </div>
      </div>
      <div className='p-[5%] lg:flex lg:flex-row bg-gray lg:py-[3%] lg:px-[5%] items-center justify-between'>
        <div className='max-w-full lg:max-w-[58%]'>
          <h3 className='text-xl lg:text-3xl text-center lg:text-left'>Research</h3>
          <h4 className='lg:text-left pt-3 text-sm lg:text-2xl'>Research is more than just a means to an end. It's our mindset here at Walkers’. We're communityitted to curiosity, exploration, and intellectual vigor. We approach our research through;</h4>
          <h4 className='lg:text-left pt-3 text-sm lg:text-2xl'>
            <ul className='list-disc pl-8 text-left'>
              <li>Thorough analysisis</li>
              <li>Openness and transparency</li>
              <li>Long-term Vision and impact.</li>
            </ul>
          </h4>
          <h4 className='lg:text-left pt-3 text-sm lg:text-2xl'>We are passionate about exploring the frontiers of DeFi and uncovering new ideas andoesn't insights to shape the DeFi future</h4>
        </div>
        <div className='mt-4 lg:mt-0 flex justify-center'>
          <img className='max-w-[70%] lg:max-w-auto' src={research} alt='illustration' />
        </div>
      </div>
</div>
</div>
  </div>
  )
}

export default Whatwedo