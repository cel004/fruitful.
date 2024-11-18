import styles from './Piechart.module.css';


function Piechart(){
    return(
        <div className={styles.pieChartContainer}>
            <div className={styles.pieChart}></div>
        </div>
    )
}

export default Piechart;