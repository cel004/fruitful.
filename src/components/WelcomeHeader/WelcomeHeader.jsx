import styles from './WelcomeHeader.module.css';
import { Person } from '../icons/iconPerson.jsx';
import { Link } from 'react-router-dom';

function WelcomeHeader(){
    return(
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.icon}><Link to="/personal"><Person /></Link></div>
                <div className={styles.welcome}><p>welcome, Mclovin</p></div>
                <div className={styles.quote}><p>"McLovin? What kind of a stupid name is that, Fogell?"</p></div>
            </div>
        </div>
    )
}

export default WelcomeHeader;