export default {
    title: 'Exercice2',
};

export const Consigne = () => (
    <div style={{
        padding: '1rem',
        border: '1px solid #555',
        borderRadius: '8px',
        fontSize: '1.2rem',
        background: '#f5f5f5'
    }}>
        <h2>Exercice 2 — TodoList</h2>
        <p>Créez un composant React appelé <code>TodoList</code> avec les fonctionnalités suivantes :</p>
        <ul style={{ marginLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Champ texte + bouton “Ajouter”</li>
            <li style={{ marginBottom: '0.5rem' }}>Afficher la liste des todos (boucle)</li>
            <li style={{ marginBottom: '0.5rem' }}>Supprimer un todo (seulement celui cliqué)</li>
        </ul>
        <p>Notions couvertes : <code>state</code>, <code>events</code>, rendu conditionnel, listes.</p>
    </div>
);

export const Result = () => (
    <div style={{ padding: '2rem', background: '#fafafa', display: 'flex', justifyContent: 'center' }}>
        {/*...Appelez votre composant ici...*/}
    </div>
);
