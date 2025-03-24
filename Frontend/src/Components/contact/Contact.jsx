import React from 'react';
import './Contact.css';
import msg_icon1 from '../../assets/iconmsg.png';
import msg_icon2 from '../../assets/iconcal.png';
import msg_icon3 from '../../assets/iconwht.png';
import msg_icon4 from '../../assets/iconmai.png';
import msg_icon5 from '../../assets/iconloc.png';
import msg_icon6 from '../../assets/iconlan.png';
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
                <div className="contact-col1">
                    <div className='contact4'>
                        <div className='box1'>
                                <img src={msg_icon2} alt="" />
                            <div className='numlist'>
                                <ul>
                                <li><a href="tel:+94702377797">070 2377797</a></li>
                                <li><a href="tel:+94772849513">077 2849513</a></li>
                                <li><a href="tel:+94707317319">070 7317319</a></li>
                                <li><a href="tel:+94777879339">077 7879339</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='box1'>
                                <img src={msg_icon6} alt="" />
                            <div className='numlist'>
                                <ul>
                                <li><a href="tel:+94572245472">057 2245472</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='box1'>
                                <img src={msg_icon3} alt="" />
                            <div className='whatlist'>
                                <ul>
                                <li><a href="https://wa.me/94777879339" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='box1'>
                                <img src={msg_icon4} alt="" />
                            <div className='maillist'>
                                <ul>
                                <li><a href="mailto:info@lalpharmacy.com">info@lalpharmacy.com</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='box1'>
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

                    {/* Google Map Embed */}
                    <div className="map-container">
                        <h3><img src={msg_icon5} alt="" /> No 08, Lal Pharmacy Welimada, Uva Province, 90200 Sri Lanka</h3>
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
                <div className="contact-col3">
                    <h3>Send Us a Message <img src={msg_icon1} alt="" /></h3>
                    <form onSubmit={onSubmit}>
                        
                        <input type="text" name="name" placeholder="Enter Your Name" required />

                        
                        <input type="tel" name="phone" placeholder="Enter Your Mobile" required />

                        
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
