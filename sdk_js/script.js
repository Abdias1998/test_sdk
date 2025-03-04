FeexPayButton.init("render", {
    id: "67a751003a8aada7b1cd3db",
    amount: 50,
    token: "", // 
    callback: (response) => {
        console.log("Paiement réussi :", response);
        window.location.href = ``; // Le JavaScript ne peut pas interpréter directement du PHP. Cela fonctionne uniquement dans un fichier .php exécuté côté serveur.//
    }, // Tu as callback: () => (response) => {...}, ce qui crée une fonction qui retourne une autre fonction.//
    // callback_url: ``, // Tu fais déjà ta redirection dans le callback, tu n'as plus besoin de callback_url.
    mode: 'LIVE',
    //custom_button: true,//  // Quand tu utilises déjà id_custom_button, tu n'as plus besoin de custom_button.
    id_custom_button: "pay",
    // custom_id: "", //https://docs.feexpay.me/#javascript_integration (Documentation)
    description: "Faites un don pour soutenir",
    case: "MOBILE",
});