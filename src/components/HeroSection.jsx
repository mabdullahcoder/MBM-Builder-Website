import '../App.css'

const HeroSection = () => {

    const handleClick = () => {
        const vision = document.getElementById("vision");
        vision.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <section className="heroSection">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <span className="hero-eyebrow animate-fade-in">Building Since Day One</span>
                <h1 className="hero-title animate-fade-in">
                    Welcome to <span>M.B.M</span><br />
                    <span>Builders</span> Associates
                </h1>
                <p className="hero-description animate-fade-in-delay">
                    Building the infrastructure that shapes communities with over 20 years of quality, safety-first construction.
                </p>
                <div className="hero-actions animate-fade-in-delay-2">
                    <button className="hero-btn" onClick={handleClick}>
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
