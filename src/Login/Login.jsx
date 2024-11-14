import styles from './Login.module.css'
import melonSodaImage from '../assets/melon-cream-soda.png'

function Login(){

    return(
        <header>
            <div className={styles.sodaImage}>
                <img src={melonSodaImage} alt="Pixel art of japanese melon cream soda"/> 
            </div>
            <div className={styles.title}>
                <p>Save-a-Sip</p>
            </div>
            <p>font constant</p>
        </header>
    )
}

export default Login