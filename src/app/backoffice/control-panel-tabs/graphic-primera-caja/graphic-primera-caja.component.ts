import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-graphic-primera-caja',
  imports: [BaseChartDirective],
  templateUrl: './graphic-primera-caja.component.html',
  styleUrl: './graphic-primera-caja.component.scss'
})
export class GraphicPrimeraCajaComponent implements OnInit{
  ngOnInit(): void {
    this.setChartData()
  
  }
  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true, //Línea obligatoria
    maintainAspectRatio: false, //proporción del gráfico
    plugins: {
      legend: { //campo opcional
        display: false,
        position: 'bottom'
      },
      tooltip: {},
      title: { //campo opcional
        text: "Primer gráfico",
        display: true,
      }
    }
  }

  public doughnutChartlables: string[] = []
  public doughnutChartData: {
    labels: string[],
    datasets: ChartDataset<'doughnut'>[],
  } = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor : [],
    }]
  }
  public doughnutChartType: ChartType = 'doughnut';

  private setChartData(): void {
    this.doughnutChartlables = [
      //aquí se añaden los valores que vengan del back
      "Lable 1",
      "Lable 2",
      "Lable 3",
      "Lable 4"
    ]
    this.doughnutChartData.labels = [
      "Lable 1",
      "Lable 2",
      "Lable 3",
      "Lable 4"
    ]

    this.doughnutChartData.datasets[0].data = [20, 30, 40, 50]
    this.doughnutChartData.datasets[0].backgroundColor = ["#FFC300", "#FF69B4", "#00BFFF", "#90EE90"]
    this.doughnutChartData.datasets[0].hoverBackgroundColor = ["#FFDAB9"]
  }


}
