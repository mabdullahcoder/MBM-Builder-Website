import { Link } from 'react-router-dom'
import '../App.css'

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section footer-about">
                        <h3 className="footer-logo">M.B.M Construction</h3>
                        <p className="footer-tagline">Building your dreams with quality and trust</p>
                    </div>

                    <div className="footer-section footer-contact">
                        <h4 className="footer-heading">Contact Us</h4>
                        <div className="footer-info">
                            <p>54 / 2-L Okara, Near The Pioneer High School</p>
                            <p>0328 0571754</p>
                            <p>mabdullah13954@gmail.com</p>
                        </div>
                    </div>

                    <div className="footer-section footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 MBM Construction Business. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
