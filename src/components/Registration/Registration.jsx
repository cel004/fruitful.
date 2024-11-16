import styles from './Registration.module.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Registration() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const isFormValid =
      formData.username.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.password.trim() !== '';

      const handleSubmit = async (e) => {
        e.preventDefault();

    // send POST request to mysql server to create a new user
    try {
        const response = await fetch('http://localhost:5000/api/register', {  // mysql API endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          // if registration successful = handle success (e.g., redirect to login or home)
          console.log('Registration successful:', result);
        } else {
          // handle errors, such as email already existing
          console.error('Registration failed:', result.message);
        }
      } catch (error) {
        console.error('Error submitting registration:', error);
      }
    };
  
    return (
      <>
        <p className={styles.title}>Register</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="enter your username"
              required/>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="enter your email"
              required/>
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="enter password"
              required/>
          </div>
          <button type="submit" disabled={!isFormValid}>register</button>
        </form>
        <p className={styles.login}><Link to="/login">log into account</Link></p>
      </>
    );
  };

export default Registration;