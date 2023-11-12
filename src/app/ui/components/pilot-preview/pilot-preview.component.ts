import { Component, Input } from '@angular/core';
import { Pilot } from '../../../domain/pilot/models/pilot.model';

@Component({
  selector: 'mototax-pilot-preview',
  templateUrl: './pilot-preview.component.html',
  styleUrls: ['./pilot-preview.component.scss'],
})
export class PilotPreviewComponent {
  @Input() vehicleInfo!: Pilot;

  public get vehiclePhoto(): string {
    return this.vehicleInfo.vehiculos.data[0].attributes.foto.data.attributes
      .url;
  }

  public get pilotPhoto(): string {
    return this.vehicleInfo.fotoPerfil.data.attributes.url;
  }

  public get licensePicture(): string {
    return this.vehicleInfo.licencia.data.attributes.fotoFrontal.data.attributes
      .url;
  }

  public get policeRecordsPicture(): string {
    return this.vehicleInfo.licencia.data.attributes.antecedentePolicial.data
      .attributes.url;
  }
}
