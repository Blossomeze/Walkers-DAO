import Person from "./Person"
import auslyn from '../assets/auslyn.jpg'
import prevailer from '../assets/prevailer.jpg'
import jimmy from '../assets/jimmy.jpg'
import blossom from '../assets/blossom.jpg'
import ned from '../assets/ned.jpg'
import freddy from '../assets/freddy.jpg'
import larney from '../assets/larney.jpg'
import diamond from '../assets/diamond.jpg'
import favour from '../assets/favour.png'
import idol from '../assets/idol.jpg'
import jabulani from '../assets/jabulani.jpg'
import hemy from '../assets/hemmyyy.jpg'
import whizibhi from '../assets/whizibhi.jpg'
import nftmafia from '../assets/nftmafia.jpg'

function Team() {
  return (
    <div className='bg-[#070707] w-full py-[7%] lg:py-[5%] team'>
        <div className='flex flex-col items-center'>
          <h1 className='text-xl lg:text-4xl text-[#fff] pb-1 lg:pb-0 text-center'>The team behind <span className='text-[#e99e2d]'>Walkers DAO</span></h1>
          <div className='flex w-full items-center justify-center'>
          <img className='lg:hidden flex'
            src="https://icongr.am/material/foot-print.svg?size=20&color=ffffff"
            alt="Footprint Icon"
            style={{ transform: 'scaleX(100%)', marginTop: '-1%', marginLeft: '-2%'}}
          />
            <img className="hidden lg:flex" src="https://icongr.am/material/foot-print.svg?size=29&color=ffffff" alt="Footprint Icon" style={{ transform: 'scaleX(100%)', marginTop: '-1%', marginRight: '1%' }} />
            <h4 className='text-sm lg:text-lg lg:py-2 text-center lg:pb-5 text-[#fff]'>Meet Our Brilliant Minds</h4>
            <img className="hidden lg:flex" src="https://icongr.am/material/foot-print.svg?size=29&color=ffffff" alt="Footprint Icon" style={{ transform: 'scaleX(-1)', marginTop: '-1%', marginLeft: '1%' }} />
            <img className='lg:hidden flex'
            src="https://icongr.am/material/foot-print.svg?size=20&color=ffffff"
            alt="Footprint Icon"
            style={{ transform: 'scaleX(-1)', marginTop: '-1%'}}
          />
          </div>
        </div>
        <div className="lg:px-[5%] px-5 flex flex-wrap justify-between lg:justify-around pt-4 lg:pt-0">
            <Person image={auslyn} name="AUSLYN WALKER" role="Founder" />
            <Person image={prevailer} name="PREVAILER UDOMISOR" role="Co-Founder & Head of Admin" />
            <Person image={jimmy} name="ALPHA WALKER" role="Assistant Head of Admin" />
            <Person image={blossom} name="BLOSSOM EZE" role="Product Manager & Head of Dev" />
            <Person image={freddy} name="FREDRICK OMOKE" role="Advisor" />
            <Person image={larney} name="LARNEY" role="Advisor" />
            <Person image={diamond} name="DIAMOND" role="Advisor" />
            <Person image={ned} name="CHIEF NED" role="Chief Marketing Officer" />
            <Person image={idol} name="BLAQMIKE" role="Head of Creatives" />
            <Person image={jimmy} name="NSISONG UMOH" role="Head of Content & Writer" />
            <Person image={favour} name="FAVOUR FRIDAY" role="Lead Graphics Designer" />
            <Person image={jabulani} name="JABULANI USEN" role="Developer" />
            <Person image={hemy} name="HEMMIE" role="Social Media & Collaboration Manager" />
            <Person image={whizibhi} name="WHIZIBHI" role="Discord Manager & Bot Dev" />
            <Person image={nftmafia} name="NFT MAFIA" role="Assistant Social Media Manager & NFT Geek" />
        </div>
    </div>
  )
}

export default Team