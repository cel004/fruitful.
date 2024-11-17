import styles from './Registration.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form.jsx'

function Registration() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // sends POST request to MySQL server to create new user
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // registration successful - handle success (e.g., redirect to login or home)
        console.log('Registration successful:', result);
      } else {
        console.error('Registration failed:', result.message);
      }
    } catch (error) {
      console.error('Error submitting registration:', error);
    }
  };

  return (
    <div className={styles.registrationContainer}>
      <p className={styles.title}>Register</p>
        <div onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.slogan}>create your account to start saving</p>
        <Form
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          buttonText="register"
          isFormValid={isFormValid}
        />
        </div>
        <p className={styles.login}><Link to="/login">login here</Link></p>
    </div>
  );
}

export default Registration;
