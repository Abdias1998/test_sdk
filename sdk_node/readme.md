# 🌐 Feexpay SDK - Intégration Node.js (Express)

Ce projet montre comment intégrer le **SDK Feexpay** dans une application **Node.js** avec **Express**, afin de créer un ordre de paiement et vérifier automatiquement son statut.

---

## ⚙️ Prérequis

- Node.js installé
- Compte marchand Feexpay (avec clé publique et clé secrète)
- SDK Feexpay installé via npm :

```bash
npm install feexpay-sdk

🚀 Lancement rapide
1. Initialisez un projet Express
npm init -y
npm install express feexpay-sdk

2. Code complet
const express = require('express');
const app = express();
const port = 3000;
const { Feexpay } = require('feexpay-sdk');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialisation du SDK avec vos clés Feexpay
const feexpay = new Feexpay(
  'fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ', // Token
  '671a774c706593edb3dc4ab2', // Votre Shop ID
  {
    mode: 'LIVE',         // 'LIVE' ou 'TEST'
    timeout: 30000,       // Timeout des requêtes (en ms)
    maxRetries: 3         // Nombre de tentatives en cas d’échec
  }
);

// Route de création de paiement
app.post('/create-order', async (req, res) => {
  try {
    const { amount, shop, callback_info, phoneNumber, motif, network } = req.body;

    const order = await feexpay.payment.create({
      amount,
      shop,
      callback_info,
      phoneNumber,
      motif,
      network,
    });

    // Cas où le paiement est immédiatement terminé
    if (order.status !== 'PENDING') {
      return res.json(order);
    }

    // Vérification régulière du statut du paiement
    const pollPaymentStatus = (reference, maxAttempts = 20, interval = 30000) => {
      return new Promise((resolve, reject) => {
        let attempts = 0;

        const intervalId = setInterval(async () => {
          attempts++;

          try {
            const statusResp = await feexpay.payment.verify(reference);
            const status = statusResp.status;

            if (status === 'SUCCESSFUL' || status === 'FAILED') {
              clearInterval(intervalId);
              resolve(statusResp);
            } else if (attempts >= maxAttempts) {
              clearInterval(intervalId);
              reject(new Error("Temps d'attente dépassé"));
            }
          } catch (err) {
            clearInterval(intervalId);
            reject(err);
          }
        }, interval);
      });
    };

    const finalStatus = await pollPaymentStatus(order.reference, 20, 30000);
    return res.json(finalStatus);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

## 📦 Exemple de requête
Utilisez Postman ou curl pour tester :

```bash
curl -X POST http://localhost:3000/create-order \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 1000,
    "shop": "ID_DU_SHOP",
    "callback_info": "https://votre-callback.com",
    "phoneNumber": "229XXXXXXXX",
    "motif": "Paiement test",
    "network": "MTN"
  }'

```
