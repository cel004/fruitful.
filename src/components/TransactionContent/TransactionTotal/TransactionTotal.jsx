import styles from './TransactionTotal.module.css';

function TransactionTotal(){
    return(
        <div className={styles.totalContainer}>
            <div className={styles.totalCard}>
                <div className={styles.infoContainer}>
                    <p className={styles.month}>january's transaction</p>
                    <p className={styles.totalCost}>-$15</p>
                </div>
            </div>
        </div>
    );
}

export default TransactionTotal;