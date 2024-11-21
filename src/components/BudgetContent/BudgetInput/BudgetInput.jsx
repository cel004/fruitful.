import React, { useState } from 'react';
import styles from './BudgetInput.module.css';


function BudgetInput( { income, savings, variableExpenses, fixedExpenses,
                    setIncome, setSavings, setVariableExpenses, setFixedExpenses } ) {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";
    
    return (
        <div className={styles.BudgetInput}>
            <label className={styles.inputContainer}>
                <label htmlFor="income">monthly income</label>
                    <input className={styles.inputField}
                    id="income"
                    type="number"
                    value={income}
                    placeholder="enter your total income"
                    onChange={(e) => setIncome(Number(e.target.value))}/>
                    <p className={styles.description}>let’s figure out how to budget your income
                        wisely—just enter the amount you earn each month.</p>

                <label htmlFor="savings">monthly savings</label>
                    <input className={styles.inputField}
                    id="savings"
                    type="number"
                    value={savings}
                    placeholder="enter your total savings"
                    onChange={(e) => setSavings(Number(e.target.value))}/>
                    <p className={styles.description}>set a monthly savings target to 
                        ensure you’re on track for your financial goals.</p>

                <label htmlFor="variableExpenses">monthly variable expenses</label>
                    <input className={styles.inputField}
                    id="variableExpenses"
                    type="number"
                    value={variableExpenses}
                    placeholder="enter your variable expenses"
                    onChange={(e) => setVariableExpenses(Number(e.target.value))}/>
                    <p className={styles.description}>enter the amount you’re setting aside for fun spending, 
                        (eg.: dining out, entertainment, personal treats & splurges).</p>

                <label htmlFor="fixedExpenses">monthly fixed expenses</label>
                    <input className={styles.inputField}
                    id="fixedExpenses"
                    type="number"
                    value={fixedExpenses}
                    placeholder="enter your fixed expenses"
                    onChange={(e) => setFixedExpenses(Number(e.target.value))}/>
                    <p className={styles.description}>enter your recurring, fixed costs
                        (eg.: rent, utilities, subscriptions).</p>
            </label>
        </div>
        
    );
}

export default BudgetInput;
