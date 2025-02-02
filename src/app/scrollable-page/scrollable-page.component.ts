import {Component, OnInit} from '@angular/core';
import {parse} from '@adobe/css-tools'
import {cssPropertyValue} from "../utility/css-property-value";
import {cssPropertyName} from "../utility/css-property-name";

@Component({
  selector: 'app-scrollable-page',
  imports: [],
  templateUrl: './scrollable-page.component.html',
  styleUrl: './scrollable-page.component.scss'
})
export class ScrollablePageComponent implements OnInit {
  cssCode: string[] = [];

  ngOnInit() {
    const cssString =
      '.main-grid-container {' +
      ' display: grid;' +
      ' grid-template-areas: "header" "content" "footer";' +
      '}' +
      '' +
      '.p-menuitem-content > .p-tester, .p-menuitem-text {' +
      ' padding: 10px;' +
      '}' +
      '' +
      '.p-submenu-header {' +
      ' font-weight: bold;' +
      ' background-color: #d7d7d7;' +
      ' border-radius: 6px 6px 6px 6px;' +
      ' text-shadow: 1px 1px 1px #808080;' +
      '}';

    const ast = parse(cssString);
    this.cssCode = [];

    ast.stylesheet.rules.forEach(rule => {
      if (rule.type === 'rule') {
        this.cssCode.push(rule.selectors.join(',<br />\n') + ' {<br />');
        rule.declarations.forEach(declaration => {
          if (declaration.type === 'declaration') {
            this.cssCode.push('&nbsp;&nbsp;' + cssPropertyName(declaration.property) + ': ' + cssPropertyValue(declaration.value) + ';<br />');
          }
        });
        this.cssCode.push('}<br />');
        this.cssCode.push('');
      }
    })
    console.log('AST: ', ast.stylesheet);
    // const css = stringify(ast);
    // console.log(css);
  }
}
