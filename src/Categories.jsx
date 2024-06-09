import React, { useEffect, useState } from 'react';
import './Categories.css';
import ProductCard from './ProductCard';

const categories = [
    'Beef',
    'Chicken',
    'Dessert',
    'Lamb',
    'Pasta',
    'Seafood',
    'Vegetarian',
    'Breakfast',
    'Goat'
];
const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryData, setCategoryData] = useState([]);
    const [allCategories, setAllCategories] = useState([]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    
    const fetchCategoryData = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await response.json();
            console.log({data})
            setAllCategories(data.categories);
            
            if (selectedCategory) {
                const filteredData = data.categories.filter(item => item.strCategory === selectedCategory);
                setCategoryData(filteredData);
            }
            else {
                setCategoryData(data.categories); // Show all categories if none is selected
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(()=>{
      fetchCategoryData()
    }, [selectedCategory])
    console.log(selectedCategory,"selection")
  return (
    <section className="categories">
      <h2>Top Category Of Organic Food</h2>
      <div className="category-buttons">
      {categories.map((category, index) => (
                    <button key={index} onClick={() => handleCategoryClick(category)}>
                        {category}
                    </button>
        ))}
      </div>
      <div className='category-item-container'>
      {!selectedCategory && categoryData.map((item, index) => (
               <div key={index} className="category-item">
                        <ProductCard key={index} product={item} />
                    </div>
               
        ))}
         
      </div>
      <div className="category-item-selected">
      {selectedCategory && categoryData.map((item, index) => (
               <div key={index} >
                        <ProductCard key={index} product={item} />
                    </div>
               
        ))}
      </div>
      <div>
     
      </div>
    </section>
  );
};

export default Categories;