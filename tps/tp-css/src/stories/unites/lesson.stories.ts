import { CodeResultComponent } from '../../app/components/code-result.component';

export default {
  title: 'Unites/Lesson',
  component: CodeResultComponent,
};

export const Introduction = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Les unités CSS</h1>
        <p>Les unités définissent les tailles en CSS : largeurs, hauteurs, marges, polices, etc.</p>

        <h2>Deux grandes familles</h2>
        
        <table class="table">
          <tr><th>Type</th><th>Description</th></tr>
          <tr>
            <td><strong>Unités absolues</strong></td>
            <td>Valeurs fixes, ne dépendent pas du contexte : <code>px</code>, <code>cm</code>, <code>mm</code>, <code>in</code>.</td>
          </tr>
          <tr>
            <td><strong>Unités relatives</strong></td>
            <td>Dépendent d’un autre élément ou du viewport : <code>%</code>, <code>em</code>, <code>rem</code>, <code>vh</code>, <code>vw</code>.</td>
          </tr>
        </table>

        <p>Elles permettent de créer des interfaces <strong>flexibles et responsives</strong>.</p>
        
        <img src="unites.png" alt="">
      </div>
    `,
    styles: [
      `
      .table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
      th, td { border: 1px solid #ddd; padding: 0.5rem; }
      th { background: #eee; }
      img { margin-top: 2rem; }
    `,
    ],
  }),
};

export const UnitesAbsolues = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Unités absolues : px</h2>
        <p><code>px</code> est l'unité la plus utilisée : elle représente un pixel de l'écran.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;div class="box small"&gt;50px&lt;/div&gt;
            &lt;div class="box large"&gt;150px&lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="box small">50px</div>
            <div class="box large">150px</div>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .zone { display: flex; gap: 1rem; padding: 1rem; }
      .box {
        background: #90caf9;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
      }
      .small { width: 50px; height: 50px; }
      .large { width: 150px; height: 150px; }
    `,
    ],
    props: {
      code: `
.small { width: 50px; height: 50px; }
.large { width: 150px; height: 150px; }
`,
    },
  }),
};

export const EmRem = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Unités relatives : em et rem</h2>

        <p><code>em</code> dépend de la taille de police du PARENT.</p>
        <p><code>rem</code> dépend de la taille de police ROOT (html).</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;div class="parent"&gt;
              Parent (font-size: 20px)
              &lt;div class="child em"&gt;2em&lt;/div&gt;
              &lt;div class="child rem"&gt;2rem&lt;/div&gt;
            &lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="parent">
              Parent (20px)
              <div class="child em">2em</div>
              <div class="child rem">2rem</div>
            </div>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      html { font-size: 16px; }
      .zone { padding: 2rem; }
      .parent {
        font-size: 20px;
        background: #e0f7fa;
        padding: 1rem;
      }
      .child {
        background: #ffab91;
        padding: .5rem;
        margin-top: .5rem;
        color: white;
        font-weight: bold;
      }
      .em { font-size: 2em; }
      .rem { font-size: 2rem; }
    `,
    ],
    props: {
      code: `
.parent { font-size: 20px; }
.em { font-size: 2em; }
.rem { font-size: 2rem; }
`,
    },
  }),
};

export const VhVw = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Unités relatives au viewport : vh / vw</h2>
        <p>1vh = 1% de la hauteur de l’écran.  
        1vw = 1% de la largeur de l’écran.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;div class="bloc"&gt;20vh × 40vw&lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="bloc">20vh × 40vw</div>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .zone { padding: 1rem; }
      .bloc {
        background: #a5d6a7;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
    ],
    props: {
      code: `
.bloc {
  width: 40vw;
  height: 20vh;
  background: lightgreen;
}
`,
    },
  }),
};

export const Pourcentage = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Pourcentage : %</h2>
        <p>Le pourcentage dépend de la taille de l’élément parent.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;div class="parent"&gt;
              &lt;div class="child"&gt;50%&lt;/div&gt;
            &lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="parent">
              <div class="child">50%</div>
            </div>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .parent {
        width: 20rem;
        height: 10rem;
        background: #d1c4e9;
        padding: 1rem;
      }
      .child {
        width: 50%;
        height: 50%;
        background: #9575cd;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
    ],
    props: { code: `.child { width: 50%; height: 50%; }` },
  }),
};

export const UnitesModernes = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Unités modernes : <code>min()</code>, <code>max()</code> et <code>clamp()</code></h2>

        <p>Ces fonctions CSS permettent de créer des tailles <strong>flexibles</strong>, <strong>réactives</strong> et <strong>intelligentes</strong> sans avoir à écrire plusieurs media queries.</p>

        <h3>1. <code>min(a, b)</code></h3>
        <p>Renvoie la plus petite des deux valeurs. Très utile pour limiter une taille maximale.</p>

        <code-result [code]="codeMin">
          <span slot="html">
            &lt;div class="demo-min"&gt;min(50%, 200px)&lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="demo-min">min(50%, 200px)</div>
          </div>
        </code-result>

        <h3>2. <code>max(a, b)</code></h3>
        <p>Renvoie la plus grande des valeurs. Utile pour garantir une taille minimale.</p>

        <code-result [code]="codeMax">
          <span slot="html">
            &lt;div class="demo-max"&gt;max(10vw, 150px)&lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="demo-max">max(10vw, 150px)</div>
          </div>
        </code-result>

        <h3>3. <code>clamp(min, ideal, max)</code></h3>
        <p>La valeur idéale est utilisée tant qu’elle reste entre le minimum et le maximum définis. Parfait pour les polices ou blocs responsives.</p>

        <code-result [code]="codeClamp">
          <span slot="html">
            &lt;div class="demo-clamp"&gt;clamp(1rem, 5vw, 3rem)&lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="demo-clamp">clamp(1rem, 5vw, 3rem)</div>
          </div>
        </code-result>

      </div>
    `,
    styles: [
      `
      .lesson h3 { margin-top: 1.5rem; }

      .zone {
        padding: 1rem 0;
      }

      .demo-min, .demo-max, .demo-clamp {
        background: #e3f2fd;
        border: 1px solid #90caf9;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
      }
    `,
    ],
    props: {
      codeMin: `
.demo-min {
  width: min(50%, 200px);
  background: lightblue;
}
`,
      codeMax: `
.demo-max {
  width: max(10vw, 150px);
  background: lightblue;
}
`,
      codeClamp: `
.demo-clamp {
  font-size: clamp(1rem, 5vw, 3rem);
  background: lightblue;
}
`,
    },
  }),
};
