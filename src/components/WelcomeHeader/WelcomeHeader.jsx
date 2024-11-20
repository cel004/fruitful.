import styles from './WelcomeHeader.module.css';


function WelcomeHeader(){
    return(
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.welcome}><p>welcome, Mclovin</p></div>
                <div className={styles.quote}><p>"McLovin? What kind of a stupid name is that, Fogell?"</p></div>
            </div>
        </div>
    )
}

export default WelcomeHeader;