import styles from './Login.module.css'

function Login(){
    return(
        <header>
            <div className={styles.sodaImage}>
                <img src={melonSodaImage} alt="Pixel art of japanese melon cream soda"/> 
            </div>
            <div className={styles.title}>
                <p>Save-a-Sip</p>
                <p className={styles.slogan}>Small savings, sweet rewards<p/>
            </div>
            <p>font constant</p>
        </header>
    )
}

export default Login