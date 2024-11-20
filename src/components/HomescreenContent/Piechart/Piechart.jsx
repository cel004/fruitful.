import React from 'react';
import styles from './Piechart.module.css';


function Piechart(){
    return(
        <div className={styles.piechartContainer}>
            <div className={styles.piechart}></div>
            <p className={styles.budget}>remaining budget for january: $5.00</p>
        </div>
    )
}

export default Piechart;