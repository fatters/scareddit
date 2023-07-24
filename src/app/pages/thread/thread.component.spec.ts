import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { ThreadService } from 'src/app/services/thread.service';
import { MockThreadService } from 'src/app/services/thread.service.spec';
import { ThreadComponent } from './thread.component';

describe('ThreadComponent', () => {
  let component: ThreadComponent;
  let fixture: ComponentFixture<ThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreadComponent, LoadingComponent],
      imports: [RouterTestingModule],
      providers: [
        {provide: ThreadService, useClass: MockThreadService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
