import React from 'react';
import Card from './Card';
import './ComplaintForm.css';
import NavBar from './Navbar';  

const products = [
  { id: 1, image: 'https://static.vecteezy.com/system/resources/previews/023/628/339/non_2x/metropolis-many-tall-buildings-every-building-has-a-different-height-ai-generated-free-png.png',  title: 'Infrastructure', link: '#' },
  { id: 2, image: 'https://freepngimg.com/download/health/67606-green-healthcare-medicine-health-care-icon.png',  title: 'Health Care', link: '#' },
  { id: 3, image: 'https://www.freeiconspng.com/uploads/education-png-0.png',  title: 'Education', link: '#' },
  { id: 4, image: 'http://www.freepngimg.com/download/environment/10-2-environment-picture.png',  title: 'Environment',link: '#' },
  { id: 5, image: 'https://pngteam.com/images/agriculture-png-560x500_31414683_transparent_2022d2.png.png', title: 'Agriculture',link: '#' },
  { id: 6, image: 'https://cdn1.iconfinder.com/data/icons/social-issues-and-critical-problems/370/problem-008-1024.png', title: 'Social issues', link: '#' },
  { id: 6, image: 'https://www.pngarts.com/files/3/Computer-Technology-PNG-Download-Image.png', title: 'Technology', link: '#' },
  { id: 6, image: 'https://cdn3.iconfinder.com/data/icons/smoothfill-action/30/action_028-detail-more-info-others-512.png', title: 'Others', link: '#' }
];

const ComplaintForm = () => {
  return (
    <section id="products" className="product-section">
      <div className="container">
        <NavBar />
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
              <Card image={product.image} title={product.title} link={product.link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplaintForm;
