import React from 'react'
import './Footer.css'
import fb_icon from '../../assets/fb.png';

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2025 LAL Pharmacy - All Rights Reserved</p>
        <div className='box5'>
         <img src={fb_icon} alt="Facebook" />
            <div className='fblist'>
             <ul>
              <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                   Follow us on Facebook</a>
              </li>
             </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
