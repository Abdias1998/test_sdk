<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paiement FeexPay</title>
</head>
<body>
    <h1>Produit: T-shirt personnalisé</h1>
    <p>Prix: 500 XOF</p>

    <div id="button_payee"></div>

    @php
        $feexpay->init($price, "button_payee", false, "", "Achat de T-shirt", "info_callback")
    @endphp
 
</body>
</html>
