import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import "tw-elements";
import { Chart, initTE } from "tw-elements";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }

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
     * Create a New Chart
     * Initializes a new Chart.js instance for rendering a bar chart with provided data and options.
     */
    new Chart(
      document.getElementById("bar-chart-horizontal"),
      dataBarHorizontal,
      optionsBarHorizontal
    );
  }

  /**
  * Toggle Dark Mode
  * Changes the state of dark mode between enabled and disabled.
  */
  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  /**
 * Check if Dark Mode is Enabled
 * Checks whether dark mode is currently enabled.
 * @returns {boolean} true if dark mode is enabled, false if it's not.
 */
  isDarkMode(): boolean {
    return this.darkModeService.isDarkMode();
  }
}

