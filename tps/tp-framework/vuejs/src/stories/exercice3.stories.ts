export default {
    title: 'Exercice3',
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
      <h2>Exercice 3 — UserFetcher</h2>
      <p>Créez un composant Vue appelé <code>UserFetcher</code> qui :</p>
      <ul style="margin-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem;">Charge la liste des utilisateurs depuis <code>https://jsonplaceholder.typicode.com/users</code></li>
        <li style="margin-bottom: 0.5rem;">Affiche un message :</li>
        <ul style="margin-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem;">“Chargement…”</li>
          <li style="margin-bottom: 0.5rem;">“Erreur…”</li>
          <li style="margin-bottom: 0.5rem;">Ou la liste des utilisateurs</li>
        </ul>
        <li style="margin-bottom: 0.5rem;">Permet de cliquer sur un utilisateur et afficher ses détails sous la liste</li>
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