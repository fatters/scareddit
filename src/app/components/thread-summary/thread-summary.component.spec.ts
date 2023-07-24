import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { dummyThread } from 'src/app/app.component.spec';
import { ThreadSummaryComponent } from './thread-summary.component';

describe('ThreadSummaryComponent', () => {
  let testSubject: ThreadSummaryComponent;
  let fixture: ComponentFixture<ThreadSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadSummaryComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(ThreadSummaryComponent);
    testSubject = fixture.componentInstance;

    testSubject.thread = dummyThread();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testSubject).toBeTruthy();
  });
});
