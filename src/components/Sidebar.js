import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NewSidebar = ({ isOpen, onClose }) => {
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

  const handleLinkClick = (event, isAnchorLink, index) => {
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
      handleDropdownToggle(index);
    }
  };

  return (
    <div className={`new-open-sidebar ${isOpen ? 'new-show-sidebar' : ''}`}>
      <CloseIcon className='new-close-icon' onClick={handleClose} />
      <div className='new-sidebar'>
        <ul className='new-sidebar-lists'>
          <li onClick={(e) => handleLinkClick(e, true)}>
            <a href='#about'><h4>Who I Am</h4></a>
          </li>
          <li onClick={(e) => handleLinkClick(e, false, 1)}>
            <h4>Events<KeyboardArrowDownIcon /></h4>
            {dropdownStates[1] && (
              <div className="new-dropdown-menu">
                <a href='/'>Public Speaking</a>
                <a href='/'>Mentorship Session</a>
                <a href='/'>Tech Career Discovery</a>
              </div>
            )}
          </li>
          <li onClick={(e) => handleLinkClick(e, false, 2)}>
            <h4>My Story<KeyboardArrowDownIcon /></h4>
            {dropdownStates[2] && (
              <div className="new-dropdown-menu">
                <a target='_blank' rel="noreferrer" href="https://geeakpan.medium.com/">My Blog</a>
                <a href="#ebooks">My Books</a>
                <a href="#podcasts">VoG Podcast</a>
              </div>
            )}
          </li>
          <li onClick={(e) => handleLinkClick(e, false, 3)}>
            <h4>Let's Innovate<KeyboardArrowDownIcon /></h4>
            {dropdownStates[3] && (
              <div className="new-dropdown-menu">
                <a target='_blank' rel="noreferrer" href="https://bit.ly/FTLD-Community">FTLD</a>
                <a href='/'>Aubrey Marketing (Coming Soon)</a>
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/p/Cz1CmFJsY9S/?igshid=MTc4MmM1YmI2Ng==">Holo Tees</a>
              </div>
            )}
          </li>
        </ul>
        <button><a href="https://form.jotform.com/233187296457569">Book Me</a></button>
      </div>
    </div>
  );
};

export default NewSidebar;
