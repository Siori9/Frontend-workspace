import { CodeResultComponent } from '../../app/components/code-result.component';

export default {
  title: 'Display/Lesson',
  component: CodeResultComponent,
};

export const Introduction = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Display</h1>    
        <p>Le CSS propose plusieurs modes d’affichage (display modes), qui déterminent comment un élément se comporte dans le flux, comment il prend de la place, et comment il interagit avec les autres éléments.</p>
        <p>
          En CSS, un élément peut être affiché en 
          <code>block</code>, 
          <code>inline</code>, 
          <code>run-in</code>, 
          <code>flow-root</code>, 
          <code>list-item</code>, 
          <code>none</code>, 
          <code>contents</code>, 
          ou utiliser un modèle interne comme 
          <code>flow</code>, 
          <code>table</code>, 
          <code>flex</code>, 
          <code>grid</code>, 
          <code>ruby</code>, 
          <code>table-row</code>, 
          <code>table-cell</code>, 
          <code>table-caption</code>, 
          <code>table-column</code>, 
          <code>table-column-group</code>, 
          <code>table-row-group</code>, 
          <code>table-header-group</code>, 
          <code>table-footer-group</code>, 
          ainsi qu’en versions inline comme 
          <code>inline-block</code>, 
          <code>inline-flex</code>, 
          <code>inline-grid</code> 
          ou <code>inline-table</code>.
        </p>
        <p>Evidemment, seul les display principaux qui sont les plus fréquemment utilisé vous seront présenté dans ce cours : <code>block</code>, <code>inline</code>, <code>flex</code> et <code>grid</code></p>
        <img src="display-illustration.jpg" alt="">
        <h3>Récapitulatif :</h3>
        <table class="table-display">
          <tr>
            <th>display</th>
            <th>width/height</th>
            <th>marge/padding</th>
            <th>va à la ligne</th>
            <th>espace occupé</th>
            <th>usage</th>
          </tr>
        
          <tr>
            <td>block</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>toute largeur</td>
            <td>sections</td>
          </tr>
        
          <tr>
            <td>inline</td>
            <td>✖</td>
            <td>partiel</td>
            <td>✖</td>
            <td>contenu</td>
            <td>texte</td>
          </tr>
        
          <tr>
            <td>inline-block</td>
            <td>✔</td>
            <td>✔</td>
            <td>✖</td>
            <td>contenu</td>
            <td>boutons, badges, éléments alignés</td>
          </tr>
        
          <tr>
            <td>flex</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>toute largeur</td>
            <td>layouts 1D (rangées/colonnes)</td>
          </tr>
        
          <tr>
            <td>inline-flex</td>
            <td>✔</td>
            <td>✔</td>
            <td>✖</td>
            <td>contenu</td>
            <td>flex dans du texte</td>
          </tr>
        
          <tr>
            <td>grid</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>toute largeur</td>
            <td>layouts 2D (grilles)</td>
          </tr>
        
          <tr>
            <td>inline-grid</td>
            <td>✔</td>
            <td>✔</td>
            <td>✖</td>
            <td>contenu</td>
            <td>petites grilles dans du texte</td>
          </tr>
        
          <tr>
            <td>list-item</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>toute largeur</td>
            <td>éléments de liste (puces)</td>
          </tr>
        
          <tr>
            <td>table</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>toute largeur</td>
            <td>comportement type tableau</td>
          </tr>
        
          <tr>
            <td>contents</td>
            <td>✖</td>
            <td>✖</td>
            <td>dépend des enfants</td>
            <td>transparents</td>
            <td>annuler un wrapper</td>
          </tr>
        
          <tr>
            <td>none</td>
            <td>✖</td>
            <td>✖</td>
            <td>✖</td>
            <td>aucun</td>
            <td>cacher un élément</td>
          </tr>
        </table>

      </div>
    `,
    styles: [
      `
            .table-display {
              width: 100%;
              border-collapse: collapse;
              font-size: 0.95rem;
              background: white;
              border-radius: 6px;
              overflow: hidden;
            }
            
            .table-display th {
              text-align: left;
              padding: 0.75rem 1rem;
              font-weight: 600;
              border-bottom: 2px solid #ddd;
              white-space: nowrap;
            }
            
            .table-display td {
              padding: 0.6rem 1rem;
              border-bottom: 1px solid #eee;
            }
            
            .table-display tr:last-child td {
              border-bottom: none;
            }
            
            .table-display td:first-child {
              font-weight: bold;
            }
            
            img {
                max-height: 50rem;
                margin: 1rem auto;
            }
        `,
    ],
  }),
};

export const DisplayBlockInline = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Display : block & inline</h1>

        <p>En CSS, la propriété <code>display</code> détermine la façon dont un élément occupe l'espace.</p>
        
        <h2>1. <code>display: block</code></h2>
        <p>Un élément de type block :</p>
        <ul>
          <li>prend toute la largeur disponible</li>
          <li>revient automatiquement à la ligne</li>
          <li>accepte les propriétés <code>width</code> et <code>height</code></li>
        </ul>

        <code-result [code]="codeBlock">
          <span slot="html">
&lt;div class="block-demo"&gt;Block 1&lt;/div&gt;
&lt;div class="block-demo"&gt;Block 2&lt;/div&gt;
          </span>
          <div slot="result" id="zone">
            <div class="block-demo">Block 1</div>
            <div class="block-demo">Block 2</div>
          </div>
        </code-result>

        <h2>2. <code>display: inline</code></h2>
        <p>Un élément de type inline :</p>
        <ul>
          <li>ne va pas à la ligne automatiquement</li>
          <li>ne prend que la place de son contenu</li>
          <li>ignore totalement <code>width</code> et <code>height</code></li>
        </ul>

        <code-result [code]="codeInline">
          <span slot="html">
&lt;span class="inline-demo"&gt;Inline 1&lt;/span&gt;
&lt;span class="inline-demo"&gt;Inline 2&lt;/span&gt;
&lt;span class="inline-demo"&gt;Inline 3&lt;/span&gt;
          </span>
          <div slot="result">
            <span class="inline-demo">Inline 1</span>
            <span class="inline-demo">Inline 2</span>
            <span class="inline-demo">Inline 3</span>
          </div>
        </code-result>
        
        <h2>3. <code>display: inline-block</code></h2>
        <p>Un élément en inline-block :</p>
        <ul>
          <li>reste sur la même ligne (comme inline)</li>
          <li>accepte <code>width</code> et <code>height</code> (comme block)</li>
          <li>est souvent utilisé pour créer des boutons, badges ou mini-cartes</li>
        </ul>
        
        <code-result [code]="codeInlineBlock">
          <span slot="html">
        &lt;span class=&quot;inline-block-demo&quot;&gt;Box 1&lt;/span&gt;
        &lt;span class=&quot;inline-block-demo&quot;&gt;Box 2&lt;/span&gt;
        &lt;span class=&quot;inline-block-demo&quot;&gt;Box 3&lt;/span&gt;
          </span>
          <div slot="result">
            <span class="inline-block-demo">Box 1</span>
            <span class="inline-block-demo">Box 2</span>
            <span class="inline-block-demo">Box 3</span>
          </div>
        </code-result>
        
        <h2>Comparaison : <code>block</code> vs <code>inline</code> vs <code>inline-block</code></h2>
<p>Voici un aperçu visuel des différences entre les 3 types d'affichage :</p>

<code-result [code]="codeComparison">
  <span slot="html">
&lt;div class="demo-block"&gt;Block 1&lt;/div&gt;
&lt;div class="demo-block"&gt;Block 2&lt;/div&gt;

&lt;span class="demo-inline"&gt;Inline 1&lt;/span&gt;
&lt;span class="demo-inline"&gt;Inline 2&lt;/span&gt;

&lt;span class="demo-inline-block"&gt;Inline-block 1&lt;/span&gt;
&lt;span class="demo-inline-block"&gt;Inline-block 2&lt;/span&gt;
  </span>

  <div slot="result" class="comparison-area">

    <h3>display: block</h3>
    <div>
      <div class="block-demo">Block 1</div>
      <div class="block-demo">Block 2</div>
    </div>

    <h3>display: inline</h3>
    <div>
      <span class="inline-demo">Inline 1</span>
      <span class="inline-demo">Inline 2</span>
    </div>

    <h3>display: inline-block</h3>
    <div>
      <span class="inline-block-demo">Inline-block 1</span>
      <span class="inline-block-demo">Inline-block 2</span>
    </div>

  </div>
</code-result>


      </div>
    `,
    standalone: true,
    imports: [CodeResultComponent],
    styles: [
      `
        .lesson ul {
          margin-bottom: 1rem;
        }

        /* BLOCK */
        .block-demo {
          margin: 0.25rem 0;
          border-radius: 0.25rem;
          font-size: x-large;
        }

        /* INLINE */
        .inline-demo {
          margin-right: 0.5rem;
          font-size: x-large;
          border-radius: 0.25rem;
        }
        
        .inline-block-demo {
          margin-right: 0.5rem;
          border-radius: 0.25rem;
          font-size: x-large;
        }

        .comparison-area {
          border: 1px dashed #999;
          padding: 1rem;
          background: #f8f8f8;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .comparison-area h3 {
          margin: 0;
          font-size: 1rem;
          color: #555;
        }
        `,
    ],
    props: {
      codeBlock: `
.block-demo {
    display: block;
    width: 12rem;
    height: 3rem;
    background: #4a90e2;
    color: white;
    padding: 0.5rem;
}
            `,
      codeInline: `
.inline-demo {
    display: inline;
    background: #e24a4a;
    color: white;
    padding: 0.25rem 0.5rem;
    width: 12rem; /* ignoré */
    height: 3rem; /* ignoré */
}
            `,
      codeInlineBlock: `
.inline-block-demo {
    display: inline-block;
    background: #8E44AD;
    color: white;
    padding: 0.5rem 1rem;
    width: 8rem;
    height: 3rem;
}
            `,

      codeComparison: `
.block-demo {
    display: block;
    width: 12rem;
    height: 3rem;
    background: #4a90e2;
    color: white;
    padding: 0.5rem;
}
.inline-demo {
    display: inline;
    width: 12rem; /* ignoré */
    height: 3rem; /* ignoré */
    background: #e24a4a;
    color: white;
    padding: 0.25rem 0.5rem;
}
.inline-block-demo {
    display: inline-block;
    width: 10rem;
    height: 3rem;
    background: #8E44AD;
    color: white;
    padding: 0.5rem 1rem;
}
            `,
    },
  }),
};

