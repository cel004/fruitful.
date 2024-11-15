import styles from './Login.module.css'
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('Enter your email');
    const [password, setPassword] = useState('Enter your password');

    const submitButton = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { name, email });
    };

    return (
        <header>
            <div className={styles.titleContainer}>
                <p>Save-a-Sip</p>
            </div>
            <p className ={styles.slogan}>Small savings, sweet rewards</p>
            <div className={styles.formContainer}>
                <form onSubmit={submitButton}>
                    <label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Log in</button>
                </form>
            </div>
        </header>
    );
}

export default Login