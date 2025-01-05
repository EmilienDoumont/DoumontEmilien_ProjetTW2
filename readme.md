# Projet : Site Web de Gestion de Produits et Transactions

## Sujet du Site Web
Ce site web est conçu pour gérer les produits, les utilisateurs et les transactions d'une boutique fictive spécialisée dans les grands vins de France.

Le projet comprend deux pages principales :
- **Index** : Une page publique affichant les produits disponibles à l'achat avec un bouton pour passer à la gestion.
- **Gestion** : Une page réservée à l'administration permettant de visualiser les utilisateurs, les transactions, et de modifier les stocks des produits.

## Configuration du Projet
### Prérequis
- Navigateur web (Google Chrome, Firefox, etc.).
- Serveur local pour charger les fichiers statiques (par exemple, Live Server de VS Code ou un serveur Python).

### Structure des fichiers
```
project/
├── src/
│   ├── index.ts
│   ├── data/
│   │   ├── data.json
│   │   └── img/ 
│   ├── models/
│   │   ├── user.ts
│   │   ├── product.ts
│   │   └── transaction.ts
│   └── main.ts
├── views/
│   ├── index.html
│   └── styles.css
├── tests/
│   ├── product.test.ts
│   ├── transaction.test.ts
│   └── user.test.ts
├── dist/       
│   ├── models/
│   │   ├── user.js
│   │   ├── product.js
│   │   └── transaction.js       
│   └── index.js  
├── node_modules/
├── tsconfig.json
├── jest.config.js
├── package-lock.json
└── package.json

```

### Contenu de `data.json`
Voici un exemple de la structure de `data.json` :
```json
{
  "products": [
    {
      "id": 1,
      "domaine": "Château Margaux",
      "cuvee": "Grand Vin",
      "millesime": 2015,
      "type": "rouge",
      "cepage": "75% cabernet sauvignon, 20% merlot, 3% petit verdot, 2% cabernet franc",
      "vignoble": "Bordeaux",
      "appellation": "Margaux AOC",
      "classification": "Premier Cru Classé",
      "price": 1200,
      "stock": 10,
      "img": 1
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "Olivia Marshall",
      "role": "buyer",
      "email": "oli.marshall@icloud.com",
      "password": "hashed_password_123"
    }
  ],
  "transactions": [
    {
      "id": 1,
      "buyer_id": 1,
      "product_id": 1,
      "quantity": 2,
      "total_price": 2400,
      "date": "2024-12-01T14:30:28Z"
    }
  ]
}
```

## Instructions pour Exécuter le Projet

### 1. Ouvrir le projet avec un serveur local
Les fichiers JSON ne peuvent pas être chargés directement à partir du système de fichiers local en raison des restrictions CORS. Pour contourner cela, utilisez un serveur local.

#### Option A : Live Server (Extension VS Code)
1. Installez l'extension **Live Server** dans Visual Studio Code.
2. Cliquez avec le bouton droit sur `index.html` et sélectionnez **"Open with Live Server"**.
3. Le projet sera accessible via une URL comme `http://127.0.0.1:5500/`.


### 2. Naviguer sur le site
- **Page d'accueil (`index.html`)** : Affiche les produits disponibles avec un bouton "Acheter" et un lien vers la page de gestion.
- **Page de gestion (`gestion.html`)** : Permet de voir les transactions, utilisateurs et de modifier les stocks des produits.

## Instructions pour Exécuter les Tests

1. Installez Jest et les dépendances nécessaires si ce n'est pas déjà fait :
   ```bash
   npm install --save-dev jest
   ```

2. Ajoutez les scripts suivants dans le fichier `package.json` :
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

3. Exécutez les tests avec la commande suivante :
   ```bash
   npm test
   ```

Les tests vérifient les fonctionnalités des classes principales (`Product`, `User`, `Transaction`) ainsi que les comportements dynamiques liés au DOM.


