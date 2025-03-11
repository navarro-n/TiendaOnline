import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-line-3',
  imports: [BaseChartDirective],
  templateUrl: './graphic-line-3.component.html',
  styleUrl: './graphic-line-3.component.scss'
})
export class GraphicLine3Component implements OnInit {
  ngOnInit(): void {
    this.setChartData()
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true, //Línea obligatoria
    maintainAspectRatio: false, //proporción del gráfico
    plugins: {
      legend: { //campo opcional
        display: true,
        position: 'right',
        

      },      
      tooltip: {},
      title: { //campo opcional
        text: "Primer gráfico",
        display: true,
      }
    },
    scales: {
      x: {
        display: false,
        
      },
      y:{
        display: false,
        beginAtZero: true,
        
      }
    }
  }
  //No se necesitan los meses
  public lineChartLabels: string[] = []
  public lineChartData: {
    labels: string[],
    datasets: ChartDataset<'line'>[],
  } = {
    labels: [],
    datasets: [{
      data: [],
      borderColor: [],
      backgroundColor: [],      
      pointBorderColor: [],
      fill: true,
      label:"Other 50%"
      
      
    }]
  }
  public lineChartType: ChartType = 'line';

  private setChartData(): void {
    this.lineChartData.labels = ["", "", "", "", "", ""];
    this.lineChartData.datasets[0].data = [10, 90, 70, 20, 90, 30]
    this.lineChartData.datasets[0].borderColor = 'rgb(255, 0, 0)', 
    this.lineChartData.datasets[0].backgroundColor = 'rgba(255, 0, 0, 0.32)'
  }

}
