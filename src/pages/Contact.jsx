import { useState } from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineLocalPhone } from "react-icons/md";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email } = formData;

        if (!name) {
            alert("Name is required");
            return;
        }
        if (!email) {
            alert("Email is required");
            return;
        }
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            company: '',
            subject: '',
            message: ''
        });
    }

    return (
        <div>
            <Header />
            <section className='contact-section'>
                <div className="contact-container">
                    <div className="contact-header">
                        <span className="contact-badge">Contact us</span>
                        <h1 className="contact-main-title">Get in Touch with Our Team</h1>
                        <p className="contact-subtitle">
                            We're here to answer your questions, discuss your project, and help you find the best solutions for your construction needs.
                            Reach out to us, and let's start building something great together.
                        </p>
                    </div>

                    <div className="contact-content-wrapper">
                        <div className="contact-form-section">
                            <h2 className="form-title">Let's Talk About Your Project</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='Enter your name'
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company Name (option)</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        placeholder='Company Name'
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Enter your subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5"
                                        placeholder='Message'
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </div>

                        <div className="contact-info-section">
                            <div className="direct-contact">
                                <h2 className="info-title">Prefer a Direct Approach?</h2>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <MdOutlineLocalPhone className="contact-icon" />
                                        <p>0303-2243305 | 0340-6610887</p>
                                    </div>
                                    <div className="contact-item">
                                        <TfiEmail className="contact-icon" />
                                        <p>shmunawarseed@gmail.com</p>
                                    </div>

                                </div>
                            </div>

                            <div className="office-location">
                                <div className='map-container'>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27414.33406514266!2d73.4363648!3d30.808473599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1772166260613!5m2!1sen!2s"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0, borderRadius: '12px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Office Location">
                                    </iframe>
                                </div>
                                <div className="office-address">
                                    <h3>Visit Our Office</h3>
                                    <div className="address-item">
                                        <CiLocationOn className="address-icon" />
                                        <p>H# . 11, B.Street, Y, Block, Govt, Colony, Okara</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
