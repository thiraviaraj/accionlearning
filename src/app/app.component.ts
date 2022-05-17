import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accathon';
  isSideBarOpen = false;
  onToggleAppMenu(ev: MouseEvent) {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
}