export const Flexbox = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Flexbox — L'essentiel</h1>
        <p>
          Flexbox permet d’organiser facilement des éléments sur un axe, et de contrôler
          l’alignement, l’espace et la direction. Il s’active simplement en ajoutant 
          <code>display: flex</code> sur un conteneur.
        </p>
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Documentation - CSS Flexbox Layout Guide</a>

        <h2>1. Activer flex</h2>

        <code-result [code]="codeActivation">
          <span slot="html">&lt;div class=&quot;flex-parent&quot;&gt;&lt;div&gt;1&lt;/div&gt;&lt;div&gt;2&lt;/div&gt;&lt;div&gt;3&lt;/div&gt;&lt;/div&gt;</span>
          <div slot="result">
            <div class="flex-parent demo1">
              <div>1</div><div>2</div><div>3</div>
            </div>
          </div>
        </code-result>

        <h2>2. Direction de l’axe</h2>
        <p><code>flex-direction</code> contrôle l’orientation du flux.</p>

        <code-result [code]="codeDirection">
          <span slot="html">
&lt;div class="dir row"&gt;&lt;div&gt;A&lt;/div&gt;&lt;div&gt;B&lt;/div&gt;&lt;div&gt;C&lt;/div&gt;&lt;/div&gt;
&lt;div class="dir col"&gt;&lt;div&gt;A&lt;/div&gt;&lt;div&gt;B&lt;/div&gt;&lt;div&gt;C&lt;/div&gt;&lt;/div&gt;
          </span>

          <div slot="result" class="direction-zone">
            <div class="dir row"><div>A</div><div>B</div><div>C</div></div>
            <div class="dir col"><div>A</div><div>B</div><div>C</div></div>
          </div>
        </code-result>

        <h2>3. Alignement</h2>
        <p><code>justify-content</code> = axe principal • <code>align-items</code> = axe secondaire</p>

        <code-result [code]="codeAlign">
          <span slot="html">
