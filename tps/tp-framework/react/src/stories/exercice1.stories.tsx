export default {
    title: 'Exercice1',
};

export const Consigne = () => (
    <div style={{
    padding: '1rem',
        border: '1px solid #555',
        borderRadius: '8px',
        fontSize: '1.2rem',
        background: '#f5f5f5'
}}>
<h2>Exercice 1</h2>
<p>Créez un composant React appelé <code>Card</code> qui affiche :</p>
<ul style={{ marginLeft: '1.5rem' }}>
<li style={{ marginBottom: '0.5rem' }}>Un titre</li>
<li style={{ marginBottom: '0.5rem' }}>Une description</li>
<li style={{ marginBottom: '0.5rem' }}>Un bouton cliquable</li>
</ul>
<p>Le composant doit recevoir les informations via les <code>props</code>.</p>
</div>
);

export const Result = () => (
    <div style={{ padding: '2rem', background: '#fafafa', display: 'flex', justifyContent: 'center' }}>
        {/*...Appelez votre composant ici...*/}
    </div>
);
