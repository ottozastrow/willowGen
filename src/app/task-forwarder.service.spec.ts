import { TestBed } from '@angular/core/testing'

import { TaskForwarderService } from './task-forwarder.service'

describe('TaskForwarderService', () => {
  let service: TaskForwarderService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TaskForwarderService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
