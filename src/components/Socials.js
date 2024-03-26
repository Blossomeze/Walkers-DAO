import discord from '../assets/discord.png'
import twitter from '../assets/twitter.png'
import gmail from '../assets/gmail.png'

function Socials() {
  return (
    <div className='lg:py-[3%] py-[6%] bg-gray mx-[5%]'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl lg:text-4xl'>Build With Us</h1>
            <h4 className='text-sm lg:text-lg lg:py-2 px-5 text-center lg:px-[27%] lg:pb-5'>Join our community of enthusiasts in the Web3 Space!!!</h4>
        </div>
        <div className='flex items-center justify-center flex-wrap px-[5%] lg:px-[10%]'>
            <div className='flex items-center justify-between py-3 px-5 lg:py-5 lg:px-7 border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] rounded-xl lg:w-[40%] w-[90%] my-3 lg:my-7 mx-5'>
                <div className='text-left flex flex-col items-start pr-[6%]'>
                    <h4 className='text-base lg:text-2xl font-medium text-black'>DISCORD</h4>
                    <h5 className='text-xs lg:text-sm font-medium text-[#98A2B3]'>New information and updates</h5>
                </div>
                <div>
                    <img className='w-[70%] lg:w-[100%]' src={discord} alt="discord logo" />
                </div>
            </div>
            <div className='flex items-center justify-between py-3 px-5  lg:py-5 lg:px-7 lg:w-[40%] w-[90%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] rounded-xl my-3 lg:my-7 mx-5'>
                <div className='text-left flex flex-col items-start pr-[6%]'>
                    <h4 className='text-base lg:text-2xl font-medium text-black'>TWITTER</h4>
                    <h5 className='text-xs lg:text-sm font-medium text-[#98A2B3]'>Keep up with new trends</h5>
                </div>
                <div>
                    <img className='w-[60%] lg:w-[90%]' src={twitter} alt="discord logo" />
                </div>
            </div>
            <div className='flex items-center justify-between py-3 px-5  lg:py-5 lg:px-7 lg:w-[42%] w-[90%] border-2 border-[#2f59bc17] shadow-lg shadow-[ 0px 17px 36px rgba(0, 0, 0, 0.02)] rounded-xl my-3 lg:my-7 mx-5'>
                <div className='text-left flex flex-col items-start pr-[6%]'>
                    <h4 className='text-base lg:text-2xl font-medium text-black'>EMAIL</h4>
                    <h5 className='text-xs lg:text-sm font-medium text-[#98A2B3]'>Want to collaborate? send mail</h5>
                </div>
                <div>
                    <img className='w-[70%] lg:w-[100%]' src={gmail} alt="discord logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Socials