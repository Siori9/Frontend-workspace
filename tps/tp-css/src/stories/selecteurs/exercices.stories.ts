export default {
  title: 'Selecteurs/Exercices',
};

export const Exercice1 = {
  render: () => ({
    template: `
      <p class="instructions">
        Coloriez en bleu uniquement <strong>les paragraphes pairs</strong> 
        situés dans la zone, sans ajouter de classes aux &lt;p&gt;.
      </p>

      <div class="zone">
        <p>Texte 1</p>
        <p>Texte 2</p>
        <p>Texte 3</p>
        <p>Texte 4</p>
        <p>Texte 5</p>
      </div>
    `,
    styles: [
      `
      .instructions { padding: 1rem; border: 1px solid black; border-radius: 5px; font-size: 1.5em; }

      .zone { padding: 1rem; background: #eee; }

    `,
    ],
  }),
};

export const Exercice2 = {
  render: () => ({
    template: `
      <p class="instructions">
        Faites en sorte que <strong>seulement les titres &lt;h2&gt; qui suivent immédiatement un &lt;h1&gt;</strong>
        deviennent roses. Ceux qui ne sont pas juste après un h1 ne doivent pas changer.
      </p>

      <div class="zone">
        <h1>Titre A</h1>
        <h2>Sous-titre A1</h2>

        <h2>Sous-titre A2</h2>

        <h1>Titre B</h1>
        <p>Paragraphe</p>
        <h2>Sous-titre B1</h2>
      </div>
    `,
    styles: [
      `
          .instructions { padding: 1rem; border: 1px solid black; border-radius: 5px; font-size: 1.5em; }
    
          .zone { padding: 1rem; }
    
          h2 { color: black; }    
        `,
    ],
  }),
};

export const Exercice3 = {
  render: () => ({
    template: `
      <p class="instructions">
        Dans cette liste, coloriez en vert les liens qui pointent vers une URL externe.
        Coloriez en rouge ceux qui pointent vers un fichier PDF.
      </p>

      <ul class="zone">
        <li><a href="/contact">Contact</a></li>
        <li><a href="https://exemple.com">Site externe</a></li>
        <li><a href="/assets/guide.pdf">Télécharger PDF</a></li>
        <li><a href="http://google.com">Google</a></li>
      </ul>
    `,
    styles: [
      `
          .instructions { padding: 1rem; border: 1px solid black; border-radius: 5px; font-size: 1.5em; }
    
          .zone { padding: .5rem 1rem; }
    
          a { font-size: 1.4rem; }
          
        `,
    ],
  }),
};
