import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iscollapsed : boolean = true;
  title = 'crs-front-end';

  toggleCollapsed(){
  this.iscollapsed = !this.iscollapsed;
  }
}
