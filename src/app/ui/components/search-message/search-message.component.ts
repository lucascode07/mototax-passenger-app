import { Component, Input } from '@angular/core';

@Component({
  selector: 'mototax-search-message',
  templateUrl: './search-message.component.html',
  styleUrls: ['./search-message.component.scss'],
})
export class SearchMessageComponent {
  @Input() public message: string = '';
  @Input() public icon: string = '';
  @Input() public status: string = '';
  @Input() public isFirstMsg?: boolean;
}
