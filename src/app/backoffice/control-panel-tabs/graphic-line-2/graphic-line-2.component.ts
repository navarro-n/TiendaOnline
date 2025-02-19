import { Component } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-line-2',
  imports: [BaseChartDirective],
  templateUrl: './graphic-line-2.component.html',
  styleUrl: './graphic-line-2.component.scss'
})
export class GraphicLine2Component {
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
        backgroundColor: '',        
        pointBorderColor: [],
        fill: true,
        label:"Refrral 5.54%"   
        
      }]
    }
    public lineChartType: ChartType = 'line';
  
    private setChartData(): void {
      this.lineChartData.labels = ["", "", "", "", "", ""];
      this.lineChartData.datasets[0].data = [10, 40, 30, 40, 30, 10],
      this.lineChartData.datasets[0].borderColor = 
      this.lineChartData.datasets[0].backgroundColor = 'rgb(0, 163, 16)'
    }
  

}
