const express = require('express');
const app = express();
const port = 3000;
const {Feexpay} = require('feexpay-sdk');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const feexpay = new Feexpay('fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ',"671a774c706593edb3dc4ab2",{ 
    mode: 'LIVE',
    timeout: 30000,
    maxRetries: 3
  });

  app.post('/create-order', async (req, res) => {
    try {
      const { amount,
        shop,
        callback_info,
        phoneNumber,
        motif,
        network } = req.body;

      const order = await feexpay.payment.create({
        amount,
        shop,
        callback_info,
        phoneNumber,
        motif,
        network,
      });
      if (order.status !== 'PENDING') {
        return res.json(order); // cas immédiat
      }
  
      // Fonction pour vérifier le statut toutes les 30 sec
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
  
      // On attend la vérification
      const finalStatus = await pollPaymentStatus( order.reference,20,30000);
      return res.json(finalStatus);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
