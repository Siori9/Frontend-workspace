export default {
  title: 'Unites/Exercices',
};

export const Exercice1 = {
  render: () => ({
    template: `
      <p class="instructions">
        Le but est de rendre le titre et le bloc violet lisibles sur tous les écrans.
        Le titre doit avoir une taille qui s'adapte à la taille de la fenêtre
        tout en restant raisonnable.
        Le bloc violet doit s’agrandir en fonction de sa zone parent,
        sans jamais dépasser cette zone.
      </p>

      <div class="wrapper">
        <h1 class="title">Titre Responsive</h1>
        <div class="box"></div>
      </div>
    `,
    styles: [
      `
      .instructions { 
        padding: 1rem; 
        border: 1px solid black; 
        border-radius: 5px; 
        font-size: 1.4em; 
      }
      .wrapper {
        border: 2px solid #888;
        padding: 1rem;
        width: 70%;
        height: 15rem;
        margin: auto;
      }
      .title {
        margin-bottom: 1rem;
      }
      .box {
        background: #ba68c8;
        height: 6rem;
      }
    `,
    ],
  }),
};

export const Exercice2 = {
  render: () => ({
    template: `
      <p class="instructions">
        Faites en sorte que la carte et son contenu restent proportionnels,
        peu importe la taille de l'écran.
        L’image doit conserver ses proportions et ne jamais déborder.
        Le texte doit pouvoir grossir ou rétrécir suivant l’espace disponible.
      </p>

      <div class="card">
        <img src="https://picsum.photos/300" class="card-img" />
        <p class="card-text">Lorem ipsum dolor sit amet.</p>
      </div>
    `,
    styles: [
      `
      .instructions { 
        padding: 1rem; 
        border: 1px solid black; 
        border-radius: 5px; 
        font-size: 1.4em; 
      }
      .card {
        border: 1px solid #aaa;
        padding: 1rem;
        width: 20rem;
      }
      .card-img {
        display: block;
        margin: auto;
      }
      .card-text {
        text-align: center;
      }
    `,
    ],
  }),
};

export const Exercice3 = {
  render: () => ({
    template: `
      <div class="instructions">
        Organisez les trois sections pour qu'elles s'adaptent à la fenêtre :
        <ul>
            <li>La zone du haut doit garder une hauteur visible mais ne jamais prendre trop de place.</li>
            <li>La zone du milieu doit occuper tout l’espace restant.</li>
            <li>La zone du bas doit garder une hauteur proportionnelle à sa largeur.</li>
        </ul>
        Le texte doit rester lisible dans toutes les sections.
      </div>

      <div class="layout">
        <header class="top">Zone haute</header>
        <main class="middle">Zone milieu</main>
        <footer class="bottom">Zone basse</footer>
      </div>
    `,
    styles: [
      `
      .instructions { 
        padding: 1rem;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 1.4em;
        margin-bottom: 1rem;
      }

      .layout {
        border: 2px solid #777;
        display: grid;
        height: 30rem; /* volontaire : à adapter */
      }

      .top {
        background: #ffab91;
      }
      .middle {
        background: #90caf9;
      }
      .bottom {
        background: #a5d6a7;
      }
    `,
    ],
  }),
};
