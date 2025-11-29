export default {
    title: 'Exercice2',
};

export const Consigne = () => ({
    template: `
    <div style="
      padding: 1rem; 
      border: 1px solid #555; 
      border-radius: 8px; 
      font-size: 1.2rem; 
      background: #f5f5f5;
    ">
      <h2>Exercice 2 — TodoList</h2>
      <p>Créez un composant Vue appelé <code>TodoList</code> qui :</p>
      <ul style="margin-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem;">Affiche un champ texte et un bouton “Ajouter”</li>
        <li style="margin-bottom: 0.5rem;">Affiche la liste des todos (boucle)</li>
        <li style="margin-bottom: 0.5rem;">Permet de supprimer un todo</li>
      </ul>
      <p>Spécifications :</p>
      <ul style="margin-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem;">Supprimer enlève uniquement l'item cliqué</li>
      </ul>
    </div>
  `,
});

export const Result = () => ({
    components: {
        // Importez votre composant ici
    },
    template: `
    <div style="padding: 2rem; background: #fafafa; display: flex; justify-content: center;">
      <!--...Appelez votre composant ici...-->
    </div>
  `,
});