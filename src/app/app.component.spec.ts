import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ServiceWorkerService } from './services/service-worker.service';
import { MockServiceWorkerService } from './services/service-worker.service.spec';

describe('AppComponent', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        ScrollToTopComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ServiceWorkerService, useClass: MockServiceWorkerService }
      ]
    });
  }));

  it('should create the app', waitForAsync(() => {
    // Given
    const fixture = TestBed.createComponent(AppComponent);

    // When
    const app = fixture.debugElement.componentInstance;

    // Then
    expect(app).toBeTruthy();
  }));
});
