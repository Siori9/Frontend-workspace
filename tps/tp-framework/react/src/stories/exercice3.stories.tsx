export default {
    title: 'Exercice3',
};

export const Consigne = () => (
    <div style={{
        padding: '1rem',
        border: '1px solid #555',
        borderRadius: '8px',
        fontSize: '1.2rem',
        background: '#f5f5f5'
    }}>
        <h2>Exercice 3 — UserFetcher</h2>
        <p>Créez un composant React appelé <code>UserFetcher</code> avec les fonctionnalités suivantes :</p>
        <ul style={{ marginLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Charger la liste d’utilisateurs depuis <code>https://jsonplaceholder.typicode.com/users</code></li>
            <li style={{ marginBottom: '0.5rem' }}>Afficher un message “Chargement…” pendant la récupération</li>
            <li style={{ marginBottom: '0.5rem' }}>Afficher “Erreur…” en cas de problème</li>
            <li style={{ marginBottom: '0.5rem' }}>Afficher la liste des utilisateurs</li>
            <li style={{ marginBottom: '0.5rem' }}>Cliquer sur un utilisateur pour afficher ses détails sous la liste</li>
        </ul>
        <p>Notions couvertes : <code>fetch</code>, état (<code>loading/error/data</code>), rendu conditionnel, interaction simple.</p>
    </div>
);

export const Result = () => (
    <div style={{ padding: '2rem', background: '#fafafa', display: 'flex', justifyContent: 'center' }}>
        {/*...Appelez votre composant ici...*/}
    </div>
);
