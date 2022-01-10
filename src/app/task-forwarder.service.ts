import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { Observable, throwError, BehaviorSubject } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class TaskForwarderService {
  private messageSource = new BehaviorSubject('default message')
  currentMessage = this.messageSource.asObservable()

  constructor (private http: HttpClient) { }
  configUrl = 'http://127.0.0.1:5000/'

  sendTask (settings: { [x: string]: number; }): void {
    let params = new HttpParams()
    params = params.append('settings', JSON.stringify(settings))
    const response = this.http.get(this.configUrl, { params: params }).subscribe(data => {
      this.changeMessage(data)
    })
  }

  sendExportTask (): void {
    const response = this.http.get(this.configUrl + 'export').subscribe(data => {
      this.changeMessage(data)
    })
  }

  changeMessage (message: any) {
    this.messageSource.next(message)
  }
}
export interface Config {
  points: [number];
}
