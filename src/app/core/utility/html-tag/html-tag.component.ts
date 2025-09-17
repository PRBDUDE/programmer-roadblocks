import {Component, input} from '@angular/core';
import {Attribute} from "./model/attribute";
import {Indentation} from "@utility/indentation";

@Component({
  selector: 'prb-html-tag',
  imports: [],
  templateUrl: './html-tag.component.html',
  styleUrl: './html-tag.component.scss'
})
export class HtmlTagComponent {
  level = input<number>(0);
  tag = input<string>('');
  attributes = input<Attribute[]>([]);
  content = input<string>('');

  getIndentation(extra: number = 0) {
    return Indentation.get(this.level(), extra);
  }

  hasContent() {
    return this.content() !== '';
  }
}
