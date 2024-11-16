import styles from './Login.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form.jsx'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit  = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { email });
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
