import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SlotCategoryService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getSlotCategories(): Observable<any[]> {
    return this.http.get<any[]>(
      this.baseUrl + '/v2/slot/categories?include=games'
    );
  }
}
