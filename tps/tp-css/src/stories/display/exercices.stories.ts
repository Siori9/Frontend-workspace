export default {
  title: 'Display/Exercices',
};

export const Exercice1 = {
  render: () => ({
    template: `
      <p class="instructions">Centrez le carré rouge horizontalement</p>
      <div class="container"><div id="box"></div></div>
    `,
    styles: [
      `
        .instructions {
          padding: 1rem;
          border: 1px solid black;
          border-radius: 5px;
          font-size: 1.5em;
        }
        .container {
          background-color: lightgray;
          padding: 1rem;
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
      <p class="instructions">Afficher le même template que sur l'image ci-dessous</p>
      <div class="result">
          <div class="container">
            <div id="box1"></div>
            <div id="box2"></div>
            <div id="box3"></div>
            <div id="box4"></div>
            <div id="box5"></div>
          </div>
          <img src="displayEx2.png">
      </div>
    `,
    styles: [
      `
        .instructions {
          padding: 1rem;
          border: 1px solid black;
          border-radius: 5px;
          font-size: 1.5em;
        }
        .result {
          display: flex;
        }
        .result img {
          height: 10rem;
          border: solid 1px black;
        }
        .container {
          width: 80%;
        }
        #box1 {}
        #box2 {}
        #box3 {}
        #box4 {}
        #box5 {}
        `,
    ],
  }),
};

export const Exercice3 = {
  render: () => ({
    template: `
      <p class="instructions">Afficher le même template que sur l'image ci-dessous</p>
      <div class="result">
          <div class="container">
            <div id="box1"></div>
            <div id="box2"></div>
            <div id="box3"></div>
            <div id="box4"></div>
            <div id="box5"></div>
          </div>
          <img src="displayEx3.png">
      </div>
    `,
    styles: [
      `
        .instructions {
          padding: 1rem;
          border: 1px solid black;
          border-radius: 5px;
          font-size: 1.5em;
        }
        .result {
          display: flex;
        }
        .result img {
          height: 10rem;
          border: solid 1px black;
        }
        .container {
          width: 80%;
          height: 10rem;
        }
        .container div {
          background-color: purple;
          height: 5rem;
          width: 5rem;
        }
        `,
    ],
  }),
};
