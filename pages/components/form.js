import React, { useState } from 'react';
import { app } from '/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formStyle = {
    width: '315px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    paddingTop: '2rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = getFirestore(app);
      const subscribeRef = collection(db, 'subscription_users');

      await addDoc(subscribeRef, {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString()
      });

      alert("Subscription done successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error:", err);
      alert("Error:", err);
    }
  };

  return (
    <form style={formStyle}>
      <label>
        Name:
        <input type="text" name="name" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Email:
        <input type="email" name="email" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        Message:
        <textarea name="message" style={inputStyle} value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>

      <button type="submit" style={buttonStyle} onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
