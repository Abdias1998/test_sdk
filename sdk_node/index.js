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

      const order = await feexpay.payment.createGlob({
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
  
      return res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
