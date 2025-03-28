import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className='logo' />

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-220} duration={500}>Service</Link></li>
        <li><Link to='about' smooth={true} offset={-90} duration={500}>About Us</Link></li>
        <li><Link to='contact' smooth={true} offset={-100} duration={500} className='btn'>Contact Us</Link></li>
      </ul>

      <img src={menu} alt="Menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
