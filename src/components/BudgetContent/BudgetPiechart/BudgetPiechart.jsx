import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BudgetPiechart( {data} ) {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";

    const isEmptyData = !data.savings && !data.variableExpenses && !data.fixedExpenses;

    const chartData = isEmptyData
    ? {
          labels: ["No Data"],
          datasets: [
              {
                  data: [0], // fallback for no data
                  backgroundColor: ["#CCCCCC"], // gray color for no data
                  hoverBackgroundColor: ["#AAAAAA"],
                  borderColor: ["#CCCCCC"],
              },
          ],
      }:{
        labels: ["Savings", "Variable Expenses", "Fixed Expenses"],
        datasets: [
            {
                data: [data.savings, data.variableExpenses, data.fixedExpenses],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC850"],
                borderColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            },
        ],
    };

    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '17rem' }}>
        <Doughnut data= { chartData}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%', 
            plugins: {
                legend: {
                    display: true, 
                    position: 'bottom', 
                    labels: {
                        boxWidth: 10, 
                        padding: 10, 
                    },
                },
            },
        }}
        />
        </div>
    );
}

export default BudgetPiechart;
