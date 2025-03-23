import React from 'react';
import './Programs.css';
import program_1 from '../../assets/image1.jpg';
import program_2 from '../../assets/image2.jpg';
import program_3 from '../../assets/image3.jpg';
import program_4 from '../../assets/image5.jpg';
import program_5 from '../../assets/image6.jpg';
import program_6 from '../../assets/image7.jpg';
import icon_1 from '../../assets/icon1.png';
import icon_2 from '../../assets/icon2.png';
import icon_3 from '../../assets/icon3.png';

const Programs = () => {
  return (
    <div className='programs' id='programs'>
      <div className="program-box">
        <div className="program">
          <img src={program_1} alt="" />
          <div className="caption">
            <p>We provide a wide range of high-quality medicines including prescribed and over-the-counter drugs. Our pharmacy ensures the availability of branded and generic medicines at affordable prices, ensuring your health and wellness are always taken care of.</p>
          </div>
          <h3>All Medicines</h3>
        </div>
      </div>

      <div className="program-box">
        <div className="program">
          <img src={program_6} alt="" />
          <div className="caption">
            <p>Explore our collection of essential medical equipment including blood pressure monitors, glucose meters, nebulizers, thermometers, and more. Our products help you manage your health conveniently from the comfort of your home.</p>
          </div>
          <h3>Medical Equipment </h3>
        </div>
      </div>

      <div className="program-box">
        <div className="program">
          <img src={program_2} alt="" />
          <div className="caption">
            <p>Book appointments easily with experienced doctors and specialists through our doctor channeling service. We connect you to the right medical professionals for consultations, treatments, and expert healthcare advice.
            </p>
          </div>
          <h3>Doctor Channeling Services</h3>
        </div>
      </div>

      <div className="program-box">
        <div className="program">
          <img src={program_3} alt="" />
          <div className="caption">
            <p>Discover a wide range of baby care products, skincare, haircare, and beauty essentials. We also offer daily grocery items, providing you with a one-stop shop for all your family’s needs, including nutrition and personal care.</p>
          </div>
          <h3>Baby, Beauty Care & Grocery Items</h3>
        </div>
      </div>

      <div className="program-box">
        <div className="program">
          <img src={program_4} alt="" />
          <div className="caption">
            <p>We offer convenient medical testing services including blood tests, urine tests, cholesterol checks, and more. Our reliable diagnostic services help in early detection and effective treatment of health conditions.</p>
          </div>
          <h3>Medical Tests</h3>
        </div>
      </div>

      <div className="program-box">
        <div className="program">
          <img src={program_5} alt="" />
          <div className="caption">
            <p>Our special services include home delivery of medicines, emergency support, patient counseling, and customized healthcare packages. We strive to provide personalized care and support for your health and wellbeing.
          </p>
          </div>
          <h3>Special Services</h3>
        </div>
      </div>

   
    </div>
  );
};

export default Programs;
