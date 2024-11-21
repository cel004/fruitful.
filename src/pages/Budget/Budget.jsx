import styles from './Budget.module.css';
import PageContainer from '../../components/Containers/PageContainer';
import BudgetPiechart from '../../components/BudgetContent/BudgetPiechart/BudgetPiechart';
import BudgetInput from '../../components/BudgetContent/BudgetInput/BudgetInput';
import React, { useState } from 'react';

function Budget() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";
    
    const [income, setIncome] = useState(0);
    const [savings, setSavings] = useState(0);
    const [variableExpenses, setVariableExpenses] = useState(0);
    const [fixedExpenses, setFixedExpenses] = useState(0);

    // calculate percentage of each category based on income
    const calculatePercentage = (amount) => {
        if (income > 0) {
            return (amount / income) * 100;
        }
        return 0;
    };

    const chartData = {
        savings: calculatePercentage(savings),
        variableExpenses: calculatePercentage(variableExpenses),
        fixedExpenses: calculatePercentage(fixedExpenses),
    };

    return (
        <PageContainer>
            <BudgetPiechart data={chartData} />
            <BudgetInput 
                setIncome={setIncome} 
                setSavings={setSavings} 
                setVariableExpenses={setVariableExpenses} 
                setFixedExpenses={setFixedExpenses}/>
        </PageContainer>
    );
}

export default Budget;
