import { Component, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);
import SolidGauge from 'highcharts/modules/solid-gauge';
SolidGauge(Highcharts);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  title = 'dashboardTask';
  Highcharts=Highcharts;
  radialProgressChart: any;
  chartOptions={}

  constructor(){}
  ngOnInit() {
    // Open the sidenav on initialization
    this.sidenav.open();
    this.radialProgressChart = {
      chart: {
        type: 'solidgauge',
        marginTop: 50,
      },
      title: {
        text: 'Radial Progress Chart',
      },
      tooltip: {
        enabled: false,
      },
      pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: '#f8f8f8',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc',
        },
      },
      yAxis: {
        stops: [
          [0.1, '#e26064'], // Color of the progress
          [0.9, '#f8f8f8'], // Background color
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: -70,
        },
        labels: {
          y: 16,
        },
        min: 0,
        max: 100,
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true,
          },
        },
      },
      series: [
        {
          name: 'Progress',
          data: [75], // Set your progress value here
          dataLabels: {
            format:
              '<div style="text-align:center"><span style="font-size:25px;color:black">{y}%</span><br/>' +
              '<span style="font-size:12px;color:silver">Completion</span></div>',
          },
        },
      ],
    };
  }
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Active Daily Players',
      align:'left'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Weeks',
        data: [1, 2, 3, 6, 8,2,10]
      } as any
    ]
  });
//column chart
  columnChart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Major trophies',
      align:'left'
    },
    credits: {
      enabled: false
    },
     xAxis: {
        categories: ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester United']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Count trophies'
        },
        stackLabels: {
            enabled: true
        }
    },
    legend: {
        align: 'left',
        x: 70,
        verticalAlign: 'top',
        y: 70,
        floating: true,
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'BPL',
        data: [3, 5, 1, 13]
    }, {
        name: 'FA Cup',
        data: [14, 8, 8, 12]
    }, {
        name: 'CL',
        data: [0, 2, 6, 3]
    }]as any
  });

 // Donut chart
 donutChart = new Chart({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  } as any,
  title: {
    text: '',
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
      innerSize: '50%', // Create the donut shape
    },
  },
  series: [
    {
      name: 'Share',
      data: [
        { name: 'Tournaments', y: 61.41 },
        { name: 'Cash Games', y: 11.84 },
        { name: 'Leagues', y: 4.67 },
        { name: 'Other', y: 17.9 },
      ],
    },
  ] as any,
});


}



