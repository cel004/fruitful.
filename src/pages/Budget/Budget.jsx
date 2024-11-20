import styles from './Budget.module.css'
import PageContainer from '../../components/Containers/PageContainer';
import BudgetPiechart from '../../components/BudgetContent/BudgetPiechart/BudgetPiechart';
import BudgetInput from '../../components/BudgetContent/BudgetInput/BudgetInput';



function Budget(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";
    return (
        <PageContainer>
            <BudgetPiechart />
            <BudgetInput />
        </PageContainer>
        
    );
}

export default Budget;

