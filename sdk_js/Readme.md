# FeexPay - Intégration de Paiement Sécurisé

Ce projet permet d'intégrer facilement un formulaire de paiement sécurisé avec FeexPay. Il inclut une interface professionnelle et un système de validation pour garantir une bonne expérience utilisateur.

## 🛠 Technologies Utilisées
- **HTML5**
- **CSS3 (Bootstrap 5)**
- **JavaScript (ES6, Module)**
- **FeexPay JavaScript SDK**

## 📂 Structure du Projet
```
├── index.html  # Interface principale du formulaire de paiement
├── config.js   # Fichier de configuration des clés FeexPay
├── README.md   # Documentation
├── assets/     # Dossier contenant les assets (images, styles, scripts)
│   ├── screenshot.png  # Screenshot de l'interface
│   

```

## 🚀 Installation & Configuration

### 1️⃣ Cloner le projet
```sh
git clone https://github.com/Abdias1998/test_sdk
cd sdk_js
```

### 2️⃣ Configurer FeexPay
Crée un fichier `config.js` à la racine et ajoute :
```js
const config = {
    FEEXPAY_ID: "VOTRE_ID_FEEXPAY",
    FEEXPAY_TOKEN: "VOTRE_TOKEN_FEEXPAY",
    CALLBACK_URL: "https://votre-site.com/callback"
};
export default config;
```

### 3️⃣ Lancer le projet
Il suffit d'ouvrir `index.html` dans un navigateur.

## 🎨 Fonctionnalités
✅ Interface responsive et professionnelle (Bootstrap 5)  
✅ Paiement via **FeexPay** avec montant minimum de **90 F**  
✅ Validation des entrées utilisateur  
✅ Affichage dynamique du bouton de paiement  
✅ Message de chargement lors de la transaction  

## 📸 Aperçu
![Aperçu de l'interface] (./assets/screenshot.png "Aperçu de l'interface")
## 📝 Licence
Ce projet est sous licence MIT. Libre d'utilisation et de modification.

---
**Auteur :** FeexPay  
**Entreprise :** JH TRADING  
**Contact :**  

