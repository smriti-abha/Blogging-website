import React, { useState } from "react";
import { FaUserAlt, FaEnvelope, FaLock, FaAddressCard, FaPhone } from "react-icons/fa";
import styles from "../../styles/user.module.css";
import { app } from "@/firebase";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Updated import for Firestore
import { useRouter } from 'next/router';

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

  const [errorMessage, setErrorMessage] = useState("");
  const history = useRouter();

  const auth = getAuth(app);
  const firestore = getFirestore(app); // Get Firestore instance

  const createUser = async () => {
    const { email, password, phoneNumber, firstName, lastName, address } = formData;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore collection
      await addDoc(collection(firestore, 'users'), {
        email,
        phoneNumber,
        firstName,
        lastName,
        address,
      });

      console.log('User created successfully:', user);
      console.log('User data saved to Firestore');

      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (Object.keys(errors).length === 0) {
      try {
        await createUser();
        history.push("/user/login");
      } catch (error) {
        setErrorMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className={styles.container} style={{ marginTop: "3rem" }}>
      <h2 style={{ textAlign: "center", color: "#cf9903", paddingTop: "-2rem" }}>Register Your Account</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className={styles.whole_form}>
        <div className={styles.form_section}>
          <label htmlFor="firstName" className={styles.form_label}>
            <FaUserAlt className="me-2" />
            First Name
          </label>
          <input
            type="text"
            className={`form-control ${formErrors.firstName && "is-invalid"}`}
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && (
            <div className="invalid-feedback">{formErrors.firstName}</div>
          )}
        </div>

        {/* Repeat the above pattern for other form fields */}
        
        {/* Last Name */}
        <div className={styles.form_section}>
          <label htmlFor="lastName" className={styles.form_label}>
            <FaUserAlt className="me-2" />
            Last Name
          </label>
          <input
            type="text"
            className={`form-control ${formErrors.lastName && "is-invalid"}`}
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {formErrors.lastName && (
            <div className={styles.invalid_feedback}>{formErrors.lastName}</div>
          )}
        </div>

        {/* Address */}
        <div className={styles.form_section}>
          <label htmlFor="address" className={styles.form_label}>
            <FaAddressCard className="me-2" />
            Address
          </label>
          <input
            type="text"
            className={`form-control ${formErrors.address && "is-invalid"}`}
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          />
          {formErrors.address && (
            <div className={styles.invalid_feedback}>{formErrors.address}</div>
          )}
        </div>

        {/* Phone Number */}
        <div className={styles.form_section}>
          <label htmlFor="phoneNumber" className={styles.form_label}>
            <FaPhone className="me-2" />
            Phone Number
          </label>
          <input
            type="tel"
            className={`form-control ${formErrors.phoneNumber && "is-invalid"}`}
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {formErrors.phoneNumber && (
            <div className={styles.invalid_feedback}>
              {formErrors.phoneNumber}
            </div>
          )}
        </div>

        {/* Email */}
        <div className={styles.form_section}>
          <label htmlFor="email" className={styles.form_label}>
            <FaEnvelope className="me-2" />
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${formErrors.email && "is-invalid"}`}
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "95%",
              height: "2.3rem",
              textAlign: "center",
              borderRadius: "2rem",
              borderRight: "transparent",
            }}
          />
          {formErrors.email && (
            <div className={styles.invalid_feedback}>{formErrors.email}</div>
          )}
        </div>

        {/* Password */}
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

        {/* Retype Password */}
        <div className={styles.form_section}>
          <label htmlFor="retypePassword" className={styles.form_label}>
            <FaLock className="me-2" />
            Retype Password
          </label>
          <input
            type="password"
            className={`form-control ${formErrors.retypePassword && "is-invalid"}`}
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

        {/* Additional message */}
        <p style={{fontSize:"1rem", fontFamily:'cursive', lineHeight:"2rem"}}>
          To verify your number, we will send you a text message with a
          temporary code. Message and data rates may apply.
        </p>

        {/* Submit Button */}
        <button type="submit" className={styles.btn_primary}
        style={{height:"3rem",fontSize:"1.2rem",padding:"0.5rem",marginTop:"2rem",backgroundColor:"#bd7e07",border:"transparent",borderRadius:"3rem",borderBottom:"3px solid #a54e2af2", borderLeft:"3px solid #a54e2af2",marginBottom:"2rem"}}>
          Verify mobile number
        </button>
        <hr style={{height:"0.5rem",background:"linear-gradient(to right,grey,#c7beb9)",borderRadius:"2rem"}}/>
        <br/>
       
        {/* Links for login and business account */}
        <p style={{marginTop:"1.2rem",lineHeight:"2rem"}}>Already have an account? <span style={{color:"blue"}}>Sign in</span></p>
        <p>Buying for work?<span style={{color:"blue"}}>Create a free business account</span> </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
