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
    return this.vehicleInfo.vehicles.data[0].attributes.photo.data.attributes
      .url;
  }

  public get pilotPhoto(): string {
    return this.vehicleInfo.profilePhoto.data.attributes.url;
  }
}
