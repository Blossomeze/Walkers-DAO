import React from 'react'

function Waitlist() {
  return (
    <div className='py-[5%] lg:py-[3%] bg-[#F9F9FB] m-[3%] flex flex-col justify-center items-center rounded-2xl'>
      <div className='flex flex-col items-center'>
          <h1 className='text-2xl lg:text-4xl'>Join Our Waitlist</h1>
          <h4 className='text-sm lg:text-lg lg:py-2 px-5 text-center lg:pb-5'>Fill in your details so we can keep you up to date with the announcements and upcoming events</h4>
      </div>
      <div className='flex flex-col items-center justify-center mt-5 bg-[#fff] rounded-xl mx-[4%] w-full p-5 lg:w-[500px] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)]'>
        <form className='w-full'>
            <h3 className='text-lg lg:text-xl'>Name</h3>
            <input className='bg-[#F9F9FB] px-2 py-3 rounded-xl w-full text-sm lg:text-base' type='text' placeholder='Full Name' />
            <h3 className='pt-[8%] text-lg lg:text-xl'>Email</h3>
            <input className='bg-[#F9F9FB] px-2 py-3 rounded-xl w-full text-sm lg:text-base' type='email' placeholder='Email Address' />
            <h3 className='pt-[8%] text-lg lg:text-xl'>Phone No.</h3>
            <input className='bg-[#F9F9FB] px-2 py-3 rounded-xl w-full text-sm lg:text-base' type='text' placeholder='WhatsApp Number' />
        </form>
        <div>
        <button type='submit' className="bg-black text-white mt-3 lg:mt-7 flex p-2 pl-3 lg:p-3 rounded-md text-base  lg:text-xl justify-center items-center">
          <span className='px-1'>Submit</span>
          <img className='hidden lg:flex'
            src="https://icongr.am/material/foot-print.svg?size=29&color=ffffff"
            alt="Footprint Icon"
            style={{ transform: 'scaleX(-1)', marginTop: '-1%', marginLeft: '-4%'}}
          />
          <img className='lg:hidden flex items-center'
            src="https://icongr.am/material/foot-print.svg?size=20&color=ffffff"
            alt="Footprint Icon"
            style={{ transform: 'scaleX(-1)', marginTop: '2.5%', marginLeft: '-4%'}}
          />
        </button>
      </div>  
      </div>
    </div>
  )
}

export default Waitlist