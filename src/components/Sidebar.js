import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NewSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  // Effect to update activeLink state on initial load and URL changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const [dropdownStates, setDropdownStates] = useState([false, false, false, false]);

  const handleClose = () => {
    onClose();
  };

  const handleDropdownToggle = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleLinkClick = (event, isAnchorLink, index, to) => {
    if (isAnchorLink) {
      event.preventDefault();
      onClose();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    } else {
      if (location.pathname !== to) {
        navigate(to);
        window.location.reload();
      }
      handleDropdownToggle(index);
    }
  };

  return (
    <div className={`new-sidebar-container py-6 px-5 ${isOpen ? 'open' : 'closed'}`}>
      <div className="new-sidebar">
        <div className="ml-[87%]" onClick={handleClose}>
          <CloseIcon className="close-icon" />
        </div>
        <ul className="new-sidebar-lists pt-8">
          <li>
            <Link
              to="/about"
              onClick={(e) => handleLinkClick(e, false, 0, '/about')}
              className={activeLink === '/about' ? 'active' : ''}
            >
              <h4 className="sidebar-text">About Us</h4>
            </Link>
          </li>
          <li>
            <Link
              to="/what_we_do"
              onClick={(e) => handleLinkClick(e, false, 1, '/what_we_do')}
              className={activeLink === '/what_we_do' ? 'active' : ''}
            >
              <h4 className="sidebar-text">What We Do</h4>
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              onClick={(e) => handleLinkClick(e, false, 2, '/faq')}
              className={activeLink === '/faq' ? 'active' : ''}
            >
              <h4 className="sidebar-text">FAQs</h4>
            </Link>
          </li>
          <li onClick={(e) => handleLinkClick(e, false, 3, '')}>
            <h4 className="sidebar-text">
              Follow Us
              <KeyboardArrowDownIcon />
            </h4>
            {dropdownStates[3] && (
              <div className="new-dropdown-menu">
                <a href="/">Discord</a>
                <a href="/">Twitter</a>
                <a href="/">Medium</a>
              </div>
            )}
          </li>
        </ul>
        <button disabled className="bg-black text-white flex p-3 pr-1 rounded-md items-center mt-[10%]">
          <span>Launch DAO</span>
          <img
            src="https://icongr.am/material/foot-print.svg?size=28&color=ffffff"
            alt="Footprint Icon"
            style={{ transform: 'scaleX(-1)', marginTop: '-4%', marginLeft: '-2%' }}
          />
        </button>
      </div>
    </div>
  );
};

export default NewSidebar;
