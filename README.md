# Formation Développeur Web
## Projet 6 - PIIQUANTE 
------------
### 📝 Description du projet
Ce projet est le n°6 du parcours [Développeur Web](https://openclassrooms.com/fr/paths/556-developpeur-web "Développeur  Web") qui consiste à Construire une API sécurisée pour une application d'avis gastronomiques
### 🎬 Contexte
Développeur back-end indépendant, la responsable produit de Piiquante nous envoie un message sur la plateforme de freelance nous demandans de l'aide pour un nouveau projet. la marque de condiments à base de piment Piiquante, veut développer une application web de critique des sauces piquantes appelée « Hot Takes » .
<!--
<p align="center">
<img alt="Logo piiquante" width="200px" 
https://user.oc-static.com/upload/2021/07/29/16275605596354_PiiquanteLogo.png />
</p>
-->
Si la responsable produit de Piiquante souhaite à terme transformer l'application d'évaluation en une boutique en ligne, elle souhaite que la première version soit une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. Le front-end de l'application a été développé à l'aide d'Angular et a été précompilé après des tests internes, mais Piiquante a besoin d'un développeur back-end pour construire l'API.

### 🧭 Briefing
Suite au mail de la Cheffe de produit, nous avons accès à l'interface avec le lien vers le <a href="https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6">repo</a> du projet, en pièce jointe les <a href="https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Requirements_DW_P6.pdf">spécifications pour l'API</a> et on nous communique des exigences en matière de sécurité suite a des attaque sur leur site web. 

### 📘 Cahier des charges
#### Spécifications techniques & fonctionnelles 🧬🌐🔏
● En exigence de sécurité nous avons comme demande :
- Mot de passe haché
- Adresse e-mail de l’utilisateur unique 
- Une base de données sécurisée 
- Une authentification renforcée sur toutes les routes sauce
- Les versions récentes des logiciels avec correctifs de sécurité actualisés

● Nous devons aussi avoir une base de données sécurisé et respecter les spécification de L’API : 
- Création & enregistrement d’un utilisateur
- Un tableau avec toutes les sauces 
- Accéder aux informations d’une seule sauce
- Ajouter / Modifier / Supprimer sa sauce, Liker ou Disliker les sauces ajoutées

### 🎓 Compétences acquises et/ou Mises à jour
- Créer un serveur web simple avec Express 
- Créer une API REST avec Node, Express et MongoDB 
- Mettre en place un système d'authentification sur une application Express 
- Gérer des fichiers utilisateur sur une application Express
- Identifier les principales attaques web et les règles de sécurité à adopter 
- Protéger du code avec l'OWASP 
- Tester et appliquer l'OWASP
- Utiliser des API REST pour vos projets de code 
- Formuler des requêtes et envoyer des réponses avec une API REST 
- Concevoir des API REST

### 🔍 Informations complémentaires

- Soutenance validée le 17/10/2022. ✅

Lien vers le repo front-end d'origine :
https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6

Installation :

1.Depuis le fichier FRONT > 
`npm install`
`ng serve` ou `npm start`

2.Depuis le fichier BACK >
`npm install`
`nodemon server` 

 & Dependences : 
- [x] express:  `npm install --save express`
- [x] mongoose:  `npm install --save mongoose`
- [x] mongoose-unique-validator: `npm install --save mongoose-unique-validator`
- [x] express-mongo-sanitize:  `npm install --save express-mongo-sanitize`
- [x] cors:  `npm install --save cors`
- [x] fs:  `npm install --save file-system`
- [x] bcrypt:  `npm install --save bcrypt`
- [x] jsonwebtoken: `npm install --save jsonwebtoken`
- [x] CryptoJS: `npm install --save crypto-js`
- [x] multer: `npm install --save multer`
- [x] dotenv: `npm install --save dotenv`
- [x] helmet:  `npm install --save helmet`
- [x] password-validator: `npm install --save password-validator`
- [x] email-validator: `npm install --save email-validator`

3.Parametrer DOTENV :
* Creer fichier .env dans le dossier BACK
> `PORT = YOUR_PORT_HERE`

> `AUTHORIZED_ORIGIN = "http://localhost:****"`

> `MONGO_DB = mongodb+srv://"USER_NAME":"YOUR_PASSWORD"@clusterocr.enzcoye.mongodb.net/?retryWrites=true&w=majority`

> `TOKEN_KEY = YOUR_SECRET_TOKEN_KEY_HERE`

> `CRYPTO_MAIL = "*"`
