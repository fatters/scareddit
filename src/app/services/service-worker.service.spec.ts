import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule } from '@angular/service-worker';
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
      imports: [ServiceWorkerModule.register('', {enabled: false})]
    });
    service = TestBed.inject(ServiceWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
