import React from 'react';
import './About.css';
import about_img from '../../assets/about.jpg';

const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfService = currentYear - 1992;

  return (
    <div className='about-section' id='about'>
      <h1 className='about-heading'>ABOUT US</h1>

      <div className='about-container'>
        <div className="about-left">
          <img src={about_img} alt="LAL Pharmacy" className='about-img' />
          <div className="experience-badge">
            <span>{yearsOfService}+</span> Years of <br /> Excellence
          </div>
        </div>

        <div className="about-right">
          <h2>Your Trusted Healthcare Partner in Welimada 🌿</h2>
          <p><span className='highlight'>LAL Pharmacy & Channeling Service</span> has been serving the community since <strong>1992</strong>, offering a wide range of healthcare products and services designed to care for your health and well-being.</p>
          <p>We provide everything from <strong>genuine medicines</strong> and <strong>medical equipment</strong> to <strong>doctor channeling services</strong> and <strong>special healthcare support</strong>, all under one roof.</p>
          <p>Our dedicated and professional team is always ready to serve you with care, compassion, and commitment.</p>

          <div className="opening-hours">
            <h3>🕒 Opening Hours</h3>
            <p>Open Daily: <span>7.00 AM - 9.00 PM</span></p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
