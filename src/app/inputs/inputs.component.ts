import { Component, OnInit } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'
import { TaskForwarderService } from '../task-forwarder.service'

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  profileForm = this.fb.group({
    myRows: [4, Validators.required],
    myCols: [4, Validators.required],
    verticals: [true, Validators.required],
    angled: [false, Validators.required],
    mode: [1, Validators.required],
    only_x: [false, Validators.required],
    parallel: [false, Validators.required]
  })

  constructor (
    private fb: FormBuilder,
    private taskforwarder: TaskForwarderService) { }

  config: { points: [number]; } = { points: [0] }
  ngOnInit (): void {
    this.onSubmit()
  }

  onSubmit () {
    this.taskforwarder.sendTask("", this.profileForm.value)
  }
  onGenerate3d () {
    this.taskforwarder.sendTask("animate3d",this.profileForm.value)
  }
  onGenerate2d () {
    this.taskforwarder.sendTask("animate2d",this.profileForm.value)
  }
}

export interface Config {
  points: [number];
}
