import styles from './Navigation.module.css';
import { Card } from '../icons/iconCard.jsx';
import { Home } from '../icons/iconHome.jsx';
import { Piechart } from '../icons/iconPiechart.jsx';

import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
    return (
        <div className={styles.navigationContainer}>
            <div className={styles.navigationIcon}><Link to="/transactions"><Card /></Link></div>
            <div className={styles.navigationIcon}><Link to="/homescreen"><Home /></Link></div>
            <div className={styles.navigationIcon}><Link to="/budget"><Piechart /></Link></div>
        </div>
    );
}

export default Navigation;
