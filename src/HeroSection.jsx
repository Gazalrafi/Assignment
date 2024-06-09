import React from 'react';

import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1>Buy Fresh And Organic Grocery Food</h1>
        <p>Discount up to 20%</p>
        <p>Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum. Placerat consequat lorem.</p>
        <button>SHOP NOW</button>
        <div className="stats">
          <div>35k+ <span>Users</span></div>
          <div>18k+ <span>Products</span></div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://media.istockphoto.com/id/1055015208/photo/plate-of-grilled-chicken-with-vegetables-on-wite-background-top-view.jpg?s=612x612&w=0&k=20&c=HxlWLIyqDQAwWzNzNQ2FmxEUVRHg1EuxiTpTYqhvf9U=" alt="Healthy food" />
      </div>
    </section>
  );
};

export default HeroSection;