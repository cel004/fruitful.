import styles from './HomeScreen.module.css'
import WelcomeHeader from '../components/WelcomeHeader/WelcomeHeader';
import Piechart from '../components/Piechart/Piechart';


function HomeScreen(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";
    return (
        <div className={styles.homeContainer}>
            <WelcomeHeader></WelcomeHeader>
            <Piechart></Piechart>
        </div>
        
    );
}

export default HomeScreen;