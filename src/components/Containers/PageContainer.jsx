import PageWrapper from '../../components/Containers/PageWrapper/PageWrapper';
import MainContent from '../../components/Containers/MainContent/MainContent';
import Navigation from '../../components/Navigation/Navigation';


function PageContainer( {children} ){
    return (
        <PageWrapper>
            <MainContent>
                {children}
                </MainContent>
            <Navigation />
        </PageWrapper>
        
    );
}

export default PageContainer;