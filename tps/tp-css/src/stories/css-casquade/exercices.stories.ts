export default {
  title: 'CSS-Casquade/Exercices',
};

export const Exercice1 = {
  render: () => ({
    template: `
      <p>Changer la couleur de ce texte en vert en ajoutant une ligne de css...</p>
    `,
    styles: [
      `
      p {
        font-size: 1.5em;
        color: red;
      }
    `,
    ],
  }),
};

export const Exercice2 = {
  render: () => ({
    template: `
      <ul>
        <li><span class="b" id="b1">Applique moi un style d'une spécificité de (1,0,0)</span></li>
        <li><span class="b" id="b2">Applique moi un style d'une spécificité de (0,1,0)</span></li>
        <li><span class="b" id="b2">Applique moi un style d'une spécificité de (0,0,1)</span></li>
        <li><span class="b1" id="b1">Applique moi un style d'une spécificité de (1,0,0)</span></li>
        <li><div class="b2" id="b2">Applique moi un style d'une spécificité de (0,1,0)</div></li>
        <li><p class="b3" id="b2">Applique moi un style d'une spécificité de (0,0,1)</p></li>
      </ul>
    `,
    styles: [
      `
      ul {
        line-height: 3em;
        font-size: 2em;
      }
    `,
    ],
  }),
};

export const Exercice3 = {
  render: () => ({
    template: `
      <p>Change la couleur de cette phrase en vert sans déplacer de ligne, modifier une couleur ou ajouter une ligne...</p>
    `,
    styles: [
      `
      p {
        font-size: 1.5em;
        color: green;
        color: red;
      }
    `,
    ],
  }),
};
