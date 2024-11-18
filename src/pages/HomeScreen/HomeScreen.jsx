import styles from './HomeScreen.module.css'
import WelcomeHeader from '../../components/WelcomeHeader/WelcomeHeader';
import Piechart from '../../components/Piechart/Piechart';
import Goal from '../../components/Goal/Goal';
import Navigation from '../../components/Navigation/Navigation';
import Create from '../../components/Create/Create';


function HomeScreen(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";
    return (
        <div className={styles.pageWrapper}>
            <main className={styles.mainContent}>
                <WelcomeHeader />
                <Piechart />
                <Goal />
            </main>
            <footer className={styles.footer}>
                <div className={styles.createButton}>
                    <Create />
                    </div>
                <Navigation />
            </footer>
        </div>
        
    );
}

export default HomeScreen;