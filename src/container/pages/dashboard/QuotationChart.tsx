import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

function QuotationChart() {
      useEffect(() => {
        const options = {
          series: [44, 55, 41], // Adjusted to 3 segments
          chart: {
            type: 'donut',
            width: '400px',
          },
          labels: ['Segment A', 'Segment B', 'Segment C'], // Adjusted to 3 labels
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
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    label: 'Total',
                    fontSize: '18px',
                    fontWeight: 600,
                    formatter: function () {
                      return 690; // The total value, you can sum your series dynamically if needed
                    },
                  },
                },
              },
            },
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
    
        const chart = new ApexCharts(document.querySelector('#quotationChart'), options);
        chart.render();
    
        return () => {
          chart.destroy();
        };
      }, []);
    
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div id="quotationChart" />
  </div>
  )
}

export default QuotationChart