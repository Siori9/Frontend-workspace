import { Component, Input, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-css.js';

@Component({
  selector: 'code-result',
  standalone: true,
  template: `
    <p class="title-example">
      <span>Exemple :</span>
      <code><ng-content select="[slot=html]"></ng-content></code>
    </p>
    <div class="example-container">
      <!-- Headers -->
      <div class="example-header">
        <span class="header-code">Code</span>
        <span class="header-result">Result</span>
      </div>

      <div class="example-body">
        <!-- Code area -->
        <pre class="example-code"><code #codeBlock class="language-css"></code></pre>

        <!-- Result area -->
        <div class="example-result" #resultContainer>
          <div class="result-wrapper">
            <ng-content select="[slot=result]"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./code-result.component.css'],
})
export class CodeResultComponent implements AfterViewInit {
  @Input() code: string = '';
  @ViewChild('codeBlock', { static: true }) codeBlock!: ElementRef<HTMLElement>;
  @ViewChild('resultContainer', { static: true }) resultContainer!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.codeBlock && this.code && this.resultContainer) {
      this.codeBlock.nativeElement.textContent = this.code.trim();
      Prism.highlightElement(this.codeBlock.nativeElement);

      const wrapperClass = '.result-wrapper';
      const scopedCss = this.scopeCss(this.code, wrapperClass);
      const styleEl = this.renderer.createElement('style');
      styleEl.textContent = scopedCss;
      this.renderer.appendChild(this.resultContainer.nativeElement, styleEl);
    }
  }

  private scopeCss(css: string, prefix: string): string {
    return css
      .split('}')
      .map((rule) => {
        const parts = rule.split('{');
        if (parts.length < 2) return '';
        const selector = parts[0].trim();
        const body = parts[1].trim();
        if (!selector || !body) return '';
        const scopedSelector = selector
          .split(',')
          .map((s) => `${prefix} ${s.trim()}`)
          .join(', ');
        return `${scopedSelector} { ${body} }`;
      })
      .join(' ');
  }
}
