import React from 'react';
import "./About.css";
import ContactForm from '../components/ContactForm';
import RoboticsGroupImage from '../photos/RoboticsGroup.jpg'; 

const AboutUs = () => {
  return (
    <div>
      <header class = "title">
        <h1>About Us</h1>
      </header>

      <div class = "row">

          <div className="column">
            {/* <div style={{ textAlign: 'center' }}> */}
              <img className='image'
                src={RoboticsGroupImage}
                alt="Robotics Group"
                // style={{width: '80%', maxWidth: '100%', maxHeight: '400px', margin: '0 auto'}}
              />
          </div>
         
          <div className="column">
            <h2>Our Company</h2>
            <p>
              Welcome to [Your Company Name], where [brief description of your company].
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
              [Continue with relevant details about your company].
            </p>
          
            <h2>Our Team</h2>
            <p>
              Meet the talented individuals who make [Your Company Name] successful.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
              [Introduce key team members and their roles].
            </p>
          </div>

      </div>

      <div class = "divider"> 
      </div>
      
          <div className="contact-form">
            <h2 >Contact Us</h2>
            <p>
              Have any questions or inquiries? Reach out to us using the form below.
            </p>
          
            <ContactForm/>
          </div>
    </div>
  );
};

export default AboutUs;