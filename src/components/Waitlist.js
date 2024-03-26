import React from 'react'

function Waitlist() {
  return (
    <div className='py-[3%] bg-[#F9F9FB] m-[3%]'>
      <div className='flex flex-col items-center'>
          <h1 className='text-2xl lg:text-4xl'>Join Our Waitlist</h1>
          <h4 className='text-sm lg:text-lg lg:py-2 px-5 text-center lg:pb-5'>Fill in your details so we can keep you up to date with the announcements and upcoming events</h4>
      </div>
      <div className='flex items-center justify-center pt-5'>
        <form className='bg-[#fff] rounded-xl px-7 py-5 w-[500px] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)]'>
            <h3>Name</h3>
            <input className='bg-[#F9F9FB] px-4 py-3 rounded-xl w-full' type='text' placeholder='Full Name' />
            <h3 className='pt-[8%]'>Email</h3>
            <input className='bg-[#F9F9FB] px-4 py-3 rounded-xl w-full' type='email' placeholder='Email Address' />
            <h3 className='pt-[8%]'>Phone No.</h3>
            <input className='bg-[#F9F9FB] px-4 py-3 rounded-xl w-full' type='text' placeholder='WhatsApp Number' />
        </form>
      </div>
    </div>
  )
}

export default Waitlist