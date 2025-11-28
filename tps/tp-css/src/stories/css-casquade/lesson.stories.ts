import { CodeResultComponent } from '../../app/components/code-result.component';

export default {
  title: 'CSS-Casquade/Lesson',
  component: CodeResultComponent,
};

export const Introduction = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>La cascade</h1>
        <p>CSS signifie "Cascading Style Sheets" (feuilles de style en cascade).</p>
        <p>La cascade est l'algorithme permettant de résoudre les conflits lorsque plusieurs règles CSS s'appliquent à un élément HTML.</p>

        <p>Comprendre l'algorithme de cascade vous aide à comprendre comment le navigateur résout les conflits de ce type. L'algorithme en cascade se divise en quatre étapes distinctes.<p>
        <ol>
            <li><b>Position et ordre d'affichage</b> : ordre dans lequel vos règles CSS s'affichent</li>
            <li><b>Spécificité</b> : algorithme qui détermine le sélecteur CSS qui correspond le mieux</li>
            <li><b>Origine</b> : ordre d'apparition du CSS et origine, qu'il s'agisse d'un style de navigateur, de CSS provenant d'une extension de navigateur ou de votre CSS créé</li>
            <li><b>Importance</b> : certaines règles CSS sont plus pondérées que d'autres, en particulier avec le type de règle !important.</li>
        </ol>
      </div>
    `,
  }),
};

export const Position = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Ordre</h1>
        <p>L'ordre dans lequel vos règles CSS apparaissent et la façon dont elles apparaissent sont pris en compte par la cascade lors du calcul de la résolution des conflits. Il s'agit de la dernière étape de la cascade, qui aboutit toujours à une seule déclaration gagnante. Toutefois, la position n'est prise en compte que si des styles en conflit persistent après que toutes les autres étapes de la cascade ont été prises en compte.</p>
        <p>Dans le cas où la position est prise en compte, la dernière règle gagne toujours.</p>
        <code-result [code]="code">
          <span slot="html">&lt;button&gt;Click Me&lt;/button&gt;</span>
          <button slot="result">Click Me</button>
        </code-result>
      </div>
    `,
    standalone: true,
    imports: [CodeResultComponent],
    props: {
      code: `
button {
  color: red;
}

button {
  color: blue;
}
      `,
    },
  }),
};

export const Spécificité = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Spécificité</h1>
        <p>La spécificité est l’algorithme que CSS utilise pour décider quelle règle l’emporte lorsqu’il y a plusieurs règles qui ciblent le même élément.</p>
        <p>Chaque sélecteur CSS reçoit un score de spécificité basé sur quatre catégories, souvent notées <code>(a,b,c)</code> :</p>
        <ol type="a">
          <li><b>ID</b> : <code>#menu</code> → (1,0,0)</li>
          <li><b>Classes, attributs, pseudo-classes</b> : <code>.btn</code>, <code>[type="text"]</code>, <code>:hover</code> → (0,1,0)</li>
          <li><b>Élément ou pseudo-élément</b> : <code>div</code>, <code>p</code>, <code>::before</code> → (0,0,1)</li>
        </ol>
        <ul>
          <li>Plus le chiffre à gauche est élevé, plus la règle est spécifique.</li>
          <li>Les règles avec la même spécificité suivent l’ordre dans le CSS : la dernière règle l’emporte.</li>
        </ul>
        <img src="specificity-illustration.svg" alt="">
        <h1>Comparer les spécificités</h1>
        <p>Les spécificités sont comparées en comparant les trois composants dans l'ordre suivant : la spécificité avec une valeur A plus élevée est plus spécifique ; si les deux valeurs A sont identiques, la spécificité avec une valeur B plus élevée est plus spécifique ; si les deux valeurs B sont également identiques, la spécificité avec une valeur C plus élevée est plus spécifique ; si toutes les valeurs sont identiques, les deux spécificités sont égales.</p>
        <p>Par exemple, (1,0,0) est considéré comme plus spécifique que (0,4,3), car la valeur A dans (1,0,0) (qui est 1) est supérieure à la valeur A de (0,4,3) (qui est 0).</p>

        <code-result [code]="code">
          <span slot="html">&lt;span class="text" id="main"&gt;Hello&lt;/span&gt;</span>
          <span slot="result" class="text" id="main">Hello</span>
        </code-result>
      </div>
    `,
    standalone: true,
    imports: [CodeResultComponent],
    props: {
      code: `
/* Spécificité : 0,0,0,1 */
span {
  color: blue;
}

/* Spécificité : 0,0,1,0 */
.text {
  color: red;
}

/* Spécificité : 0,1,0,0 */
#main {
  color: green;
}
      `,
    },
  }),
};

export const OrigineEtImportance = {
  render: () => ({
    template: `
      <div class="lesson">
        <h1>Origine et importance des sources</h1>
        <p>Le code CSS que vous écrivez n'est pas le seul CSS appliqué à une page. La cascade tient compte de l'origine du CSS. Cette origine inclut la feuille de style interne du navigateur, les styles ajoutés par les extensions du navigateur ou le système d'exploitation, ainsi que votre CSS créé. L'ordre de spécificité de ces origines, de la moins spécifique à la plus spécifique, est le suivant :</p>
        <ul>
          <li><b>Styles de base de l'user-agent</b> : Il s'agit des styles que votre navigateur applique aux éléments HTML par défaut.</li>
          <li><b>Styles utilisateur locaux</b> : Ils peuvent provenir du niveau du système d'exploitation, comme une taille de police de base ou une préférence pour une réduction du mouvement. Ils peuvent également provenir d'extensions de navigateur, par exemple d'une extension permettant à un utilisateur d'écrire son propre CSS personnalisé pour une page Web.</li>
          <li><b>CSS créé par l'auteur</b> : Le CSS que vous créez.</li>
          <li><b>!important auteur</b> : Tout !important que vous ajoutez à vos déclarations créées par l'auteur.</li>
          <li><b>Styles utilisateur locaux !important</b> : Tout !important provenant du niveau du système d'exploitation ou du CSS au niveau de l'extension du navigateur.</li>
          <li><b>User-agent !important</b> : Tous les !important définis dans le CSS par défaut, fourni par le navigateur.</li>
        </ul>
        <img src="cascade-illustration.svg" alt="">
        <code-result [code]="code">
          <span slot="html">&lt;span&gt;Hello&lt;/span&gt;</span>
          <span slot="result">Hello</span>
        </code-result>
      </div>
    `,
    standalone: true,
    imports: [CodeResultComponent],
    props: {
      code: `
/* User stylesheet */
span {
  color: green !important;
}

/* Author stylesheet */
span {
  color: blue;
}
      `,
    },
  }),
};
