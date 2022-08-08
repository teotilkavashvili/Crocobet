import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SlotproviderService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getSlotProviders(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '?type=slot&platform=desktop');
  }

  getSlotsbyProvider(providerId): Observable<any[]> {
    console.log(providerId);
    return this.http.get<any[]>(
      `${this.baseUrl}/v2/slot/providers/${providerId}?platform=desktop`
    );
  }
}
