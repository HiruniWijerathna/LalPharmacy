import React from 'react'
import './Programs.css'
import program_1 from '../../assets/image1.jpg'
import program_2 from '../../assets/image2.jpg'
import program_3 from '../../assets/image3.jpg'
import icon_1 from '../../assets/icon1.png'
import icon_2 from '../../assets/icon2.png'
import icon_3 from '../../assets/icon3.png'

const Programs = () => {
  return (
    
    <div className='programs' id=''>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <p>Medicin</p>
            <img src={icon_1} alt="" />
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <p>Medicin</p>
            <img src={icon_2} alt="" />
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <p>Medicin</p>
            <img src={icon_3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Programs
