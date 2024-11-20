import styles from './BudgetInput.module.css'
import React from 'react';

function BudgetInput(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";
    return (
        <div className={styles.inputContainer}>
            <input className={styles.inputField}
                type="text"
                placeholder="enter your total income"/>
            <input className={styles.inputField}
                type="text"
                placeholder="enter your total savings"/>
            <input className={styles.inputField}
                type="text"
                placeholder="enter your total variable expenses"/>
            <input className={styles.inputField}
                type="text"
                placeholder="enter your total fixed expenses"/>
        </div>
    );
}

export default BudgetInput;