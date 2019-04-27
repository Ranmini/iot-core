import { Component, OnInit } from '@angular/core';
import {  DataPipeService } from '../data-pipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public temp: number = this.data.realTimetemp();
  public humi: number = this.data.realTimeHumi();
  public bright: number = this.data.realtimeBright();


  public lineBigDashboardChartType;
  public gradientStroke;
  public chartColor;
  public canvas: any;
  public ctx;
  public gradientFill;
  public lineBigDashboardChartData: Array<any>;
  public lineBigDashboardChartOptions: any;
  public lineBigDashboardChartLabels: Array<any>;
  public lineBigDashboardChartColors: Array<any>;

  public gradientChartOptionsConfiguration: any;
  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;

  public lineChartType;
  public lineChartData: Array<any> = this.data.tempData();
  public lineChartOptions: any;
  public lineChartLabels: Array<any> = this.data.tempLabels();
  public lineChartColors: Array<any>;

  public lineChartType1;
  public lineChartData1: Array<any> = this.data.tempDataWeek();
  public lineChartOptions1: any;
  public lineChartLabels1: Array<any> = this.data.templabelsWeek();
  public lineChartColors1: Array<any>;

  public lineChartWithNumbersAndGridType;
  public lineChartWithNumbersAndGridData: Array<any> = this.data.humiData();
  public lineChartWithNumbersAndGridOptions: any;
  public lineChartWithNumbersAndGridLabels: Array<any> = this.data.humiLabels();
  public lineChartWithNumbersAndGridColors: Array<any>;

  public lineChartWithNumbersAndGridType1;
  public lineChartWithNumbersAndGridData1: Array<any> = this.data.humiDataWeek();
  public lineChartWithNumbersAndGridOptions1: any;
  public lineChartWithNumbersAndGridLabels1: Array<any> = this.data.humiLabelsWeek();
  public lineChartWithNumbersAndGridColors1: Array<any>;

  public lineChartGradientsNumbersType;
  public lineChartGradientsNumbersData: Array<any> = this.data.brightData();
  public lineChartGradientsNumbersOptions: any;
  public lineChartGradientsNumbersLabels: Array<any> = this.data.brightLabels();
  public lineChartGradientsNumbersColors: Array<any>;

  public lineChartGradientsNumbersType1;
  public lineChartGradientsNumbersData1: Array<any> = this.data.brightDataWeek();
  public lineChartGradientsNumbersOptions1: any;
  public lineChartGradientsNumbersLabels1: Array<any> = this.data.brightLabelsWeek();
  public lineChartGradientsNumbersColors1: Array<any>;

  public date: any;
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  public hexToRGB(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
     const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }
  constructor(private data: DataPipeService) { }
  ngOnInit() {
    this.date = new Date();
    this.chartColor = '#FFFFFF';
    this.canvas = document.getElementById('bigDashboardChart');
    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');

    this.lineBigDashboardChartData = [
        {
          label: 'Data',
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,

          borderWidth: 2,
          data: [50, 150, 100, 190] // power assumption
        }
      ];
      this.lineBigDashboardChartColors = [
       {
         backgroundColor: this.gradientFill,
         borderColor: this.chartColor,
         pointBorderColor: this.chartColor,
         pointBackgroundColor: '#2c2c2c',
         pointHoverBackgroundColor: '#2c2c2c',
         pointHoverBorderColor: this.chartColor,
       }
     ];
    this.lineBigDashboardChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.lineBigDashboardChartOptions = {

          layout: {
              padding: {
                  left: 20,
                  right: 20,
                  top: 0,
                  bottom: 0
              }
          },
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: '#fff',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
          },
          legend: {
              position: 'bottom',
              fillStyle: '#FFF',
              display: false
          },
          scales: {
              yAxes: [{
                  ticks: {
                      fontColor: 'rgba(255,255,255,0.4)',
                      fontStyle: 'bold',
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      padding: 10
                  },
                  gridLines: {
                      drawTicks: true,
                      drawBorder: false,
                      display: true,
                      color: 'rgba(255,255,255,0.1)',
                      zeroLineColor: 'transparent'
                  }

              }],
              xAxes: [{
                  gridLines: {
                      zeroLineColor: 'transparent',
                      display: false,

                  },
                  ticks: {
                      padding: 10,
                      fontColor: 'rgba(255,255,255,0.4)',
                      fontStyle: 'bold'
                  }
              }]
          }
    };

    this.lineBigDashboardChartType = 'line';


    this.gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: {
            zeroLineColor: 'transparent',
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.canvas = document.getElementById('lineChartExample');
    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');
      this.lineChartColors = [
       {
         borderColor: '#f96332',
         pointBorderColor: '#FFF',
         pointBackgroundColor: '#f96332',
         backgroundColor: this.gradientFill
       }
     ];
    this.lineChartOptions = this.gradientChartOptionsConfiguration;
    this.lineChartType = 'line';

    this.canvas = document.getElementById('lineChartExample1');
    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');
    this.lineChartColors1 = [
      {
        borderColor: '#f96332',
        pointBorderColor: '#FFF',
        pointBackgroundColor: '#f96332',
        backgroundColor: this.gradientFill
      }
    ];
    this.lineChartOptions1 = this.gradientChartOptionsConfiguration;
    this.lineChartType1 = 'line';



    // -------------------------------------------------------------------

    this.canvas = document.getElementById('lineChartExampleWithNumbersAndGrid');
    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#18ce0f');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));

      this.lineChartWithNumbersAndGridColors = [
       {
         borderColor: '#18ce0f',
         pointBorderColor: '#FFF',
         pointBackgroundColor: '#18ce0f',
         backgroundColor: this.gradientFill
       }
     ];
    this.lineChartWithNumbersAndGridOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;

    this.lineChartWithNumbersAndGridType = 'line';


    this.canvas = document.getElementById('lineChartExampleWithNumbersAndGrid1');
    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#18ce0f');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));

    this.lineChartWithNumbersAndGridColors1 = [
      {
        borderColor: '#18ce0f',
        pointBorderColor: '#FFF',
        pointBackgroundColor: '#18ce0f',
        backgroundColor: this.gradientFill
      }
    ];
    this.lineChartWithNumbersAndGridOptions1 = this.gradientChartOptionsConfigurationWithNumbersAndGrid;

    this.lineChartWithNumbersAndGridType1 = 'line';

  // ------------------------------------------------------------------------------------------------------



    this.canvas = document.getElementById('barChartSimpleGradientsNumbers');
    this.ctx = this.canvas.getContext('2d');

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));

    this.lineChartGradientsNumbersColors = [
     {
       backgroundColor: this.gradientFill,
       borderColor: '#2CA8FF',
       pointBorderColor: '#FFF',
       pointBackgroundColor: '#2CA8FF',
     }
   ];
    this.lineChartGradientsNumbersOptions = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          bodySpacing: 4,
          mode: 'nearest',
          intersect: 0,
          position: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        responsive: 1,
        scales: {
          yAxes: [{
            gridLines: {
              zeroLineColor: 'transparent',
              drawBorder: false
            }
          }],
          xAxes: [{
            display: 0,
            ticks: {
              display: false
            },
            gridLines: {
              zeroLineColor: 'transparent',
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 15,
            bottom: 15
          }
        }
      },
    this.lineChartGradientsNumbersType = 'bar';


    this.canvas = document.getElementById('barChartSimpleGradientsNumbers1');
    this.ctx = this.canvas.getContext('2d');

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));

    this.lineChartGradientsNumbersColors1 = [
      {
        backgroundColor: this.gradientFill,
        borderColor: '#2CA8FF',
        pointBorderColor: '#FFF',
        pointBackgroundColor: '#2CA8FF',
      }
    ];
    this.lineChartGradientsNumbersOptions1 = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          gridLines: {
            zeroLineColor: 'transparent',
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    },
      this.lineChartGradientsNumbersType1 = 'bar';
  }
}
