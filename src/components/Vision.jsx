import React, { useState } from 'react'

const Vision = () => {

    const [visionForm, setVisionForm] = useState({
        fname: "",
        email: "",
        phone: "",
        projectdetail: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setVisionForm({
            ...visionForm,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { fname, email, phone, projectdetail } = visionForm;

        if (!fname || !email || !phone || !projectdetail) {
            alert("All fields are required");
        }

        console.log("Form Submitted:", visionForm);

        // Reset form
        setVisionForm({
            fname: "",
            email: "",
            phone: "",
            projectdetail: ""
        });
    };

    return (
        <section className='visionSection' id='vision'>
            <div className="vision-main-content">
                <h2>
                    Building Your Vision with Precision and Excellence
                </h2>
                <p>
                    At M.B.M Construction, we are committed to turning your construction dreams into reality. With decades of experience in the industry, we deliver high-quality residential and commercial construction services that are both functional and aesthetically pleasing. From planning to execution, our team ensures that every project is completed on time, within budget, and to the highest standards of safety and quality.
                    <br /><br />
                    Our expert craftsmen, architects, and engineers work together to design and build spaces that fit your needs. Whether it's a custom home, a new office building, or a renovation project, we pride ourselves on delivering results that exceed expectations and provide lasting value.
                </p>
            </div>
            <div className="vision-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="vision-from-group">
                        <label htmlFor="fName">Full Name</label>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder='Enter your full name'
                            value={visionForm.fname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="vision-from-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='your.email@example.com'
                            value={visionForm.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="vision-from-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder='Enter your phone number'
                            value={visionForm.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="vision-from-group">
                        <label htmlFor="projectdetail">Project Detail</label>
                        <textarea
                            id="projectdetail"
                            name="projectdetail"
                            placeholder='Describe your project (e.g., type of construction, project size, timeline)'
                            value={visionForm.projectdetail}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Get a Quote"
                    />
                </form>
            </div>
        </section>

    )
}

export default Vision
