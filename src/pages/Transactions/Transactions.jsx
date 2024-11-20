import styles from './Transactions.module.css'
import PageContainer from '../../components/Containers/PageContainer';
import TransactionCard from '../../components/TransactionContent/TransactionCard/TransactionCard';
import TransactionTotal from '../../components/TransactionContent/TransactionTotal/TransactionTotal';



function Transactions(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";
    return (
        <PageContainer>
            <TransactionTotal />
            <TransactionCard />
        </PageContainer>
        
    );
}

export default Transactions;