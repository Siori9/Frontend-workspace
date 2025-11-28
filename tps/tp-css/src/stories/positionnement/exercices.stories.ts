export default {
  title: 'Positionnement/Exercices',
};

export const Exercice1 = {
  render: () => ({
    template: `
      <p class="instructions">Placez le carré bleu dans le coin bas-droit du rectangle gris.</p>
      <div class="container"><div id="box"></div></div>
    `,
    styles: [
      `
      .instructions { padding: 1rem; border: 1px solid black; border-radius: 5px; font-size: 1.5em; }
      .container {
        background-color: lightgray;
        height: 10rem;
        padding: 1rem;
        position: relative;
      }
      #box {
        width: 3rem;
        height: 3rem;
        background-color: blue;
      }
    `,
    ],
  }),
};

export const Exercice2 = {
  render: () => ({
    template: `
      <p class="instructions">Faites en sorte que la barre jaune reste fixée en haut de l'écran même quand on scrolle.</p>
      <div class="container">
        <div id="bar"></div>
        <div class="long"></div>
      </div>
    `,
    styles: [
      `
      .instructions { padding: .7rem 1rem; border: 1px solid black; border-radius: 5px; font-size: 1.5em; }
      .container { height: 20rem; overflow-y: scroll; border: 1px solid #aaa; }
      .long { height: 60rem; background: #eee; }
      #bar {
        background: gold;
        height: 3rem;
      }
    `,
    ],
  }),
};

export const Exercice3 = {
  render: () => ({
    template: `
      <p class="instructions">Faites en sorte que le carré bleu passe au-dessus du carré rouge.</p>
      <div class="container">
        <div id="blue"></div>
        <div id="red"></div>
      </div>
    `,
    styles: [
      `
      .instructions { padding: .7rem 1rem; border: 1px solid black; border-radius: 5px; font-size: 1.5em; }
      .container { position: relative; height: 10rem; }
      #red, #blue { position: absolute; width: 6rem; height: 6rem; }
      #red { background: red; top: 1rem; left: 1rem; }
      #blue { background: blue; top: 2rem; left: 2rem; }
    `,
    ],
  }),
};
