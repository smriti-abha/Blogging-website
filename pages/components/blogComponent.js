// BlogComponent.js
import React, { useState } from "react";
import { app } from "@/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import styles from "../../styles/blogs.module.css";
import { TOPICS_SUBCOLLECTION_PATH, BLOGS_COLLECTION_PATH} from "../firebasePath";

const db = getFirestore(app);

const BlogComponent = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [formData, setFormData] = useState({
    img: "",
    title: "",
    description: "",
    extraDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = { ...formData };

    try {
      const collectionPath = `${BLOGS_COLLECTION_PATH}/${TOPICS_SUBCOLLECTION_PATH}/${selectedTopic}`;
      console.log("Collection path:", collectionPath);
      await addDoc(collection(db, collectionPath), blogData);
      console.log("Blog data saved successfully!");
      setFormData({
        img: "",
        title: "",
        description: "",
        extraDescription: "",
      });
    } catch (error) {
      console.error("Error saving blog data: ", error);
    }
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <div className={styles.blog_container}>
      <h1>Let's start your blog!</h1>
      <div className={styles.topic_section}>
        <h2>Pick a Topic first</h2>
        <select value={selectedTopic} onChange={handleTopicChange}>
          <option value="">Select a Topic</option>
          <option value="game">Games</option>
          <option value="aging">Aging</option>
          <option value="travel">Travel</option>
          <option value="money_and_finance">Money and Finance</option>
          <option value="life">Life</option>
          <option value="spirituality">Spirituality</option>
          <option value="fashion_and_beauty">Fashion and Beauty</option>
          <option value="sports_and_fitness">Sports and Fitness</option>
          <option value="relationships">Relationships</option>
          <option value="food_and_cooking">Food and Cooking</option>
          <option value="dye_and_crafts">Dye and Crafts</option>
          <option value="entertainment">Entertainment and Pop-Culture</option>
          <option value="finance">Finance</option>
          <option value="social_issues_and_advocacy">Social Issues and Advocacy</option>
        </select>
      </div>
      {selectedTopic && (
        <form onSubmit={handleSubmit} className={styles.blog_form}>
          <label>
            Image URL:
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Extra Description:
            <textarea
              name="extraDescription"
              value={formData.extraDescription}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default BlogComponent;
