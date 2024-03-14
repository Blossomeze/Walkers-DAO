import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import NewSidebar from './Sidebar';
import logo from '../assets/logo.png'

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const handleIconClick = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div>
        <div className={`header w-full flex items-center justify-between px-[5%] md:px-[9%] md:h-20 h-16 fixed ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <div>
            <img className='w-[130px]' src={logo} alt='walkers logo' />
          </div>
          <div className='hidden md:flex text-lg font-medium'>
            <nav className='hlinks'>
              <a href='https://walkersdaov1.vercel.app/'>Home</a>
              <a href='https://walkersdaov1.vercel.app/'>About Us</a>
              <a href='https://walkersdaov1.vercel.app/'>What we do</a>
              <a href='https://walkersdaov1.vercel.app/'>FAQs</a>
            </nav>
          </div>
          <div>
            <div className='hidden md:flex'>
              <button className="bg-[#000] text-[#fff] flex p-3 rounded-md items-center" onClick={handleIconClick}>
                <span>Launch DAO</span>
                <img src="https://icongr.am/material/foot-print.svg?size=29&color=ffffff" alt="Footprint Icon" style={{ transform: 'scaleX(-1)', marginTop: '-4%', marginLeft: '-2%' }} />
              </button>
            </div>
            <div className='sidebar-trigger' onClick={handleIconClick}>
              {isSidebarOpen ? <CloseIcon className='close-icon' onClick={handleIconClick} /> : <DehazeIcon />}
            </div>
          </div>
        </div>
        {isSidebarOpen && (
          <div className={`new-open-sidebar ${isSidebarOpen ? 'new-show-sidebar' : ''}`}>
            <NewSidebar onClose={() => setIsSidebarOpen(false)} />
          </div>
        )}
      </div>
    );
  }
  
  export default Header;