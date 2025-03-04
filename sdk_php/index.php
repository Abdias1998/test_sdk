<?php
require 'vendor/autoload.php';

$id = "671a774c706593edb3dc4ab2";
$token = "fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ";
$callback_url = "http://localhost/ecommerce-php/success.php";
$error_callback_url = "http://localhost/ecommerce-php/error.php";
$mode = "LIVE"; // ou "SANDBOX" pour les tests


$feexpay = new Feexpay\FeexpayPhp\FeexpayClass($id, $token, $callback_url, $mode, $error_callback_url);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paiement FeexPay</title>
</head>
<body>
    <h1>Produit: T-shirt personnalisé</h1>
    <p>Prix: 5000 XOF</p>
    
    <div id="button_payee"></div>
    <!-- Button personnaliser -->
    <!-- <button id="custom_button">Payer avec FeexPay</button> -->

    <?php
    $result = $feexpay->init(5000, "button_payee", false, "", "Achat de T-shirt", "info_callback");
    // $result = $feexpay->init(5000, "button_payee", true, "custom_button", "Achat de T-shirt", "info_callback");
    ?>
</body>
</html>
