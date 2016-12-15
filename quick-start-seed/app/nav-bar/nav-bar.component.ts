import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/nav-bar/nav-bar.component.html'
})
export class NavBarComponent  {
  abc = 'abc';
  myFunction() {
    const x = document.getElementById("navBar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }
}
