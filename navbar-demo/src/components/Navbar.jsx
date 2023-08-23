import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';
import logo from '../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks 
    ? `${linksRef.current.getBoundingClientRect().height}px` 
    : '0px',
  }

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* {showLinks && (  previous fixed approach*/}
          <div className='links-container' ref={linksContainerRef} style={linkStyles}>
            {/* fixed approach below */}
            {/* <div className= {showLinks? 'links-container show-container': 'links-container'}> */}
            <ul className='links' ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        {/* )} showLinks && ( */}
        <ul className="social-icons">
            {social.map((link) => {
                const {id, url, icon} = link;
                return <li key={id}>
                    <a href={url}>
                        {icon}
                    </a>
                </li>
            })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
