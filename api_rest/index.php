<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Définir les variables
    $email = 'adinsiabdias@gmail.com';
    $shop = '671a774c706593edb3dc4ab2';
    $amount = 10;
    $phoneNumber = '2290153037832';
    $apiUrl = 'https://api.feexpay.me/api/transactions/public/requesttopay/mtn';
    $authorizationToken = 'fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ';

    // Données à envoyer dans la requête POST
    $postData = [
        'shop' => $shop,
        'amount' => $amount,
        'phoneNumber' => $phoneNumber,
        'email' => $email,
    ];

    // Configuration de cURL
    $ch = curl_init($apiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Retourner la réponse au lieu de l'afficher
    curl_setopt($ch, CURLOPT_POST, true); // Utiliser la méthode POST
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData)); // Envoyer les données JSON
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $authorizationToken,
        'Custom-Header: ValeurPersonnalisée',
    ]);

    // Exécuter la requête et récupérer la réponse
    $response = curl_exec($ch);

    // Vérifier les erreurs cURL
    if (curl_errno($ch)) {
        echo 'Erreur cURL : ' . curl_error($ch);
    } else {
        // Afficher la réponse de l'API
        echo 'Réponse de l\'API : ' . $response;
    }

    // Fermer la session cURL
    curl_close($ch);
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paiement Feexpay</title>
</head>
<body>
    <h1>Paiement Feexpay</h1>
    <form method="POST" action="">
        <button type="submit" name="payButton">Payer 100</button>
    </form>
</body>
</html>