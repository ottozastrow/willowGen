import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InputsComponent } from './inputs/inputs.component'
import { VisualizerComponent } from './visualizer/visualizer.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import * as PlotlyJS from 'plotly.js-dist-min'
import { PlotlyModule } from 'angular-plotly.js'

PlotlyModule.plotlyjs = PlotlyJS

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    VisualizerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
