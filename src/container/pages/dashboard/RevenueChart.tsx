import React from "react";
import ApexCharts from "apexcharts";

function RevenueChart() {
  React.useEffect(() => {
    // Check if chart is already rendered
    const chartElement = document.querySelector("#revenuChart");
    if (!chartElement.innerHTML) {
      var options = {
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
          {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
          },
        ],
        chart: {
          type: "bar",
          height: 300,
          toolbar: {
            show: false, // Disable toolbar
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
            borderRadius: 5,
            borderRadiusApplication: "end",
          },
        },
        dataLabels: {
          enabled: false,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
          position: "top", // This places labels at the top of bars
          textAnchor: "middle", // Aligns text in the middle
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            show: false, // Disable the y-axis title
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val; // Removes "thousands"
            },
          },
        },
      };

      var chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  }, []);

  return (
    <div>
      <h2 className="admin-card-title">Financial Overview</h2>
      <div id="revenuChart"></div>
    </div>
  );
}

export default RevenueChart;
