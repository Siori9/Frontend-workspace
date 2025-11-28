import { CodeResultComponent } from '../../app/components/code-result.component';

export default {
  title: 'Positionnement/Lesson',
  component: CodeResultComponent,
};

export const Introduction = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Positionnement CSS</h1>
        <p>La propriété <code>position</code> permet de contrôler la façon dont un élément est placé dans la page.</p>

        <h2>Les 5 valeurs principales</h2>
        <table class="table">
          <tr><th>Valeur</th><th>Description</th></tr>
          <tr><td><code>static</code></td><td>Position par défaut, sans décalage possible.</td></tr>
          <tr><td><code>relative</code></td><td>Décalage par rapport à sa position normale.</td></tr>
          <tr><td><code>absolute</code></td><td>Positionné par rapport au premier parent positionné.</td></tr>
          <tr><td><code>fixed</code></td><td>Fixé par rapport à la fenêtre (viewport).</td></tr>
          <tr><td><code>sticky</code></td><td>Reste normal, mais devient fixe après un certain scroll.</td></tr>
        </table>
        
        <h2>z-index</h2>
        <p>Le <code>z-index</code> permet de gérer l’ordre d’empilement des éléments positionnés : plus la valeur est élevée, plus l’élément apparaît « au-dessus » des autres sur l’axe Z, comme des calques superposés.</p>
      </div>
    `,
    styles: [
      `
      .table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
      th, td { border: 1px solid #ddd; padding: 0.5rem; }
      th { background: #eee; }
    `,
    ],
  }),
};

export const PositionRelativeAbsolute = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Relative et Absolute</h2>
        <p><code>absolute</code> se positionne par rapport au premier ancêtre en <code>relative</code>.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;div class="parent"&gt;
              &lt;div class="child"&gt;Absolu&lt;/div&gt;
            &lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="parent">
              <div class="child">Absolu</div>
            </div>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .zone { padding: 2rem; }
      .parent {
        width: 15rem;
        height: 10rem;
        background: #d0e4ff;
        position: relative;
        border: 2px solid #80a9ff;
      }
      .child {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: #ff6b6b;
        padding: 0.5rem 1rem;
      }
    `,
    ],
    props: {
      code: `
.parent {
  position: relative;
  width: 15rem;
  height: 10rem;
  background: lightblue;
}

.child {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: salmon;
}
`,
    },
  }),
};

export const PositionFixed = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Fixed</h2>
        <p>L'élément reste fixé par rapport à la fenêtre, même pendant le scroll.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;div class="fixed-box"&gt;Fixé&lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="fixed-box">Fixé</div>
            <div class="scroll"></div>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .zone {
        height: 15rem;
        overflow-y: scroll;
        border: 1px solid #aaa;
        position: relative;
      }
      .scroll { height: 40rem; }
      .fixed-box {
        position: fixed;
        top: 1rem;
        left: 1rem;
        background: #ffd54f;
        padding: 0.5rem 1rem;
      }
    `,
    ],
    props: {
      code: `
.fixed-box {
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: gold;
}
`,
    },
  }),
};

export const PositionSticky = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Sticky</h2>
        <p>L'élément devient fixe après avoir atteint une position donnée.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;div class="sticky"&gt;Sticky&lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="sticky">Sticky</div>
            <div class="scroll"></div>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .zone {
        height: 15rem;
        overflow-y: scroll;
        border: 1px solid #aaa;
      }
      .scroll { height: 40rem; }
      .sticky {
        position: sticky;
        top: 0;
        background: #90ee90;
        padding: 0.5rem 1rem;
      }
    `,
    ],
    props: {
      code: `
.sticky {
  position: sticky;
  top: 0;
  background: lightgreen;
}
`,
    },
  }),
};

export const PositionComparison = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Comparaison des comportements</h2>

        <code-result [code]="code">
          <span slot="html">
            &lt;div class="arena"&gt;
              &lt;div class="box static"&gt;static&lt;/div&gt;
              &lt;div class="box relative"&gt;relative&lt;/div&gt;
              &lt;div class="box absolute"&gt;absolute&lt;/div&gt;
            &lt;/div&gt;
          </span>

          <div slot="result" class="arena">
            <div class="box static">static</div>
            <div class="box relative">relative</div>
            <div class="box absolute">absolute</div>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .arena {
        position: relative;
        height: 12rem;
        border: 2px dashed #ccc;
        padding: 1rem;
      }
      .box {
        width: 6rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        margin-bottom: 1rem;
        font-size: 1rem;
      }
      .static { background: #555; }
      .relative { background: #007bff; }
      .absolute { background: #e63946; }
    `,
    ],
    props: {
      code: `
.arena {
    position: relative;
    height: 12rem;
    border: 2px dashed #ccc;
    padding: 1rem;
}
.static { position: static; }
.relative { position: relative; top: 1rem; left: 1rem; }
.absolute { position: absolute; top: 2rem; left: 12rem; }
`,
    },
  }),
};
