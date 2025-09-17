import {Component, input} from '@angular/core';
import {Attribute} from "./model/attribute";

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
    const count = this.level() + extra;
    return '\u00A0'.repeat(count * 4);
  }

  hasContent() {
    return this.content() !== '';
  }
}
