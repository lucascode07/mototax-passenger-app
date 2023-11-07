import { Observable } from "rxjs";
import { Pilot } from "../models/pilot.model";

export abstract class PilotGateway {
  public abstract consultPilotByPlate(licensePlate: string): Observable<Pilot | null>;
}
