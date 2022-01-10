import { Component, OnInit } from '@angular/core'
import * as Plotly from 'plotly.js'
import { redraw } from 'plotly.js-dist-min'
import { BehaviorSubject, Subject } from 'rxjs'
import { TaskForwarderService } from '../task-forwarder.service'

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {
  constructor (private taskforwarder: TaskForwarderService) { }

  layout = {
    width: 1400,
    height: 800,
    title: '3d view of model',
    scene: {
      xaxis: { showgrid: false, showline: false, visible: false },
      yaxis: { showgrid: false, showline: false, visible: false },
      zaxis: { showgrid: false, showline: false, visible: false },
      aspectmode: 'data',
      camera: {
        up: { x: 1, y: 0, z: 0 },
        eye: { x: 0, y: 2, z: 0 }
      }
    }
  }

  public defaultdata = [
    {}
  ]

  interactivePlotSubject$: Subject<any> = new BehaviorSubject<any>(this.defaultdata)

  ngOnInit (): void {
    this.taskforwarder.currentMessage.subscribe(message => {
      const response = JSON.parse(JSON.stringify(message))
      const traces = response.lines3d
      const traces_annotated = []
      for (let i = 0; i < traces.length; i++) {
        traces_annotated.push({
          x: traces[i].x,
          y: traces[i].y,
          z: traces[i].z,
          showlegend: false,
          line: { size: 8, color: 'black', colorscale: 'Greens' },
          type: 'scatter3d',
          mode: 'lines',
          aspectmode: 'data'
        })
      }
      this.interactivePlotSubject$.next(
        traces_annotated)
    })
  }

  onExport (): void {
    this.taskforwarder.sendExportTask()
  }
}
