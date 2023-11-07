import { Injectable } from '@angular/core';
import { PilotGateway } from '../../domain/pilot/gateway/pilot.gateway';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pilot } from '../../domain/pilot/models/pilot.model';
import { environment } from '../../../environments/environment';
import { PilotResponse } from '../../domain/pilot/models/pilot-response.model';

@Injectable({ providedIn: 'root' })
export class PilotService implements PilotGateway {
  constructor(private _http: HttpClient) {}

  public consultPilotByPlate(licensePlate: string): Observable<Pilot | null> {
    const queryURL = `/api/pilots?populate[profilePhoto][populate]=*&populate[driverLicense][populate]=*&populate[vehicles][populate]=*&filters[vehicles][licensePlate][$eq]=${licensePlate}&filters[available][$eq]=true`;
    return this._http
      .get<PilotResponse>(`${environment.MOTOTAX_API_URL}${queryURL}`)
      .pipe(
        switchMap((res) => {
          if (res.data.length < 1) {
            return of(null);
          } else {
            return of(res.data[0].attributes);
          }
        }),
        catchError((err) => throwError(() => err))
      );
  }
}
