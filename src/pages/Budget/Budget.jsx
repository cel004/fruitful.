import styles from './Budget.module.css';


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
