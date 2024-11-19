import styles from './Budget.module.css';
import Navigation from '../../components/Navigation/Navigation';

function Budget() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.navigationContainer}>
                <Navigation />
                </div>
        </div>
    );
}

export default Budget;
