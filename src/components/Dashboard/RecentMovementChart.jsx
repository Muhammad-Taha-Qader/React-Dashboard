// import React from 'react'
import { Line } from 'react-chartjs-2';

// import { Chart, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, registerables } from 'chart.js';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
// Chart.register(LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
Chart.register(...registerables); // Alternatively, register all the components if needed



const RecentMovementChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Visitors',
            data: [1200, 1900, 1700, 2200, 2300, 2900, 3200, 2800, 2600, 3100, 3300, 3700],
            fill: true,
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgba(59, 130, 246, 1)',
            tension: 0.4,
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-500 mb-4">Recent Movement</h3>
        <Line data={data} options={options} />
    </div>
  )
}

export default RecentMovementChart;