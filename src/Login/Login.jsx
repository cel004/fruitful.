import styles from './Login.module.css'
import melonSodaImage from '../assets/melon-cream-soda.png'

function Login(){

    return(
        <header>
            <div className={styles.sodaImage}>
                <img src={melonSodaImage} alt="Pixel art of japanese melon cream soda"/> 
            </div>
        </header>
    )
}

export default Login