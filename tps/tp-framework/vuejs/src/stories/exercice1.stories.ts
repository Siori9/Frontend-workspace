export default {
    title: 'Exercice1',
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
      <h2>Exercice 1</h2>
      <p>Créez un composant Vue appelé <code>Card</code> qui affiche :</p>
      <ul style="margin-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem;">Un titre</li>
        <li style="margin-bottom: 0.5rem;">Une description</li>
        <li style="margin-bottom: 0.5rem;">Un bouton cliquable</li>
      </ul>
      <p>Le composant doit recevoir les informations via les <code>props</code>.</p>
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
