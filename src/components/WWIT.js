import lady from '../assets/image 29.png'

function WWIT() {
  return (
    <div className='bg-[#464646] pt-[5%] lg:pt-[3%] px-0 lg:px-[5%]'>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl lg:text-4xl text-white text-center'><span className='text-primary'>WALKER</span> WOMEN IN TECH<br/>COMING SOON!</h1>
        </div>
        <div className='flex flex-col lg:flex-row text-white items-center justify-between px-[5%]'>
    <div className='lg:w-[65%]'>
        <h4 className='text-white lg:text-left text-sm lg:text-2xl pt-5 lg:pt-0'>Hey there, ladies! We know that getting started in the crypto world can be a bit overwhelming, no need to panic, we're here to help. We'll take you through the basics, one step at a time, and we'll make sure you feel confident and empowered by the end.</h4>
        <h4 className='text-white lg:text-left text-sm lg:text-2xl pt-5'>So, let's get started. Whether you're just a beginner or you need a refresher, we've got you covered. We'll take you through the required steps and guide you through your Web3 journey as part of the DAO's mission.</h4>
    </div>
    <div className='lg:w-[30%]'>
        <img className='w-[100%]' src={lady} alt="mockup" />
    </div>
</div>
    </div>
  )
}

export default WWIT