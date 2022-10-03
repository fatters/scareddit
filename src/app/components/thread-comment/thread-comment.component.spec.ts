import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadCommentComponent } from './thread-comment.component';

describe('ThreadCommentComponent', () => {
  let component: ThreadCommentComponent;
  let fixture: ComponentFixture<ThreadCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
