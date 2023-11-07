import { Component } from '@angular/core';
import { PilotUsecasesService } from '../../../domain/pilot/usescases/pilot.usescase';
import { Pilot } from '../../../domain/pilot/models/pilot.model';

@Component({
  selector: 'mototax-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public pilotInfo?: Pilot | null;
  public notFoundPilot: boolean = false;
  public isLoading: boolean = false;
  public isFirstSearch: boolean = true;

  public firstMessage = {
    text: 'Utiliza el buscador para encontrar al conductor y revisar sus datos',
    icon: 'bi-search',
    status: 'body-tertiary',
  };
  public notFoundMessage = {
    text: 'No se encontró mototaxista, revise si la placa ingresada es correcta o posiblemente el conductor aún no esté registrado.',
    icon: 'bi-exclamation-triangle-fill',
    status: 'danger',
  };

  constructor(private _pilotUsecasesService: PilotUsecasesService) {}

  public consultPilot(licensePlate: string) {
    this.notFoundPilot = false;
    this.isLoading = true;
    this.isFirstSearch = false;
    this.pilotInfo = null;

    this._pilotUsecasesService
      .consultPilotByPlate(licensePlate)
      .subscribe((res) => {
        if (res) {
          this.pilotInfo = res;
        } else {
          this.notFoundPilot = true;
        }
        this.isLoading = false;
      });
  }
}
