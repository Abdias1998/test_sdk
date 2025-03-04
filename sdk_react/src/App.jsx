import React from 'react';
import Feexpay from '@feexpay/react-sdk';

function App() {
  return (
    <div className="App">
      <h1>Intégration de FeexPay dans React</h1>
      <Feexpay
        token="fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ" // Remplacez par votre clé API FeexPay
        id="671a774c706593edb3dc4ab2" // Remplacez par l'ID de votre boutique
        amount={90} // Montant en XOF
        description="Paiement pour un service"
        // callback={() => alert('Paiement réussi !')}
        callback_url="https://www.votresite.com" // URL de redirection après paiement
        callback_info="Informations supplémentaires"
        buttonText="Payer"
        buttonClass="mt-3"
        // defaultValueField={{ 'country_iban': "BJ", 'network': "MOOV" }}
      />


    </div>
  );
}

export default App;