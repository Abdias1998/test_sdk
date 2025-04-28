import React from 'react';
import Feexpay from '@feexpay/react-sdk';
import axios, { AxiosHeaders } from 'axios';
import { useState } from 'react';
function App() {

  const [email,setEmail] = useState('adinsiabdias@gmail.com');
 const handleClick = () => {
  axios.post(
    'https://api.feexpay.me/api/transactions/public/requesttopay/mtn',
    {
      shop: '671a774c706593edb3dc4ab2',
      amount: 10,
      phoneNumber: 2290153037832,
      email :email,
      
    },
    {
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ', 
        'Custom-Header': 'ValeurPersonnalisée',
      },
    }
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error('Erreur lors de la requête :', error);
  });
};

  return (
    <div className="App">
      <h1>Intégration de FeexPay dans React</h1>
      <Feexpay
        token="fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ" // Remplacez par votre clé API FeexPay
        id="671a774c706593edb3dc4ab2" // Remplacez par l'ID de votre boutique
        amount={10} // Montant en XOF
        description="Paiement pour un service"
        // callback={() => alert('Paiement réussi !')}
        callback_url="https://www.votresite.com" // URL de redirection après paiement
        callback_info="Informations supplémentaires"
        buttonText="Payer"
        buttonClass="mt-3"
        case="CARD"

        // defaultValueField={{ 'country_iban': "BJ", 'network': "MOOV" }}
      />
    <button onClick={handleClick}>
        Payer 100
      </button>

    </div>
  );
}

export default App;