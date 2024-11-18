import styles from './Navigation.module.css';
import { Card } from '../icons/iconCard.jsx';
import { Home } from '../icons/iconHome.jsx';
import { Piechart } from '../icons/iconPiechart.jsx';

function Navigation() {
    return (
        <div className={styles.navigationContainer}>
            <div className={styles.navigationIcon}><Card /></div>
            <div className={styles.navigationIcon}><Home /></div>
            <div className={styles.navigationIcon}><Piechart /></div>
        </div>
    );
}

export default Navigation;
