import React, { useState } from 'react';
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
  // State to store which program's details are visible
  const [activeProgram, setActiveProgram] = useState(null);

  // Function to handle program click and toggle visibility
  const handleProgramClick = (programId) => {
    setActiveProgram(activeProgram === programId ? null : programId); // Toggle details visibility
  };

  return (
    <div className='programs' id='programs'>
      <div className="program-box" onClick={() => handleProgramClick(1)}>
        <div className="program">
          <img src={program_1} alt="" />
          <div className="caption">
            <p></p>
            <img src={icon_1} alt="" />
          </div>
          <h3>All Medicines</h3>
        </div>
        {activeProgram === 1 && (
          <div className="program-details">
            <p>More details about All Medicines...</p>
          </div>
        )}
      </div>

      <div className="program-box" onClick={() => handleProgramClick(2)}>
        <div className="program">
          <img src={program_6} alt="" />
          <div className="caption">
            <p></p>
            <img src={icon_1} alt="" />
          </div>
          <h3>Medical Equipment</h3>
        </div>
        {activeProgram === 2 && (
          <div className="program-details">
            <p>More details about Medical Equipment...</p>
          </div>
        )}
      </div>

      <div className="program-box" onClick={() => handleProgramClick(3)}>
        <div className="program">
          <img src={program_2} alt="" />
          <div className="caption">
            <p></p>
            <img src={icon_2} alt="" />
          </div>
          <h3>Doctor Channeling Services</h3>
        </div>
        {activeProgram === 3 && (
          <div className="program-details">
            <p>More details about Doctor Channeling Services...</p>
          </div>
        )}
      </div>

      <div className="program-box" onClick={() => handleProgramClick(4)}>
        <div className="program">
          <img src={program_3} alt="" />
          <div className="caption">
            <p></p>
            <img src={icon_3} alt="" />
          </div>
          <h3>Baby, Beauty Care & Grocery Items</h3>
        </div>
        {activeProgram === 4 && (
          <div className="program-details">
            <p>More details about Baby, Beauty Care & Grocery Items...</p>
          </div>
        )}
      </div>

      <div className="program-box" onClick={() => handleProgramClick(5)}>
        <div className="program">
          <img src={program_4} alt="" />
          <div className="caption">
            <p></p>
            <img src={icon_1} alt="" />
          </div>
          <h3>Medical Tests</h3>
        </div>
        {activeProgram === 5 && (
          <div className="program-details">
            <p>More details about Medical Tests...</p>
          </div>
        )}
      </div>

      <div className="program-box" onClick={() => handleProgramClick(6)}>
        <div className="program">
          <img src={program_5} alt="" />
          <div className="caption">
            <p></p>
            <img src={icon_1} alt="" />
          </div>
          <h3>Special Services</h3>
        </div>
        {activeProgram === 6 && (
          <div className="program-details">
            <p>More details about Special Services...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;
