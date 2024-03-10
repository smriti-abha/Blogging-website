// Feature.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/feature.module.css";
import { useCollapse } from "react-collapsed";
import { app } from "@/firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Updated Firestore imports
import { BLOGS_COLLECTION_PATH, TOPICS_SUBCOLLECTION_PATH } from "../firebasePath";

const db = getFirestore(app);

const Feature = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, BLOGS_COLLECTION_PATH/TOPICS_SUBCOLLECTION_PATH));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setArticles(data);
        console.log("MyData",data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const nextPage = () => {
    if (currentPage < Math.ceil(articles.length / itemsPerPage)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className={styles.feature_main_container}>
      <div className={styles.feature_card_container}>
        {articles.map((item, index) => (
          <div className={styles.feature_card} key={index}>
            <h1>{item.id || "Untitled"}</h1>
            <p>Description: {item.description}</p>
            <p>Extra Description: {item.extraDescription}</p>
            <img src={item.img} alt={item.title} />
            <p>Title: {item.title}</p>
            <p>Topic: {item.topic}</p>
            {/* Add other fields as needed */}
            <div className={styles.button_div}>
              <button
                {...getToggleProps({
                  onClick: () => setExpanded(prevExpanded => !prevExpanded),
                })}
              >
                {isExpanded ? "Collapse" : "Expand"}
              </button>
            </div>
            <section {...getCollapseProps()}>
              <p>{item.description}</p>
              <Link
                href={`/productlist/${item.id}/${encodeURIComponent((item.title || "").toLowerCase())}`}
              >
                <a>
                  <button>Read More....</button>
                </a>
              </Link>
            </section>
            {/* Conditional rendering for array */}
            {item.array && item.array.map((element, idx) => (
              <div className={styles.feature_card} key={idx}>
                {/* Render content for each element */}
                <h2>{element.title}</h2>
                <p>{element.description}</p>
                {/* Additional content based on your data structure */}
                {element.additionalContent && (
                  <div>
                    <p>Additional Content:</p>
                    <p>{element.additionalContent}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    
      <div className={styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: Math.ceil(articles.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(articles.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Feature;
