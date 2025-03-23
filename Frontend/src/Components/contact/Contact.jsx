import React from 'react';
import './Contact.css';
import msg_icon1 from '../../assets/iconmsg.png';
import msg_icon2 from '../../assets/iconcal.png';
import msg_icon3 from '../../assets/iconwht.png';
import msg_icon4 from '../../assets/iconmai.png';
import msg_icon5 from '../../assets/iconloc.png';
import fb_icon from '../../assets/fb.png';

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
        <div className="contact">
            <h2>Get in Touch With Us</h2>

            <div className="contact2">
                {/* Left Column: Contact Info */}
                <div className="contact-col">
                    <ul>
                        <li><img src={msg_icon2} alt="" /><a href="tel:+947658623566">076 58623566</a></li>
                        <li><img src={msg_icon2} alt="" /><a href="tel:+947658623567">076 58623567</a></li>
                        <li><img src={msg_icon2} alt="" /><a href="tel:+947658623568">076 58623568</a></li>
                        <li><img src={msg_icon3} alt="" /><a href="https://wa.me/947658623566" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></li>
                        <li><img src={msg_icon4} alt="" /><a href="mailto:info@lalpharmacy.com">info@lalpharmacy.com</a></li>
                        <li className="fb-link">
                            <img src={fb_icon} alt="Facebook" />
                            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                                Follow us on Facebook
                            </a>
                        </li>
                    </ul>

                    {/* Google Map Embed */}
                    <div className="map-container">
                        <h3><img src={msg_icon5} alt="" /> Location</h3>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.377704505256!2d-74.00594108459482!3d40.71277597933042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMzYuNyJX!5e0!3m2!1sen!2sus!4v1645634334746!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="contact-col">
                    <h3>Send Us a Message <img src={msg_icon1} alt="" /></h3>
                    <form onSubmit={onSubmit}>
                        <label>Your Name</label>
                        <input type="text" name="name" placeholder="Enter Your Name" required />

                        <label>Phone Number</label>
                        <input type="tel" name="phone" placeholder="Enter Your Mobile" required />

                        <label>Write your message here</label>
                        <textarea name="message" rows="10" placeholder="Enter Your Message" required></textarea>

                        <button type="submit" className="btn dark-btn">Submit</button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
