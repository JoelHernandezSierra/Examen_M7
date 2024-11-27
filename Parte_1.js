document.addEventListener('DOMContentLoaded', () => { // Espera que el document estigui carregat completament
    const pendentsList = document.getElementById('pendents-list'); // Consegueix la llista de tasques pendents
    const fetesList = document.getElementById('fetes-list'); // Consegueix la llista de tasques completades

    pendentsList.addEventListener('click', (e) => { // Afegeix un esdeveniment de clic a la llista de pendents
        if (e.target && e.target.nodeName === 'LI') { // Comprova si l'element clicat és una tasca (element LI)
            fetesList.appendChild(e.target); // Mou la tasca clicada a la llista de fetes
        }
    });
});
