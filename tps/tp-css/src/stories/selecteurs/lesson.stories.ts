import { CodeResultComponent } from '../../app/components/code-result.component';

export default {
  title: 'Selecteurs/Lesson',
  component: CodeResultComponent,
};

export const Introduction = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Les sélecteurs CSS</h1>
        <p>Les sélecteurs CSS permettent de cibler des éléments HTML pour leur appliquer des styles.</p>

        <h2>Types de sélecteurs</h2>
        <ul>
          <li>Sélecteur de type : <code>p</code>, <code>div</code></li>
          <li>Sélecteur de classe : <code>.box</code></li>
          <li>Sélecteur d'ID : <code>#title</code></li>
          <li>Sélecteur universel : <code>*</code></li>
          <li>Sélecteurs d'attributs : <code>[type="text"]</code></li>
        </ul>
      </div>
    `,
    styles: [
      `
      .lesson { font-family: Arial, sans-serif; line-height: 1.5; }
      code { background: #eee; padding: 0.2rem 0.4rem; border-radius: 3px; }
      ul { margin-top: 1rem; }
    `,
    ],
  }),
};

export const ClassesEtID = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Classes et ID</h2>
        <p>Une classe peut être utilisée sur plusieurs éléments, un ID doit être unique.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;div class="box"&gt;Classe&lt;/div&gt;
            &lt;div id="unique"&gt;ID&lt;/div&gt;
          </span>

          <div slot="result" class="zone">
            <div class="box">Classe</div>
            <div id="unique">ID</div>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .zone { padding: 1rem; display: flex; gap: 1rem; }
      .box { background: #90caf9; padding: 0.5rem 1rem; }
      #unique { background: #f48fb1; padding: 0.5rem 1rem; }
    `,
    ],
    props: {
      code: `
.box { background: lightblue; padding: 0.5rem 1rem; }
#unique { background: pink; padding: 0.5rem 1rem; }
`,
    },
  }),
};

export const Attributs = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Sélecteurs d'attributs</h2>
        <p>Ils ciblent les éléments selon la présence ou la valeur d'un attribut.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;input type="text"&gt;
            &lt;input type="password"&gt;
          </span>

          <div slot="result" class="zone">
            <input type="text">
            <input type="password">
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .zone { padding: 1rem; display: flex; gap: 1rem; }
      input { padding: 0.5rem; border: 2px solid #ccc; }
    `,
    ],
    props: {
      code: `
input[type="text"] { border-color: green; }
input[type="password"] { border-color: red; }
`,
    },
  }),
};

export const PseudoClasses = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Pseudo-classes</h2>
        <p>Permettent de sélectionner des états particuliers d'un élément.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;button&gt;Hover moi&lt;/button&gt;
            &lt;input placeholder="Focus moi"&gt;
          </span>

          <div slot="result" class="zone">
            <button>Hover moi</button>
            <input placeholder="Focus moi">
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .zone { padding: 1rem; display: flex; gap: 1rem; flex-direction: column; }
      button, input { padding: 0.5rem 1rem; font-size: 1rem; }
    `,
    ],
    props: {
      code: `
button:hover { background: #90caf9; }
input:focus { outline: 2px solid #f48fb1; }
`,
    },
  }),
};

export const PseudoElements = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Pseudo-éléments</h2>
        <p>Ils ciblent une partie spécifique d’un élément, comme le premier caractère ou ajouter du contenu avant/après.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;p&gt;Texte exemple&lt;/p&gt;
          </span>

          <div slot="result" class="zone">
            <p>Texte exemple</p>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
          .zone { padding: 1rem; }
          p { font-size: 1rem; }
        `,
    ],
    props: {
      code: `
p::first-letter { font-size: 2rem; color: #f48fb1; }
p::after { content: "→ "; color: #90caf9; }
`,
    },
  }),
};

export const Avances = {
  render: () => ({
    template: `
      <div class="lesson">
        <h2>Sélecteurs avancés</h2>
        <p>CSS moderne permet de simplifier ou filtrer des sélections avec <code>:is()</code>, <code>:not()</code> ou <code>:has()</code>.</p>

        <code-result [code]="code">
          <span slot="html">
            &lt;h1&gt;Titre&lt;/h1&gt;
            &lt;h2&gt;Sous-titre&lt;/h2&gt;
            &lt;h1&gt;Other titre&lt;/h1&gt;
          </span>

          <div slot="result" class="zone">
            <h1>Titre</h1>
            <h2>Sous-titre</h2>
            <h1>Other titre</h1>
          </div>
        </code-result>
      </div>
    `,
    styles: [
      `
      .zone { padding: 1rem; display: flex; gap: 1rem; }
      .zone h1,.zone h2 { margin: 0; padding: 0.5rem 1rem; background: #e0e0e0; font-size: x-large; }
    `,
    ],
    props: {
      code: `
:is(h1, h2) { color: #007bff; font-size: x-large; }
h1:not(:first-child) { color: #f48fb1; }
`,
    },
  }),
};
