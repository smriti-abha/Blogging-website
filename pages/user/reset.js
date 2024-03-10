// components/RegistrationForm.js
import React, { useState } from "react";
import { IoIosCreate } from "react-icons/io";
import {
  FaUserAlt,
  FaEnvelope,
  FaLock,
  FaAddressCard,
  FaPhone,
} from "react-icons/fa";
import styles from "../../styles/user.module.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    retypePassword: "",
    phoneNumber: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    retypePassword: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = "This field is required";
      }
    });

    if (formData.password !== formData.retypePassword) {
      errors.retypePassword = "Passwords do not match";
    }

    setFormErrors(errors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(errors).length === 0) {
      // Perform form submission logic
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className={styles.container} style={{ marginTop: "3rem" }}>
      <h2
        style={{ textAlign: "center", color: "#cf9903", paddingTop: "-2rem" }}
      >
        Login Your Account
      </h2>
      <form onSubmit={handleSubmit} className={styles.whole_form}>
        <div className={styles.form_section}>
          <label htmlFor="firstName" className={styles.form_label}>
            <FaUserAlt className="me-2" />
            User Name
          </label>
          <input
            type="text"
            className={`form-control ${formErrors.firstName && "is-invalid"}`}
            id="firstName"
            name="firstName"
            placeholder="Enter your full name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && (
            <div className="invalid-feedback">{formErrors.firstName}</div>
          )}
        </div>

        <div className={styles.form_section}>
          <label htmlFor="password" className={styles.form_label}>
            <FaLock className="me-2" />
            Password
          </label>
          <input
            type="password"
            className={`form-control ${formErrors.password && "is-invalid"}`}
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <div className={styles.invalid_feedback}>{formErrors.password}</div>
          )}
        </div>
        <div className={styles.form_section}>
          <label htmlFor="retypePassword" className={styles.form_label}>
            <FaLock className="me-2" />
            Retype Password
          </label>
          <input
            type="password"
            className={`form-control ${
              formErrors.retypePassword && "is-invalid"
            }`}
            id="retypePassword"
            name="retypePassword"
            placeholder="Retype your password"
            value={formData.retypePassword}
            onChange={handleChange}
          />
          {formErrors.retypePassword && (
            <div className={styles.invalid_feedback}>
              {formErrors.retypePassword}
            </div>
          )}
        </div>
        <p
          style={{
            fontSize: "1rem",
            fontFamily: "cursive",
            lineHeight: "2rem",
          }}
        >
          By continuing, you agree to Amazons Conditions of Use and Privacy
          Notice.{" "}
        </p>

        <button
          type="submit"
          className={styles.btn_primary}
          style={{
            height: "3rem",
            fontSize: "1.2rem",
            padding: "0.5rem",
            marginTop: "2rem",
            backgroundColor: "#bd7e07",
            border: "transparent",
            borderRadius: "3rem",
            borderBottom: "3px solid #a54e2af2",
            borderLeft: "3px solid #a54e2af2",
            marginBottom: "2rem",
            width: "9rem",
          }}
        >
          continue
        </button>
        <hr
          style={{
            height: "0.5rem",
            background: "linear-gradient(to right,grey,#c7beb9)",
            borderRadius: "2rem",
          }}
        />
        <br />

        <p style={{ marginTop: "0.5rem", lineHeight: "3rem" }}>
          Already have an account?{" "}
          <span style={{ color: "blue" }}>Register Your Account</span>
        </p>
        <p>
          Buying for work?
          <span style={{ color: "blue" }}>Sign in</span>{" "}
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
