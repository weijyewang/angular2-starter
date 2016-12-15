import { Component, Input } from '@angular/core';

@Component({
  selector: 'landing-page-panel',
  templateUrl: 'app/landing-page-panel/landing-page-panel.component.html'
})
export class LandingPagePanelComponent  {
  @Input() faClassName: string;
  @Input() title: string;
  @Input() description: string;
}
