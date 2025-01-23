import {cssPropertyValue} from "./css-property-value";

describe('PropertyValue', () => {
  it('should return \'<span class="property-number">123</span><span class="property-unit">px</span>\'', () => {
    const generatedValue = cssPropertyValue('123px');
    expect(generatedValue).toEqual('<span class="property-number">123</span><span class="property-unit">px</span>');
  });

  it('should return \'<span class="property-number">23</span><span class="property-unit">em</span>\'', () => {
    const generatedValue = cssPropertyValue('23em');
    expect(generatedValue).toEqual('<span class="property-number">23</span><span class="property-unit">em</span>');
  });

  it('should return \'<span class="property-number">100</span><span class="property-percentage-unit">%</span>\'', () => {
    const generatedValue = cssPropertyValue('100%');
    expect(generatedValue).toEqual('<span class="property-number">100</span><span class="property-percentage-unit">%</span>');
  });

  it('should return \'<span class="property-number">10</span><span class="property-unit">vw</span>\'', () => {
    const generatedValue = cssPropertyValue('10vw');
    expect(generatedValue).toEqual('<span class="property-number">10</span><span class="property-unit">vw</span>');
  });

  it('should return \'<span class="property-number">10</span><span class="property-unit">vh</span>\'', () => {
    const generatedValue = cssPropertyValue('10vh');
    expect(generatedValue).toEqual('<span class="property-number">10</span><span class="property-unit">vh</span>');
  });

  it('should return \'<span class="property-number">10</span><span class="property-unit">rem</span>\'', () => {
    const generatedValue = cssPropertyValue('10rem');
    expect(generatedValue).toEqual('<span class="property-number">10</span><span class="property-unit">rem</span>');
  });

  it('should return \'<span class="property-number">185</span><span class="property-unit">deg</span>\'', () => {
    const generatedValue = cssPropertyValue('185deg');
    expect(generatedValue).toEqual('<span class="property-number">185</span><span class="property-unit">deg</span>');
  });

  it('should return \'<span class="property-number">-85</span><span class="property-unit">deg</span>\'', () => {
    const generatedValue = cssPropertyValue('-85deg');
    expect(generatedValue).toEqual('<span class="property-number">-85</span><span class="property-unit">deg</span>');
  });

  it('should return \'<span class="property-number">#a34fcb</span>\'', () => {
    const generatedValue = cssPropertyValue('#a34fcb');
    expect(generatedValue).toEqual('<span class="property-number">#a34fcb</span>');
  });

  it('should return \'<span class="property-number">#ccc</span>\'', () => {
    const generatedValue = cssPropertyValue('#ccc');
    expect(generatedValue).toEqual('<span class="property-number">#ccc</span>');
  });

  it('should return \'<span class="property-number">1</span><span class="property-unit">px</span> <span class="property-value">solid</span> <span class="property-number">#ccc</span>\'', () => {
    const generatedValue = cssPropertyValue('1px solid #ccc');
    expect(generatedValue).toEqual('<span class="property-number">1</span><span class="property-unit">px</span> <span class="property-value">solid</span> <span class="property-number">#ccc</span>');
  });

  it('should return \'<span class="property-number">10</span><span class="property-unit">rem</span> <span class="property-number">20</span><span class="property-unit">px</span>\'', () => {
    const generatedValue = cssPropertyValue('10rem 20px');
    expect(generatedValue).toEqual('<span class="property-number">10</span><span class="property-unit">rem</span> <span class="property-number">20</span><span class="property-unit">px</span>');
  });

  it('should return \'<span class="property-number">10</span><span class="property-unit">px</span> <span class="property-value">fixed</span>\'', () => {
    const generatedValue = cssPropertyValue('10px fixed');
    expect(generatedValue).toEqual('<span class="property-number">10</span><span class="property-unit">px</span> <span class="property-value">fixed</span>');
  });

  it('should return \'<span class="property-number">10.9</span><span class="property-unit">rem</span> <span class="property-number">90</span><span class="property-unit">%</span>\'', () => {
    const generatedValue = cssPropertyValue('10.9rem 90%');
    expect(generatedValue).toEqual('<span class="property-number">10.9</span><span class="property-unit">rem</span> <span class="property-number">90</span><span class="property-percentage-unit">%</span>');
  });

  it('should return \'<span class="property-value">"header" "content" "footer"\'</span>\'', () => {
    const generatedValue = cssPropertyValue('"header" "content" "footer"');
    expect(generatedValue).toEqual('<span class="property-value">"header"</span> <span class="property-value">"content"</span> <span class="property-value">"footer"</span>');
  });

  it('should return \'<span class="property-number">100</span><span class="property-unit">vh</span> <span class="property-value">-</span> <span class="property-number">113</span><span class="property-unit">px</span>\'\'', () => {
    const generatedValue = cssPropertyValue('100vh - 113px');
    expect(generatedValue).toEqual('<span class="property-number">100</span><span class="property-unit">vh</span> <span class="property-value">-</span> <span class="property-number">113</span><span class="property-unit">px</span>');
  });

  it('should return \'<span class="property-number">100</span><span class="property-unit">vh</span> * <span class="property-number">113</span><span class="property-unit">px</span>\'\'', () => {
    const generatedValue = cssPropertyValue('100vh * 113px');
    expect(generatedValue).toEqual('<span class="property-number">100</span><span class="property-unit">vh</span> * <span class="property-number">113</span><span class="property-unit">px</span>');
  });

  it('should return \'<span class="property-number">100</span><span class="property-unit">vh</span> + <span class="property-number">113</span><span class="property-unit">px</span>\'\'', () => {
    const generatedValue = cssPropertyValue('100vh + 113px');
    expect(generatedValue).toEqual('<span class="property-number">100</span><span class="property-unit">vh</span> + <span class="property-number">113</span><span class="property-unit">px</span>');
  });

  it('should return \'<span class="property-number">100</span><span class="property-unit">vh</span> / <span class="property-number">113</span><span class="property-unit">px</span>\'\'', () => {
    const generatedValue = cssPropertyValue('100vh / 113px');
    expect(generatedValue).toEqual('<span class="property-number">100</span><span class="property-unit">vh</span> / <span class="property-number">113</span><span class="property-unit">px</span>');
  });

  it('should return \'<span class="property-number">125</span> <span class="property-number">60</span> <span class="property-number">90</span>\'', () => {
    const generatedValue = cssPropertyValue('125 60 90');
    expect(generatedValue).toEqual('<span class="property-number">125</span> <span class="property-number">60</span> <span class="property-number">90</span>');
  });

  it('should return \'<span class="property-number">125</span>, <span class="property-number">60</span>, <span class="property-number">90</span>\'', () => {
    const generatedValue = cssPropertyValue('125, 60, 90');
    expect(generatedValue).toEqual('<span class="property-number">125</span>, <span class="property-number">60</span>, <span class="property-number">90</span>');
  });

  it('should return \'<span class="property-function">rgb</span>(<span class="property-number">125</span>, <span class="property-number">60</span>, <span class="property-number">90</span>)\'', () => {
    const generatedValue = cssPropertyValue('rgb(125, 60, 90)');
    expect(generatedValue).toEqual('<span class="property-function">rgb</span>(<span class="property-number">125</span>, <span class="property-number">60</span>, <span class="property-number">90</span>)');
  });

  it('should return \'<span class="property-function">calc</span>(<span class="property-number">100</span><span class="property-unit">vh</span> <span class="property-value">-</span> <span class="property-number">113</span><span class="property-unit">px</span>)\'', () => {
    const generatedValue = cssPropertyValue('calc(100vh - 113px)');
    expect(generatedValue).toEqual('<span class="property-function">calc</span>(<span class="property-number">100</span><span class="property-unit">vh</span> <span class="property-value">-</span> <span class="property-number">113</span><span class="property-unit">px</span>)');
  });

  it('should return \'<span class="property-function">calc</span>(<span class="property-number">100</span><span class="property-unit">vh</span> * <span class="property-number">113</span><span class="property-unit">px</span>)\'', () => {
    const generatedValue = cssPropertyValue('calc(100vh * 113px)');
    expect(generatedValue).toEqual('<span class="property-function">calc</span>(<span class="property-number">100</span><span class="property-unit">vh</span> * <span class="property-number">113</span><span class="property-unit">px</span>)');
  });

  it('should return \'<span class="property-function">acos</span>(<span class="property-number">0.5</span>)\'', () => {
    const generatedValue = cssPropertyValue('acos(0.5)');
    expect(generatedValue).toEqual('<span class="property-function">acos</span>(<span class="property-number">0.5</span>)');
  });

  it('should return \'<span class="property-function">acos</span>(<span class="property-number">0.5</span>)\'', () => {
    const generatedValue = cssPropertyValue('rotate(acos(0.5))');
    expect(generatedValue).toEqual('<span class="property-function">rotate</span>(<span class="property-function">acos</span>(<span class="property-number">0.5</span>))');
  });

  it('should return \'<span class="property-value">in</span> <span class="property-value">hsl,</span> <span class="property-function">hsl</span>(<span class="property-number">125</span> <span class="property-number">60</span> <span class="property-number">90</span>), <span class="property-value">salmon</span> <span class="property-number">85</span><span class="property-percentage-unit">%</span>\'', () => {
    const generatedValue = cssPropertyValue('in hsl, hsl(125 60 90), salmon 85%');
    expect(generatedValue).toEqual('<span class="property-value">in</span> <span class="property-value">hsl,</span> <span class="property-function">hsl</span>(<span class="property-number">125</span> <span class="property-number">60</span> <span class="property-number">90</span>), <span class="property-value">salmon</span> <span class="property-number">85</span><span class="property-percentage-unit">%</span>');
  });

  it('should return \'<span class="property-function">color-mix</span>(<span class="property-value">in</span> <span class="property-value">hsl,</span> <span class="property-function">hsl</span>(<span class="property-number">125</span> <span class="property-number">60</span> <span class="property-number">90</span>), <span class="property-value">salmon</span> <span class="property-number">85</span><span class="property-percentage-unit">%</span>)\'', () => {
    const generatedValue = cssPropertyValue('color-mix(in hsl, hsl(125 60 90), salmon 85%)');
    expect(generatedValue).toEqual('<span class="property-function">color-mix</span>(<span class="property-value">in</span> <span class="property-value">hsl,</span> <span class="property-function">hsl</span>(<span class="property-number">125</span> <span class="property-number">60</span> <span class="property-number">90</span>), <span class="property-value">salmon</span> <span class="property-number">85</span><span class="property-percentage-unit">%</span>)');
  });

  it('should return \'<span class="property-function">conic-gradient</span>(<span class="property-value">red,</span> <span class="property-value">yellow,</span> <span class="property-value">green</span>)\'', () => {
    const generatedValue = cssPropertyValue('conic-gradient(red, yellow, green)');
    expect(generatedValue).toEqual('<span class="property-function">conic-gradient</span>(<span class="property-value">red,</span> <span class="property-value">yellow,</span> <span class="property-value">green</span>)');
  });

  it('should return \'<span class="property-value">"Section "</span> <span class="property-function">counter</span>(<span class="property-value">section</span>) <span class="property-value">": "</span>\'', () => {
    const generatedValue = cssPropertyValue('"Section " counter(section) ": "');
    expect(generatedValue).toEqual('<span class="property-value">"Section "</span> <span class="property-function">counter</span>(<span class="property-value">section</span>) <span class="property-value">": "</span>');
  });

  it('should return \'<span class="property-function">counters</span>(section,"<span class="property-number">.</span>") <span class="property-value">" "</span>\'', () => {
    const generatedValue = cssPropertyValue('counters(section,".") " "');
    expect(generatedValue).toEqual('<span class="property-function">counters</span>(section,"<span class="property-number">.</span>") <span class="property-value">" "</span>');
  });
})
