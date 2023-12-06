import React from 'react';
import "./About.css";
import ContactForm from '../components/ContactForm';
import RoboticsGroupImage from '../photos/RoboticsGroup.jpg'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header>
        <h1>About Us</h1>
      </header>
      <div style={{ textAlign: 'center' }}>
        <img
          src={RoboticsGroupImage}
          alt="Robotics Group"
          style={{width: '80%', maxWidth: '100%', maxHeight: '400px', margin: '0 auto'}}
        />
      </div>
      <section className="company-info">
        <h2>Our Company</h2>
        <p>
          Welcome to [Your Company Name], where [brief description of your company].
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          [Continue with relevant details about your company].
        </p>
      </section>
      <section className="team-info">
        <h2>Our Team</h2>
        <p>
          Meet the talented individuals who make [Your Company Name] successful.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          [Introduce key team members and their roles].
        </p>
      </section>
      <section className="contact-form">
        <h2>Contact Us</h2>
        <p>
          Have any questions or inquiries? Reach out to us using the form below.
        </p>
       
        <ContactForm/>
      </section>
    </div>
  );
};

export default AboutUs;