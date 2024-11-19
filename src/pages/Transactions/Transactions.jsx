import styles from './Transactions.module.css';
import Navigation from '../../components/Navigation/Navigation';

function Transactions() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.navigationContainer}>
                <Navigation />
                </div>
        </div>
        
    );
}

export default Transactions;
