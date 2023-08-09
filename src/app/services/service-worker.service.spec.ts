import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ServiceWorkerService } from './service-worker.service';

export class MockServiceWorkerService {
  
  start(): void {
    
  }

  ngOnDestroy(): void {
  }
}

describe('ServiceWorkerService', () => {
  let service: ServiceWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ServiceWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
