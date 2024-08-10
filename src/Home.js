import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="image-text-container">
        <div className="image-side"></div>
        <div className="text-side">
          <h1>Welcome to Rural Development</h1>
          <p>
            Discover the beauty of rural life and explore how we are contributing 
            to sustainable growth in our communities. Join us in making a 
            difference by promoting eco-friendly practices, supporting local 
            farmers, and enhancing the quality of life in rural areas.
          </p>
          <Link to="/rural">
            <button className="cta-button">Learn More</button>
          </Link>
        </div>
      </div>

      {/* Mission and Vision Card Structure */}
      <div className="mission-vision-card-container">
        <div className="card mission-card">
          <div className="card-content">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower rural communities through innovative 
              solutions and sustainable practices. We aim to foster economic 
              growth, improve infrastructure, and enhance the overall well-being 
              of rural areas.
            </p>
          </div>
        </div>
        <div className="card vision-card">
          <div className="card-content">
            <h2>Our Vision</h2>
            <p>
              Our vision is to create a thriving rural landscape where people 
              have access to opportunities, resources, and a healthy environment 
              that supports their aspirations and livelihoods.
            </p>
          </div>
        </div>
      </div>

      <div className="features-container">
        <h2>Features of Our Rural Development System</h2>
        <div className="features-list">
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://www.rd.usda.gov/sites/default/files/styles/icon_large/public/icon-water.png?itok=LLcQY4DF" alt="Water & Wastewater Infrastructure" />
            </div>
            <h3>Water & Wastewater Infrastructure</h3>
            <p>
              Explore ways USDA RD can help rural communities obtain the technical 
              assistance and financing necessary to develop drinking water and 
              waste disposal systems.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://www.rd.usda.gov/sites/default/files/styles/icon_large/public/icon-energy.png?itok=MmeJT45D" alt="Energy" />
            </div>
            <h3>Energy</h3>
            <p>
              Our energy programs empower rural America to establish, maintain, 
              and evolve its energy resources for a cleaner, brighter, and more 
              sustainable future.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://www.pngmart.com/files/2/Internet-PNG-File.png" alt="High-speed Internet Access" />
            </div>
            <h3>High-speed Internet Access</h3>
            <p>
              Learn about how our programs provide funds to expand high-speed 
              internet access for rural people.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/9746/9746847.png" alt="Electricity" />
            </div>
            <h3>Electricity</h3>
            <p>
              USDA RD’s electric programs help fund electric infrastructure to 
              sustain rural economic well-being and improve quality of life.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://icon-library.com/images/education-icon-png/education-icon-png-7.jpg" alt="Education" />
            </div>
            <h3>Education</h3>
            <p>
              We support educational development in rural areas by providing 
              resources and funding for schools and educational programs, 
              ensuring access to quality education for all.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
