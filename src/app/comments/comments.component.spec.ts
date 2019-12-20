import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentsComponent } from './comments.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

describe('CommentsComponent', () => {
  let fixture: ComponentFixture<CommentsComponent>;
  let testSubject: CommentsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsComponent],
      providers: [
        {provide: ActivatedRoute, useValue: {snapshot: {params: {id: 'id'}}}},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(CommentsComponent);
    testSubject = fixture.componentInstance;
  });

  beforeEach(() => {
    const service = TestBed.get(AppService);
    const dummyComments = [{
      id: 'id',
      body_html: '<p>body</p>',
      score: 10
    }];

    spyOn(service, 'getRepliesFromThread').and.returnValue(Promise.resolve({
      comments: dummyComments
    }));
  });

  describe('render', () => {

    it('renders the component', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(testSubject).toBeTruthy();
    });
  });
});
