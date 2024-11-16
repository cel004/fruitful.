import styles from './Login.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitButton = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { name, email });
    };

    return (
        <header>
            <div className={styles.titleContainer}>
                <p>fruitful.</p>
            </div>
            <p className ={styles.slogan}>small savings, sweet rewards</p>
            <div className={styles.formContainer}>
                <form onSubmit={submitButton}>
                    <label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="enter your email"
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="enter your password"
                            required
                        />
                    </label>
                    <button type="submit">log in</button>
                </form>
                <p className={styles.createAccount}><Link to="/Registration">create an account</Link></p>
            </div>
        </header>
    );
}

export default Login;