import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnChanges {
  @Input() open = false;
  @ViewChild('drawer') public drawer: MatSidenav;
  constructor(private sharedSrv: SharedService) { }
  ngOnInit(): void {
    this.sharedSrv.sideNavToggleSubject.subscribe(()=> {
      console.log('through Shared Srv');
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.drawer && changes['open'].currentValue !== changes['open'].previousValue) {
      this.drawer.toggle();
    }
  }
}
