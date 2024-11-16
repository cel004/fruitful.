import styles from './Registration.module.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };



      const handleSubmit = async (e) => {
        e.preventDefault();

    // send POST request to mysql server to create a new user
    try {
        const response = await fetch('/api/register', {  // mysql API endpoint
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
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="confirm password"
              required/>
          </div>
          <button type="submit">register</button>
        </form>
        <p className={styles.logIn}><Link to="/login">log into account</Link></p>
      </>
    );
  };

export default Registration;