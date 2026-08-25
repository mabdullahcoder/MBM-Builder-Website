import { Footer } from "../components/Footer"
import Header from "../components/Header"
import CountUp from "../components/CountUp"
import '../App.css'

export const About = () => {

    return (
        <>
            <Header />
            <section className="aboutSection">
                <div className="about-hero">
                    <h2 className="about-main-title">
                        Building the Future with <span>Excellence</span>
                    </h2>
                </div>

                <div className="about-story-container">
                    <div className="about-story-content">
                        <div className="story-badge">Established in 1988</div>
                        <h2 className="story-title">Our Story</h2>
                        <p className="story-description">
                            Since our foundation in 1988, MBM Construction has been at the forefront of the construction industry, delivering high-quality residential, commercial, and industrial projects. We combine craftsmanship with innovative solutions to create spaces that last a lifetime.
                        </p>
                        <ul className="story-features">
                            <li className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span>Committed to sustainable and eco-friendly building practices</span>
                            </li>
                            <li className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span>Providing innovative design and construction solutions</span>
                            </li>
                            <li className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span>Ensuring on-time delivery and cost-effective solutions</span>
                            </li>
                        </ul>
                        <p className="story-closing">
                            Our journey has been defined by a relentless pursuit of excellence. Every project we undertake reflects our dedication to quality and our passion for building something meaningful for future generations.
                        </p>
                    </div>
                    <div className="about-story-image">
                        <img src="./assets/about.jpg" alt="MBM Construction team at work" />
                        <div className="image-overlay"></div>
                    </div>
                </div>

                <div className="achievement-section">
                    <div className="achievement-content">
                        <h2 className="achievement-title">Our Achievements</h2>
                        <p className="achievement-description">
                            Over the years, we've worked relentlessly to achieve excellence and make an impact in the construction industry. Here are some of our proud milestones.
                        </p>
                    </div>
                    <div className="achievement-point">
                        <div className="achievement-group">
                            <CountUp end={350} className="achievement-number" />
                            <p className="achievement-label">Happy Clients</p>
                        </div>
                        <div className="achievement-group">
                            <CountUp end={600} className="achievement-number" />
                            <p className="achievement-label">Completed Projects</p>
                        </div>
                        <div className="achievement-group">
                            <CountUp end={2000} className="achievement-number" />
                            <p className="achievement-label">Support Hours</p>
                        </div>
                        <div className="achievement-group">
                            <CountUp end={30} className="achievement-number" />
                            <p className="achievement-label">Expert Team</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
