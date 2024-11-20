import styles from './Login.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../Form/Form.jsx'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // hook for navigation to redirect

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit  = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok && data.status === 'success') {
                console.log('Login successful:', data);
                navigate('/homescreen'); // redirects to home page after successful login
            } else {
                console.error('Login failed:', data.message);
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred. Please try again.');
        }
    };

    // validation for enabling/disabling login button
    const isFormValid = email.trim() !== '' && password.trim() !== '';

    return (
        <div className={styles.loginContainer}>
            <div className={styles.titleContainer}>
                <p>fruitful.</p>
                </div>
                <p className={styles.slogan}>small savings, sweet rewards</p>
                <Form
                formData={{email, password}}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                buttonText="login"
                isFormValid={isFormValid}
                />
                <p className={styles.createAccount}><Link to="/register">create an account</Link></p>
                </div>
    );
}

export default Login;
