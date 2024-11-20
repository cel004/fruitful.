import React from 'react';
import { Doughnut } from "react-chartjs-2";

function BudgetPiechart() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundImage = "linear-gradient(#d82d66b6 10%, #d82d663a 50%, #ffffff 80%)";

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '17rem' }}>
            <Doughnut
                data={{
                    labels: ["Savings", "Expenses", "Fixed expenses"],
                    datasets: [
                        {
                            data: [30, 40, 30],
                            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
                            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC850"],
                            borderColor: ["#F7464A", "#46BFBD", "#FDB45C"],
                            borderWidth: 2,
                        },
                    ],
                }}
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
