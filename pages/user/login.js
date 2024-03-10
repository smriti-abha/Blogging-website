import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import styles from "../../styles/user.module.css";
import { useRouter } from 'next/router'; 
import { signInWithEmailAndPassword, getAuth ,signInWithPopup} from "firebase/auth";
import { app } from "@/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); 
  
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("User info:", user);
      // Redirect to home page after successful login
      router.push("/");
    } catch (error) {
      console.error("Google login error:", error);
    }
  }
  
  const loginUser = async () => {
    const { email, password } = formData;
    try {
      // Sign in user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Redirect to home page after successful login
      router.push("/");
    } catch (error) {
      // Handle error
      if (error.code === "auth/user-not-found") {
        setErrorMessage("No user found with this email address. Please register first.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password. Please try again.");
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = "This field is required";
      }
    });

    setFormErrors(errors);

    // If there are no errors, attempt to log in
    if (Object.keys(errors).length === 0) {
      try {
        await loginUser();
      } catch (error) {
        console.error("Login error:", error);
        setErrorMessage("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className={styles.container} style={{ marginTop: "3rem" }}>
      <h2 style={{ textAlign: "center", color: "#cf9903", paddingTop: "-2rem" }}>
        Login Your Account
      </h2>
      <form onSubmit={handleSubmit} className={styles.whole_form}>
        <div className={styles.form_section}>
          <label htmlFor="email" className={styles.form_label}>
            Email Address
          </label>
          <input
            type="email"
            className={`form-control ${formErrors.email && "is-invalid"}`}
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <div className="invalid-feedback">{formErrors.email}</div>
          )}
        </div>

        <div className={styles.form_section}>
          <label htmlFor="password" className={styles.form_label}>
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

        {errorMessage && <p className="text-danger">{errorMessage}</p>}

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
          Continue
        </button>
        <button
          type="button"
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
          onClick={loginWithGoogle}
        >
          Login With Google
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
          Dont have an account?{" "}
          <span style={{ color: "blue" }}>Register Your Account</span>
        </p>
        <p>
          Buying for work?
          <span style={{ color: "blue" }}>Create a free business account</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
