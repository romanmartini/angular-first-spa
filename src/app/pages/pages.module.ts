import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

// Components
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
