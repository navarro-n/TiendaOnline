/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ArcElement, CategoryScale, Chart, DoughnutController, Legend, LinearScale, LineController, LineElement, PieController, PointElement, Tooltip} from 'chart.js';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  //Línea de configuración de gráficos
Chart.register(ArcElement, PieController, DoughnutController, Legend, Tooltip, LineController, CategoryScale, LinearScale, PointElement, LineController, LineElement)
