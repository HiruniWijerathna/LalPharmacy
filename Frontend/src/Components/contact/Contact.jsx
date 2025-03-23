import React from 'react'
import './Contact.css'
import msg_icon1 from '../../assets/iconmsg.png'
import msg_icon2 from '../../assets/iconcal.png'
import msg_icon3 from '../../assets/iconwht.png'
import msg_icon4 from '../../assets/iconmai.png'
import msg_icon5 from '../../assets/iconloc.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ed01cd93-2fc9-4931-950e-c16df6a3f7e1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3> Send Us a Massage<img src={msg_icon1} alt=''/></h3>

        <ul>
            <li><img src={msg_icon2} alt="" />076 58623566</li>
            <li><img src={msg_icon2} alt="" />076 58623566</li>
            <li><img src={msg_icon2} alt="" />076 58623566</li>
            <li><img src={msg_icon3} alt="" />076 58623566</li>
            <li><img src={msg_icon4} alt="" />076 58623566</li>
            <li><img src={msg_icon5} alt="" />076 58623566</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter Your Name' required/>

            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter Your Mobile' required/>

            <label>Write your massages here</label>
            <textarea name="message" id=""  rows="10" placeholder='Enter Your Message' required></textarea>

            <button type='submit' className='btn dark-btn'>Submit </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
