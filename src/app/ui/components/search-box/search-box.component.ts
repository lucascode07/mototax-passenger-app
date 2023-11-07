import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mototax-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Output() licensePlate = new EventEmitter<string>();

  public searchForm: FormGroup = this._fb.group({
    licensePlate: ['', [Validators.required]],
  });

  constructor(private _fb: FormBuilder) {}

  public sendLicensePlate(): any {
    const licensePlateValue = this.searchForm.value.licensePlate.toUpperCase();
    this.licensePlate.emit(licensePlateValue);
  }
}
