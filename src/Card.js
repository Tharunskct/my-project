import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';  // Ensure you have the necessary CSS

const Card = ({ image, title, link }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to="/cus" className="signin">Raise</Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
