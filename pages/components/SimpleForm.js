import React, { useState } from "react";
import { app } from "@/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new document with a generated id to the "enquiries" collection
      await addDoc(collection(db, "enquiries"), {
        name: name,
        email: email,
        timestamp: new Date().toISOString(), // Add a timestamp for when the enquiry was submitted
      });

      console.log("Enquiry submitted successfully.");

      // Optionally, clear the form fields after submission
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "300px",
        margin: "auto",
      }}
    >
      <label style={{ display: "block", marginBottom: "5px" }}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
          }}
        />
      </label>

      <label style={{ display: "block", marginBottom: "10px" }}>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
          }}
        />
      </label>

      <button
        type="submit"
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
