import styles from './TransactionCard.module.css';

function TransactionCard(){
    return(
        <div className={styles.transactionContainer}>
            <div className={styles.transactionCard}>
                <div className={styles.transactionInformation}>
                    <p className={styles.date}>january 01, 2024</p>
                    <p className={styles.transactionTitle}>mango sticky rice</p>
                    <p className={styles.cost}>-$15</p>
                </div>
            </div>
        </div>
    );
}

export default TransactionCard;