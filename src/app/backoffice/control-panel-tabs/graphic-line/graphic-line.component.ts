import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-line',
  imports: [BaseChartDirective],
  templateUrl: './graphic-line.component.html',
  styleUrl: './graphic-line.component.scss'
})
export class GraphicLineComponent implements OnInit {
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
      backgroundColor: 'rgba(0, 255, 0, 0.1)',
      pointBackgroundColor: "green",
      pointBorderColor: [],
      fill: true,
      label:"Other 50%"
      
      
    }]
  }
  public lineChartType: ChartType = 'line';

  private setChartData(): void {
    this.lineChartData.labels = ["", "", "", "", "", ""];
    this.lineChartData.datasets[0].data = [20, 40, 70, 60, 90, 20]
    this.lineChartData.datasets[0].borderColor = "green"
    this.lineChartData.datasets[0].backgroundColor = 'rgba(0, 255, 0, 0.1)'
  }

}
