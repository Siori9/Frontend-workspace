import { CodeResultComponent } from '../../app/components/code-result.component';

export default {
  title: 'Box-Model/Lesson',
  component: CodeResultComponent,
};

export const Introduction = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Box model</h1>    
        <p>Le <b>Box Model</b> représente la structure de chaque élément HTML comme une boîte composée de quatre zones :</p>
        <ul>
            <li><b>content</b> – le contenu (texte, image…)</li>
            <li><b>padding</b> – espace à l’intérieur, autour du contenu</li>
            <li><b>border</b> – la bordure de l’élément</li>
            <li><b>margin</b> – espace à l’extérieur, entre l’élément et les autres</li>
        </ul>
        <img src="css-box-model.svg" alt="">
      </div>
    `,
  }),
};

export const BorderBox = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Border box</h1>
        <p>En CSS, le calcul de taille dépend de box-sizing.</p>
        <h3>- <code>boc-sizing: content-box</code></h3>
        <p>Par défaut, box-sizing a pour valeur content-box, c'est à dire que la propriété width correspond seulement au contenu.</p>
        <p>En résumé : <code>total = width + padding + border</code></p>
        <h3>- <code>boc-sizing: border-box</code></h3>
        <p>Dans le cas où box-sizing a pour valeur border-box, la propriété width inclut le padding et la border.</p>
        <p>En résumé : <code>total = width</code></p>
        <code-result [code]="code">
          <span slot="html">&lt;div id="id1" class="box"&gt;...&lt;/div&gt;  &lt;div id="id2" class="box"&gt;...&lt;/div&gt;</span>
          <div slot="result" id="zone">
            <div class="ruler">
                <div style="width: 2rem">2rem</div>
                <div style="width: 2rem">2rem</div>
                <div style="width: 15rem">15rem</div>
                <div style="width: 2rem">2rem</div>
                <div style="width: 2rem">2rem</div>
            </div>
            <div id="id1" class="box"><div class="content">1</div></div>
            <div id="id2" class="box"><div class="content">2</div></div>
            <div class="test"></div>
          </div>
        </code-result>
      </div>
    `,
    standalone: true,
    imports: [CodeResultComponent],
    styles: [
      `
        #zone {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
        }
        .ruler {
            height: 1.5rem;
            background-color: #001C4F; 
            color: white;
            text-align: center;
            font-size: 0.75rem;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .ruler div {
            border: 0.5px solid white;
        }
        .content {
            background: red;
            width: 100%;
            height: 100%;
            font-size: 0.5rem;
            text-align: center;
        }
        .box .content{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }
        `,
    ],
    props: {
      code: `
.content {
    background: red;
    width: 100%;
    height: 100%;
}
.box {
    width: 15rem;
    height: 8rem;
    padding: 1rem 2rem;
    border-width: 0.75rem 2rem;
    border-style: solid;
    border-color: green;
    background: blue;
}            
#id1 {
    box-sizing: content-box;
}
#id2 {
    box-sizing: border-box;
}
            `,
    },
  }),
};
