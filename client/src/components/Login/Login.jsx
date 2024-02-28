import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../validations";
import styles from "./Login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    if (name === "email") {
      const error = validateEmail(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    } else if (name === "password") {
      const error = validatePassword(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate authentication (replace with actual authentication logic)
    if (
      userData.email === "user@gmail.com" &&
      userData.password === "user1234"
    ) {
      navigate("/about");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div>
            <h2 className={styles.formText}>
              Log in to find more about this page!
            </h2>
            <label htmlFor="email">
              <input
                className={styles.loginInput}
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="off"
              />
            </label>
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">
              <input
                className={styles.loginInput}
                type="password"
                name="password"
                id="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </label>
            {errors.password && (
              <p className={styles.errorText}>{errors.password}</p>
            )}
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
