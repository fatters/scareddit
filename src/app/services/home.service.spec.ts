import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import type { HomePageItem } from '../models/home-page-item';
import { HomeService } from './home.service';

export class MockHomeService {

  getHomePageItems(): Observable<HomePageItem[]> {
      return of([]);
  }
}

describe('HomeService', () => {
  let testSubject: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService],
    });

    testSubject = TestBed.inject(HomeService);
  });

  describe('#getHomePageItems()', () => {

    it('calls home-page-items.json', () => {
      // Given
      const http = TestBed.inject(HttpClient);
      spyOn(http, 'get').and.callFake(() => null);

      // When
      testSubject.getHomePageItems();

      // Then
      expect(http.get).toHaveBeenCalledWith('./assets/home-page-items.json');
    });
  });
});