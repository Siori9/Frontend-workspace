export default {
  title: 'Box-Model/Exercices',
};

export const Exercice1 = {
  render: () => ({
    template: `
      <p class="instructions">Affichez un carré rouge de taille 10 rem avec une bordure de 2px</p>
      <div id="box"></div>
    `,
    styles: [
      `
        .instructions {
          padding: 1rem;
          border: 1px solid black;
          border-radius: 5px;
          font-size: 1.5em;
        }
        #box {
          width: 5rem;
          height: 5rem;
          background-color: red;
          }
        `,
    ],
  }),
};

export const Exercice2 = {
  render: () => ({
    template: `
      <div class="instructions">
        <ul>
          <li>Affichez un carré rouge avec une marge de 2rem</li>
          <li>Agrandit sa taille de 2rem sans toucher aux propriétés width et height</li>
        </ul>
      </div>
      <div id="container"><div id="box"></div></div>
    `,
    styles: [
      `
        .instructions {
          padding: 0.5rem;
          border: 1px solid black;
          border-radius: 5px;
          margin-bottom: 3rem;
        }
        .instructions li {
          font-size: 1.5em;
          margin: 1rem;
        }
        #container {
          width: 20rem;
          height: 20rem;
          background-color: darkgray;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
        }
        #box {
          width: 5rem;
          height: 5rem;
          background-color: red;
        }
        `,
    ],
  }),
};

export const Exercice3 = {
  render: () => ({
    template: `
      <div class="instructions">
        <ul>
          <li>Ajoute au carré bleu une bordure de 1rem et un padding de 2rem</li>
          <li>Fait en sorte que le carré bleu occupe la même place que le rouge sans modifier ses propriétés width et height</li>
        </ul>
      </div>
      <div id="container">
        <div id="red-box" class="box"></div>
        <div id="blue-box" class="box"></div>
      </div>
    `,
    styles: [
      `
        .instructions {
          padding: 0.5rem;
          border: 1px solid black;
          border-radius: 5px;
          margin-bottom: 3rem;
        }
        .instructions li {
          font-size: 1.5em;
          margin: 1rem;
        }
        #container {
          width: 20rem;
          height: 10rem;
          background-color: darkgray;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
        }
        .box {
          width: 7rem;
          height: 7rem;
        }
        #blue-box {
          background-color: blue;
        }
        #red-box {
          background-color: red;
        }
        `,
    ],
  }),
};