&lt;div class="align"&gt;
  &lt;div&gt;1&lt;/div&gt;&lt;div&gt;2&lt;/div&gt;&lt;div&gt;3&lt;/div&gt;
&lt;/div&gt;
          </span>

          <div slot="result">
            <div class="align demo-align">
              <div>1</div><div>2</div><div>3</div>
            </div>
          </div>
        </code-result>

      </div>
    `,
    standalone: true,
    imports: [CodeResultComponent],
    styles: [
      `
      /* Generic flex containers */
      .flex-parent, .dir, .align {
        display: flex;
        gap: 0.5rem;
        background: #eee;
        padding: 1rem;
        border: 1px solid #ccc;
      }

      /* Items */
      .flex-parent div, .dir div, .align div {
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
      }

      /* Direction */
      .dir.row { flex-direction: row; }
      .dir.col { flex-direction: column; }

      .direction-zone {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
      }
      
        .demo-align {
          width: 20rem;
          height: 160px;
          padding: 1rem;
          border: 2px dashed #aaa;
        
          /* --- GRID COMPLET + LIGNES CENTRALES --- */
          background:
            /* ligne centrale horizontale */
            linear-gradient(
              to bottom,
              transparent calc(50% - 1px),
              #ff000066 calc(50% - 1px) calc(50% + 1px),
              transparent calc(50% + 1px)
            ),
            /* ligne centrale verticale */
            linear-gradient(
              to right,
              transparent calc(50% - 1px),
              #ff000066 calc(50% - 1px) calc(50% + 1px),
              transparent calc(50% + 1px)
            ),
            /* quadrillage horizontal */
            linear-gradient(#00000010 1px, transparent 1px),
            /* quadrillage vertical */
            linear-gradient(90deg, #00000010 1px, transparent 1px);
        
          background-size:
            100% 100%,   /* ligne horizontale */
            100% 100%,   /* ligne verticale */
            20px 20px,   /* quadrillage horizontal */
            20px 20px;   /* quadrillage vertical */
        
          background-position: 0 0;
          background-color: #fafafa;
        }


        
        .demo-align div {
          width: 60px;
          height: 60px;
          background: #3498db;
          color: white;
          font-weight: bold;
        
          display: flex;
          align-items: center;
          justify-content: center;
        
          border-radius: 8px;
        }
    `,
    ],
    props: {
      codeActivation: `
.flex-parent {
  display: flex;
  gap: 0.5rem;
}
      `,
      codeDirection: `
.dir {
  display: flex;
  gap: 0.5rem;
}
.dir.row { flex-direction: row; }
.dir.col { flex-direction: column; }
      `,
      codeAlign: `
.align {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem
  height: 80px;
  border: 1px solid #ccc;
}
      `,
    },
  }),
};

export const Grid = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>CSS Grid</h1>
        <p>CSS Grid permet de créer des mises en page en deux dimensions : lignes et colonnes.</p>
        <p>On définit un conteneur grid avec <code>display: grid</code> et on positionne les items avec <code>grid-template-columns</code> et <code>grid-template-rows</code>.</p>
        <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">Documentation - CSS Grid Layout Guide</a>

        <code-result [code]="codebase">
          <div slot="html">&lt;div class="grid-container"&gt;&lt;div class="grid-item"&gt;1&lt;/div&gt;...&lt;/div&gt;</div>
          <div slot="result">
            <div class="grid-container">
              <div class="grid-item">1</div>
              <div class="grid-item">2</div>
              <div class="grid-item">3</div>
              <div class="grid-item">4</div>
              <div class="grid-item">5</div>
              <div class="grid-item">6</div>
            </div>
          </div>
        </code-result>
        
        <h2><ul><li>grid-template-areas</li></ul></h2>
        <p>On peut nommer les zones de la grille pour positionner facilement les éléments.</p>

        <code-result [code]="codeAreas">
          <div slot="html">&lt;div class="grid-container-areas"&gt;&lt;div class="header"&gt;Header&lt;/div&gt;...&lt;/div&gt;</div>
          <div slot="result">
            <div class="grid-container-areas">
              <div class="header">Header</div>
              <div class="sidebar">Sidebar</div>
              <div class="content">Content</div>
              <div class="footer">Footer</div>
            </div>
          </div>
        </code-result>
      </div>
    `,
    standalone: true,
    imports: [CodeResultComponent],
    styles: [
      `
          .grid-container-areas {
            width: 20rem;
            border: 2px dashed #aaa;
            padding: 1rem;
            background: #fafafa;
          }
    
          .grid-container-areas > div {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 1rem;
            border-radius: 4px;
          }
    
          .header { background: #007bff; }
          .sidebar { background: #28a745; }
          .content { background: #ffc107; color: black; }
          .footer { background: #6c757d; }
        `,
    ],
    props: {
      codebase: `
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 5rem;
  gap: 0.5rem;
  width: 20rem;
  border: 2px dashed #aaa;
  padding: 1rem;
}

.grid-item {
  background: #007bff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}
      `,
      codeAreas: `
.grid-container-areas {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 50px 150px 50px;
  gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
          `,
    },
  }),
};
