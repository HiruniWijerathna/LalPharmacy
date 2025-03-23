import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
           
        </div>
        <div className="about-right">
            <h3>About Us</h3>
            <h2>Genuine medicines, Health products, and channeling services — All in one place.</h2>
            <p>LAL Pharmacy & Channeling Service has proudly served the Welimada community for over 32 years, becoming a trusted name in healthcare and wellness.</p>
            <p>As one of the leading businesses in the area, we are committed to meeting the pharmaceutical and healthcare needs of our people.</p>
            <p>With strong business expertise and a friendly approach, our team ensures every customer receives the best care and service. </p>
            <p>We work closely with our staff to create a welcoming environment where your health is our top priority.</p>
        </div>
      
    </div>
  )
}

export default About
