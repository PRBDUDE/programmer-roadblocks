import { Component } from '@angular/core';
import {Message} from "primeng/message";

@Component({
    selector: 'prb-message-demo',
    imports: [
        Message
    ],
    templateUrl: './message-demo.component.html',
    styleUrl: './message-demo.component.scss'
})
export class MessageDemoComponent {

}
