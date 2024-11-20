import styles from './Homescreen.module.css'
import WelcomeHeader from '../../components/HomescreenContent/WelcomeHeader/WelcomeHeader';
import Piechart from '../../components/HomescreenContent/Piechart/Piechart';
import Goal from '../../components/HomescreenContent/Goal/Goal';
import PageContainer from '../../components/Containers/PageContainer';

function Homescreen(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";
    return (
        <PageContainer>
                <WelcomeHeader />
                <Piechart />
                <Goal />
        </PageContainer>
        
    );
}

export default Homescreen;