import { Component, OnInit } from '@angular/core';
import "tw-elements";
import { Chart, initTE } from "tw-elements";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  ngOnInit() {
    /**
    * Initialize Chart.js Theme Elements
    */
    initTE({ Chart });

    /**
    * Bar Horizontal Chart Options
    * Defines the options configuration for a horizontal bar chart.
    */
    const optionsBarHorizontal = {
      options: {
        indexAxis: "y",
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      },
    };

    /**
     * Bar Horizontal Chart Data
     * Defines the data configuration for a horizontal bar chart.
     */
    const dataBarHorizontal = {
      type: "bar",
      data: {
        labels: [
          "Organic",
          "Referal",
          "Paid Search",
          "Email",
        ],
        datasets: [
          {
            data: [13, 11, 9, 7],
            backgroundColor: [
              '#5853D8',
              '#0676FF',
              '#EA7D20',
              '#E85242',
            ],
            barPercentage: 0.3,
            borderRadius: 10,
          },
        ],
      },
    };

    /**
     * Doughnut Chart Data
     * Defines the data configuration for a doughnut chart.
     */
    const dataDoughnut = {
      type: "doughnut",
      data: {
        labels: [
          "Search",
          "Direct",
          "Display",
          "Email",
          "Paid Search",
          "Referal"
        ],
        datasets: [
          {
            data: [40, 18, 15, 10, 3, 4],
            backgroundColor: [
              "#41EB99",
              "#EA7D20",
              "#0676FF",
              "#E85242",
              "#5853D8",
              "#0077FF"
            ],
          },
        ],
      },
    }
    /**
     * Doughnut Chart Options
     * Defines the options configuration for a doughnut chart.
     */
    const optionsDoughnut = {
      options: {
        borderWidth: 0,
        plugins: {
          legend: {
            position: "right",
            labels: {
              padding: 15,
              usePointStyle: true,
              pointStyle: "circle",
            },
          }
        }
      },
    }

    /**
     * Create a New Bar Chart
     * Initializes a new Chart.js instance for rendering a bar chart with provided data and options.
     */
    new Chart(
      document.getElementById("bar-chart-horizontal"),
      dataBarHorizontal,
      optionsBarHorizontal
    );
    /**
     * Create a New Doughnut Chart
     * Initializes a new Chart.js instance for rendering a bar chart with provided data and options.
     */
    new Chart(
      document.getElementById("bar-chart-doughnut"),
      dataDoughnut,
      optionsDoughnut
    );
  }
}
