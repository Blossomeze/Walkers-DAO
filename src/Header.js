import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import NewSidebar from './components/Sidebar';
import logo from './assets/logo.png';
import { Link } from "react-router-dom"

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderFloating, setIsHeaderFloating] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleIconClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderFloating(true);
      } else {
        setIsHeaderFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Detect if viewport width is less than 768px (typical tablet size)
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={`header w-full flex items-center justify-between px-5 md:px-[5%] md:h-20 h-16 fixed top-0 ${isHeaderFloating ? 'floating-header' : ''}`}>
        <div>
          <Link to="/"><img className='lg:w-[180px] w-[110px]' src={logo} alt='walkers logo' /></Link>
        </div>
        {isMobileView &&
          <div className='md:hidden'>
            <div className='sidebar-trigger' onClick={handleIconClick}>
              {isSidebarOpen ? <CloseIcon className='close-icon' /> : <DehazeIcon />}
            </div>
          </div>
        }
        <div className={`hidden md:flex ${isMobileView && !isSidebarOpen ? 'hidden' : ''}`}>
          <ul className='hlinks flex'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/what_we_do"><li>What we do</li></Link>
            <Link to="/faq"><li>FAQs</li></Link>
          </ul>
        </div>
        <div className='hidden md:flex'>
          <button className="bg-black text-white flex p-3 pr-1 rounded-md items-center" onClick={handleIconClick}>
            <span>Launch DAO</span>
            <img src="https://icongr.am/material/foot-print.svg?size=29&color=ffffff" alt="Footprint Icon" style={{ transform: 'scaleX(-1)', marginTop: '-4%', marginLeft: '-2%' }} />
          </button>
        </div>
      </div>
      {isMobileView && isSidebarOpen &&
        <NewSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      }
    </div>
  );
}

export default Header;
