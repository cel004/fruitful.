import React from 'react';
import styles from './Piechart.module.css';


function Piechart(){
    return(
        <div className={styles.piechartContainer}>
            <div className={styles.piechart}></div>
        </div>
    )
}

export default Piechart;