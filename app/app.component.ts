import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <h2>Experiment conducted by RobertTSLee and weijyewang</h2>
    <h4>Stay tuned for more!</h4>
    <h4>Excitement Level: {{excitementLevel}} %</h4>
  `,
})
export class AppComponent  { 
  name = 'Angular'; 
  excitementLevel = 100;
}
