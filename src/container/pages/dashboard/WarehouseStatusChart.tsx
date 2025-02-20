import React from 'react'
import ApexCharts from 'apexcharts';
import { useEffect } from 'react';
import PageIndex from '../../PageIndex';

function WarehouseStatusChart() {
    useEffect(() => {
        const options = {
          series: [75], // Percentage value
          chart: {
            type: 'radialBar',
            height: 450
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: '#e7e7e7',
                strokeWidth: '97%',
              },
              dataLabels: {
                name: { show: true },
                value: {
                  offsetY: 20,
                  fontSize: '25px',
                //   fontWeight: 'Bold',
                  fontFamily: 'Poppins-Bold',
                  formatter: function (val: any) {
                    return val + '%';
                  },
                },
              },
            },
          },
          fill: {
            colors: ['#3498db'],
          },
        };
    
        const chart = new ApexCharts(document.querySelector('#chart'), options);
        chart.render();
    
        return () => chart.destroy();
      }, []);
  return (
    <>
    <div className="wareh-chart-main">
      <div id="chart"></div>
      <div className="info">
        <span className='common-text'><img src={PageIndex.Png.downRightArrow} alt="downRightArrow" className='down-right-arrow' /> Incoming: 15</span>
        <span className='common-text'><img src={PageIndex.Png.downRightArrow} alt="downRightArrow" className='down-right-arrow up-right-arrow' /> Outgoing: 28</span>
      </div>
      <p className='inv-title'>Inventory Snapshot</p>
      <div className="inventory">
        <div className='jus-between'><p className='common-text'>Inventory:</p> <p className='common-text'><strong>1,200 items</strong></p></div>
        <div className='jus-between'><p className='common-text'>Low stock alert:</p> <p className='common-text'><strong>items ABC - 20 units</strong></p></div>
        
    
      </div>
    </div>
    </>
  )
}

export default WarehouseStatusChart