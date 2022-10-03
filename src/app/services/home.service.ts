import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HomePageItem } from '../models/home-page-item';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

  getHomePageItems(): Observable<HomePageItem[]> {
    return this.http.get<HomePageItem[]>('./assets/home-page-items.json');
  }
}
