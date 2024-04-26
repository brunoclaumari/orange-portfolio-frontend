import { Component } from '@angular/core';

import { fas } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-brnavbar',
  templateUrl: './brnavbar.component.html',
  styleUrls: ['./brnavbar.component.css']
})
export class BrnavbarComponent {

  fas = fas;
  menuOpened:boolean = false;

  openMenuResponsive(){
    this.menuOpened = !this.menuOpened;
    console.log(`abriu?: ${this.menuOpened}`);
  }

}
