import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
@Output('onToggleMenu') onToggleMenu:EventEmitter<MouseEvent>
= new EventEmitter<MouseEvent>();

  constructor(private sharedSrv: SharedService) { }

  ngOnInit(): void {
  }

  onToggleMenuClicked(ev: MouseEvent) {
    this.onToggleMenu.emit(ev);
    this.sharedSrv.toggle();
  }

}
