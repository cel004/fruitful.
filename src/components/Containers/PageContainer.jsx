import PageWrapper from '../../components/Containers/PageWrapper/PageWrapper';
import MainContent from '../../components/Containers/MainContent/MainContent';
import Navigation from '../Footer/Navigation/Navigation';
import PersonIcon from './PersonIcon/PersonIcon';



function PageContainer( {children} ){
    return (
        <PageWrapper>
            <PersonIcon />
            <MainContent>
                {children}
                </MainContent>
            <Navigation />
        </PageWrapper>
        
    );
}

export default PageContainer;