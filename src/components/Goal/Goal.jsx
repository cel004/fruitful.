import styles from './Goal.module.css';

function Goal(){
    return(
        <div className={styles.goalContainer}>
            <div className={styles.goalCard}>
                <div className={styles.goalInformation}>
                    <p className={styles.goalTitle}>vacation money stash</p>
                    <p className={styles.amount}>$50/$100</p>
                    <p className={styles.date}>complete by summer 2025</p>
                    <p className={styles.remaining}>$50 left</p>
                </div>
            </div>
        </div>
    );
}

export default Goal;