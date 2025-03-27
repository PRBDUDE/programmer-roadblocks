import { Component } from '@angular/core';

@Component({
    selector: 'prb-roadblock-footer',
    imports: [],
    templateUrl: './roadblock-footer.component.html',
    styleUrl: './roadblock-footer.component.scss'
})
export class RoadblockFooterComponent {
  year = new Date().getFullYear();
}
