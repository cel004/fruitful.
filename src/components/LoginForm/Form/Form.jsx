import React, { useState } from 'react';
import styles from './Form.module.css';

function Form({ formData, handleInputChange, handleSubmit, buttonText, isFormValid }) {
  return (
    <header>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange} 
            placeholder="enter your email"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange} 
            placeholder="enter your password"
            required
          />
          <button type="submit" disabled={!isFormValid}>{buttonText}</button>
        </form>
      </div>
    </header>
  );
}

export default Form;
