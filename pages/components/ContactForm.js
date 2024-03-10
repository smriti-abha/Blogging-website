import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '@/firebase';

const db = getFirestore(app);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    images: [],
    videos: [],
    summary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, videos: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add a new document with a generated id to the "contacts" collection
      const docRef = await addDoc(collection(db, 'travel'), formData);
      console.log('Document written with ID: ', docRef.id);
      alert('Form data submitted successfully!');
      setFormData({
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        images: [],
        videos: [],
        summary: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="name" style={{ marginRight: '10px' }}>Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="address" style={{ marginRight: '10px' }}>Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="phoneNumber" style={{ marginRight: '10px' }}>Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email" style={{ marginRight: '10px' }}>Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="images" style={{ marginRight: '10px' }}>Upload Images:</label>
        <input type="file" id="images" name="images" accept="image/*" multiple onChange={handleImageUpload} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="videos" style={{ marginRight: '10px' }}>Upload Videos:</label>
        <input type="file" id="videos" name="videos" accept="video/*" multiple onChange={handleVideoUpload} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="summary" style={{ marginRight: '10px' }}>Summary of Traveling:</label>
        <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange}></textarea>
      </div>
      <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
    </form>
  );
};

export default ContactForm;
