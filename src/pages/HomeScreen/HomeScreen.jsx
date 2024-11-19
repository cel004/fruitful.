import styles from './HomeScreen.module.css'
import WelcomeHeader from '../../components/WelcomeHeader/WelcomeHeader';
import Piechart from '../../components/Piechart/Piechart';
import Goal from '../../components/Goal/Goal';
import Navigation from '../../components/Navigation/Navigation';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import MainContent from '../../components/MainContent/MainContent';


function HomeScreen(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";
    return (
        <PageWrapper>
            <MainContent>
                <WelcomeHeader />
                <Piechart />
                <Goal />
            </MainContent>
                <Navigation />
        </PageWrapper>
        
    );
}

export default HomeScreen;