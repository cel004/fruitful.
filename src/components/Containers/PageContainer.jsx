import PageWrapper from '../../components/Containers/PageWrapper/PageWrapper';
import MainContent from '../../components/Containers/MainContent/MainContent';
import Navigation from '../../components/Navigation/Navigation';
import PersonIcon from '../../components/PersonIcon/PersonIcon';



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