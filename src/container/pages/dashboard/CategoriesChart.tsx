import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

function CategoriesChart() {
  useEffect(() => {
    const options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'donut',
        width: '100%',
      },
      labels: ['Segment A', 'Segment B', 'Segment C', 'Segment D', 'Segment E'], // Custom label titles
      dataLabels: {
        enabled: true, 
        style: {
          fontSize: '10px', // Reduce font size of percentage text
        },
      },
      legend: {
        position: 'bottom',
        fontSize: '12px', // Reduce legend label font size
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
              fontSize: '12px', // Adjust for mobile views
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(document.querySelector('#chartCategories'), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className='admin-card-title'>Top 5 Categories</h2>
      <div id="chartCategories" />
    </div>
  );
}

export default CategoriesChart;
