import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RoadblockHeaderComponent} from "@rootComponents/roadblock-header.component";
import {PrimeNG} from "primeng/config";
import {RoadblockFooterComponent} from "@rootComponents/roadblock-footer.component";

@Component({
  selector: 'prb-root',
  imports: [
    RouterOutlet,
    RoadblockHeaderComponent,
    RoadblockFooterComponent,
    RoadblockHeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'programmer-roadblocks';

  constructor(private primeng: PrimeNG) {
  }

  ngOnInit(): void {
    this.primeng.ripple.set(true);
    this.primeng.zIndex = {
      modal: 10000,
      overlay: 10000,
      menu: 10000,
      tooltip: 10000
    }
    this.primeng.filterMatchModeOptions = {
      text: ['contains', 'notcontains', 'equals', 'notequals', 'in', 'notin'],
      numeric: ['equals', 'notequals', 'lt', 'lte', 'gt', 'gte', 'in', 'notin'],
      date: ['equals', 'notequals', 'before', 'after', 'between', 'notbetween']
    };
  }
}
