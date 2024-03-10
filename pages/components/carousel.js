import React, { useState } from 'react';
import styles from '../../styles/carousel.module.css';

const Carousel = ({ bloggingCategories }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(bloggingCategories.length / cardsPerPage);

  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const renderCategories = () => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return bloggingCategories.slice(startIndex, endIndex).map((category, index) => (
      <div key={index} className={styles.categorySlide}>
        <h2>{category.title}</h2>
        
        <img src={category.image} alt={category.title} height={180} width={180} />
        <h3>Read Articles</h3>
        <ul>
          {category.subcategories.map((subcategory, subIndex) => (
            <li key={subIndex}>
              <a href={subcategory.link} target="_blank" rel="noopener noreferrer">
                {subcategory.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <>
    <div className={styles.carousel_main_section}>
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={prevSlide}>
        Prev
      </button>
      <div className={styles.categorySlider}>
        {renderCategories()}
      </div>
      <button className={styles.nextButton} onClick={nextSlide}>
        Next
      </button>
    </div>
    
    </div>
   
      </>
  );
};

export default Carousel;
