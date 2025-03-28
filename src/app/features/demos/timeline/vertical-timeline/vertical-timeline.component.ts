import {Component} from '@angular/core';
import {Timeline} from 'primeng/timeline';
import {DatePipe, NgClass} from '@angular/common';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {Card} from "primeng/card";
import {Checkbox} from "primeng/checkbox";

interface EventItem {
    status: string;
    date: string;
    icon: string;
    color: string;
    description: string;
}

interface AlignmentItem {
    label: string;
    value: string;
}

@Component({
    selector: 'prb-vertical-timeline',
    imports: [
        Timeline,
        DatePipe,
        DropdownModule,
        FormsModule,
        Card,
        Checkbox,
        NgClass
    ],
    templateUrl: './vertical-timeline.component.html',
    styleUrl: './vertical-timeline.component.scss'
})
export class VerticalTimelineComponent {
    timelineItems: EventItem[] | undefined;
    selectedAlignmentItem: string = 'left';
    alignmentItems = [
        {label: 'Default Alignment', value: 'left'},
        {label: 'Alternate Alignment', value: 'alternate'},
        {label: 'Right Alignment', value: 'right'}] as AlignmentItem[];
    showMinimal: boolean = true;
    showAddIcon: boolean = true;
    showAddDateTime: boolean = true;
    showCardWithDetails: boolean = true;

    constructor() {
        this.timelineItems = [
            {
                status: 'Initiate Transmission',
                date: '2024-10-16 08:35:21.453',
                icon: 'pi pi-info',
                color: '--timeline-color-initiate',
                description: 'The transmission has been initiated.'
            },
            {
                status: 'Transmitting Packets',
                date: '2024-10-16 08:35:22.531',
                icon: 'fa fa-rss',
                color: '--timeline-color-transmitting',
                description: 'The transmission is transmitting 3 packets.'
            },
            {
                status: 'Verify Checksum',
                date: '2024-10-16 08:35:24.253',
                icon: 'fa fa-check',
                color: '--timeline-color-checksum',
                description: 'The transmission is verifying the checksum.'
            },
            {
                status: 'Transmitting Packets',
                date: '2024-10-16 08:35:26.168',
                icon: 'fa fa-rss',
                color: '--timeline-color-transmitting',
                description: 'The transmission is transmitting 2 packets.'
            },
            {
                status: 'Verify Checksum',
                date: '2024-10-16 08:35:28.530',
                icon: 'fa fa-check',
                color: '--timeline-color-checksum',
                description: 'The transmission is verifying the checksum.'
            },
            {
                status: 'Transmitting Packets',
                date: '2024-10-16 08:35:30.743',
                icon: 'fa fa-rss',
                color: '#0633c7',
                description: 'The transmission is transmitting 8 packets.'
            },
            {
                status: 'Verify Checksum',
                date: '2024-10-16 08:35:35.639',
                icon: 'fa fa-check',
                color: '#04b404',
                description: 'The transmission is verifying the checksum.'
            },
            {
                status: 'End Transmission',
                date: '2024-10-16 08:35:26.300',
                icon: 'fa fa-download',
                color: '#04b404',
                description: 'The transmission has completed.'
            }
        ];
    }

    getEventClass(event: EventItem): string {
        if (event.status === 'Initiate Transmission') {
            return 'tl-initiate';
        } else if (event.status === 'Transmitting Packets') {
            return 'tl-transmitting';
        } else if (event.status === 'Verify Checksum') {
            return 'tl-checksum';
        } else if (event.status === 'End Transmission') {
            return 'tl-complete';
        }
        return '';
    }
}
