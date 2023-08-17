import React from 'react';
import logo from '../../../assets/logo.jpg';
import styles from './Category.module.css';

function CategoryCard() {
  return (
    <div className={`card ${styles['category-card']}`} style={{ width: '10rem' }}>
      <img src={logo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">Fashion</h5>
        <p className="card-text text-center text-muted">2331</p>
      </div>
    </div>
  );
}

export default CategoryCard;