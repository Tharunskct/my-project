// RuralDevelopment.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './RuralDevelopment.css'; // Importing the CSS file for styling

function RuralDevelopment() {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <h1>Rural Development Concepts</h1>
        
        <section className="section">
          <h2>Economic Development</h2>
          <p>
            Economic development in rural areas focuses on creating job opportunities and promoting entrepreneurship. 
            This can be achieved through various means, such as supporting small and medium-sized enterprises (SMEs), 
            encouraging investment in local businesses, and providing training programs to enhance skills and employability.
          </p>
        </section>

        <section className="section">
          <h2>Infrastructure</h2>
          <p>
            Infrastructure development is crucial for the growth of rural areas. This includes improving transportation networks, 
            ensuring access to clean water and sanitation, enhancing communication facilities, and developing energy sources. 
            A robust infrastructure supports economic activities and improves the quality of life for rural residents.
          </p>
        </section>

        <section className="section">
          <h2>Education</h2>
          <p>
            Education is a key component of rural development. Providing access to quality education helps in reducing 
            poverty and promoting sustainable growth. Efforts include building schools, training teachers, and offering 
            scholarships to students. Additionally, vocational training and adult education programs can equip individuals 
            with skills necessary for employment.
          </p>
        </section>

        <section className="section">
          <h2>Health</h2>
          <p>
            Health services in rural areas need significant improvement to ensure the well-being of the population. 
            This involves establishing healthcare facilities, providing essential medical supplies, and ensuring the availability 
            of trained healthcare professionals. Health education and preventive measures are also important to combat common 
            diseases and promote healthy living.
          </p>
        </section>

        <section className="section">
          <h2>Agriculture</h2>
          <p>
            Agriculture is the backbone of rural economies. Promoting sustainable agricultural practices, providing access 
            to modern farming techniques, and ensuring fair prices for produce are essential for rural development. 
            Supporting farmers with subsidies, access to credit, and market linkages can enhance productivity and income.
          </p>
        </section>

        <section className="section">
          <h2>Sustainable Practices</h2>
          <p>
            Sustainable development in rural areas ensures that the needs of the present are met without compromising the 
            ability of future generations to meet their own needs. This includes the adoption of renewable energy sources, 
            conservation of natural resources, and promotion of eco-friendly practices. Community participation and 
            awareness programs play a vital role in fostering sustainability.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default RuralDevelopment;
