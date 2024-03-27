import React from 'react'
import backgroundImage from './assets/background.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Question from './Question';

function FAQ() {
  return (
    <div className='flex items-center justify-center flex-col p-0 mt-[12%] lg:mt-0 bg-white'>
        <div className='w-full flex items-center justify-center flex-col pb-[0 !important] pt-[5%] lg:pt-[5%] lg:pb-[6%] lg:h-[90vh] my-[10%] lg:my-0 lg:mt-[5%]'  style={{backgroundImage: `url(${backgroundImage})`}} >
      <h4 className='bg-[#FFF6DB] border-[#D0D5DD] border px-5 rounded-xl py-[5px] text-xs lg:text-sm animate-pulse'>Have any questions?</h4>
      <h1 className='max-w-2xl pb-2 px-8 lg:px-0 text-4xl lg:text-6xl lg:pb-4 pt-2 lg:pt-5 text-center font-semibold'>Our Frequently<br />Asked Questions</h1>
      <h4 className='max-w-xl lg:px-0 text-sm lg:text-lg px-7'>Answers to your most asked questions about Walkers DAO</h4>
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
      <div className="w-full mt-4 p-4 lg:px-[5%] lg:pt-[3%] bg-black lg:flex lg:flex-wrap lg:justify-between">
      <Question
        question="Who is the founder of Walkers DAO?"
        answer="Assams Auslean. Popularly known as Auslyn Walker"
      />
      <Question
        question="What are the benefits of joining Walkers DAO?"
        answer={[
            "Joining Walkers DAO has a lot of benefits ",
            "from gaining knowledge about the crypto and DeFi space to ",
            "accessing free tutorials for airdrops and testnets. ",
            "Here you get to receive guides and mentorship to navigate the space ",
            "and also get to meet and interact with other people in the space via our social media channels. There are many more benefits to joining us so stick around and find out.",
          ]}
      />
      <Question
        question="How do I become a member of Walkers DAO?"
        answer="Becoming a member of the DAO is pretty easy. Just join through the links on our social media handles. No big deal, no payment."
      />
      <Question
        question="Are there any costs associated with joining Walkers DAO?"
        answer="There are no costs associated with joining the DAO. It is absolutely free."
      />
      <Question
        question="What resources are available to members of Walkers DAO?"
        answer="At our DAO, lots of resources are available. You have access to detailed and legit airdrops. Not just that, you'll have guidelines to them."
      />
      <Question
        question="How do I become a full member of the DAO?"
        answer="Getting involved with Walkers DAO is quite easy. All you need to do is to show up everyday."
      />
      <Question
        question="What are the terms and conditions of membership in WalkersDAO?"
        answer="The terms and conditions of the DAO are quite simple and are stated on our various social media platforms. Eg, no telegram airdrops, no spamming of unrelated articles, e.t.c."
      />
      <Question
        question="How can I contact the team @Walkers DAO?"
        answer="To contact the team, send an email to walkersdao1@mail.com. Ensure you state clearly the subject of the email as that will determine the speed of our response."
      />
    </div>
      <div className='bg-gray m-5 p-5 px-[5%] flex flex-col lg:flex-row justify-center lg:justify-between items-center w-[94%] rounded-2xl'>
            <div>
                <h3 className='text-center lg:text-left'>Still Have Questions?</h3>
                <h4 className='text-sm'>Can’t find the answer you’re looking for? Please chat to our friendly team</h4>
            </div>
            <div>
                <button className='bg-black rounded-md text-white px-3 py-2 mt-5 lg:mt-0 flex items-center'>Get In Touch <ChevronRightIcon /></button>
            </div>
      </div>
    </div>
  )
}

export default FAQ


















