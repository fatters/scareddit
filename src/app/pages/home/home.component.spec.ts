import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { MockHomePageItem } from 'src/app/models/home-page-item';
import { HomeService } from 'src/app/services/home.service';
import { MockHomeService } from 'src/app/services/home.service.spec';
import { getNativeElement, getNativeElements } from '../../utils/test-utils';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let testSubject: HomeComponent;
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, LoadingComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: HomeService, useClass: MockHomeService }
      ],
    });

    fixture = TestBed.createComponent(HomeComponent);
    testSubject = fixture.componentInstance;

    service = TestBed.inject(HomeService);

    spyOn(service, 'getHomePageItems').and.callFake(() => {
      return of([
        MockHomePageItem,
        MockHomePageItem
      ]);
    });
  });

  describe('render', () => {

    it('lists the number of threads on the page', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElements(fixture, '.home-page-item').length).toEqual(2);
    });

    it('renders the title of the thread', fakeAsync(() => {
      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, '.home-page-item a').innerText).toEqual('title');
    }));
  });

  describe('#getCommentsRead()', () => {

    it('returns 0 if thread does not have entry in local storage', () => {
      // When
      const result = testSubject.getCommentsRead('any id');

      // Then
      expect(result).toEqual(0);
    });

    it('returns the number of items saved to local storage if more than 0', () => {
      // Given
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(['id one', 'id two']));

      // When
      const result = testSubject.getCommentsRead('any id');

      // Then
      expect(result).toEqual(2);
    });
  });
});
