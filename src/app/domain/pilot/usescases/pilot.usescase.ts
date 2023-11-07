import { Injectable } from '@angular/core';
import { PilotGateway } from '../gateway/pilot.gateway';
import { Observable } from 'rxjs';
import { Pilot } from '../models/pilot.model';

@Injectable({
  providedIn: 'root',
})
export class PilotUsecasesService implements PilotGateway {
  constructor(private _pilotGateway: PilotGateway) {}

  public consultPilotByPlate(licensePlate: string): Observable<Pilot | null> {
    return this._pilotGateway.consultPilotByPlate(licensePlate);
  }
}
