import { Component } from '@angular/core';
import {Message} from "primeng/message";

@Component({
  selector: 'app-message-demo',
  standalone: true,
  imports: [
    Message
  ],
  templateUrl: './message-demo.component.html',
  styleUrl: './message-demo.component.scss'
})
export class MessageDemoComponent {

}
