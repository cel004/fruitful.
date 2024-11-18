import styles from './HomeScreen.module.css'
import WelcomeHeader from '../components/WelcomeHeader/WelcomeHeader';


function HomeScreen(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";
    return (
        <WelcomeHeader></WelcomeHeader>
    );
}

export default HomeScreen;