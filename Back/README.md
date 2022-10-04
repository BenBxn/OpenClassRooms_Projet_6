********
Dependencies
********

******"bcrypt "^5.0.1"******
package de chiffrement
https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466473-preparez-la-base-de-donnees-pour-les-informations-dauthentification#/id/r-6466462

******"body-parser": "^1.20.0"******
Parse le body des requetes en json

******"cors": "^2.8.5"******
système de sécurité qui  bloque les appels HTTP entre des serveurs différents, ce qui empêche donc les requêtes malveillantes d'accéder à des ressources sensibles
https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466298-creez-une-route-get#/id/r-6466289

******"dotenv": "^16.0.2"******
Utilisation de variables d'environnement pour les données sensibles

******"express": "^4.18.1"******
framework backend / ensemble d’outils pour les applications web, les requêtes et les réponses HTTP, le routage
https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express#/id/r-6466239


******"fs": "^0.0.1-security"******
donne accès aux fonctions qui nous permettent de modifier le système de fichiers, y compris aux fonctions permettant de supprimer les fichiers.
https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466697-developpez-la-fonction-delete-du-back-end

******"jsonwebtoken": "^8.5.1"******
Authentification de l'utilisateur par token
https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466557-creez-des-tokens-dauthentification#/id/r-6715713

******"mongoose": "^6.6.1"******
système de base de données non relationnelle open source et gratuit
https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466348-configurez-votre-base-de-donnees#/id/r-7434422


******"mongoose-unique-validator": "^3.1.0"******
package de validation pour prévalider les informations avant de les enregistrer / améliore les messages d'erreur lors de l'enregistrement de données uniques.
https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466473-preparez-la-base-de-donnees-pour-les-informations-dauthentification#/id/r-6760638
    
******"multer": "^1.4.5-lts.1"******
gérer les fichiers entrants dans les requêtes HTTP.
https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466627-acceptez-les-fichiers-entrants-avec-multer#/id/r-6466626
    
******"nodemon": "^2.0.20"******
surveillera les modifications de vos fichiers et redémarrera le serveur lorsqu'il aura besoin d'être mis à jour. 
https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466231-demarrez-votre-serveur-node#/id/r-6466230

******"password-validator": "^5.3.0"******
https://www.npmjs.com/package/password-validator

******"email-validator": "^2.0.4"******
https://www.npmjs.com/package/email-validator

******"helmet": "^6.0.0"******
aide à sécuriser les en-têtes HTTP.
https://fr.acervolima.com/node-js-securiser-les-applications-avec-helmet-js/

******"crypto-js": "^4.1.1"******
Cryptage des emails utilisateurs dans la base de données 
https://www.npmjs.com/package/crypto-js
https://cryptojs.gitbook.io/docs/

******"maskemail": "^1.0.0"******
Utilitaire de masquage d'adresses e-mail pour JavaScript. Il remplace des parties des adresses e-mail par un caractère de masquage, tout en gardant le format général de l'adresse reconnaissable
https://www.npmjs.com/package/maskemail?activeTab=readme

******"express-mongo-sanitize": "^2.2.0"******
Les clés d'objet commençant par un $ ou contenant un . sont réservés à MongoDB en tant qu'opérateurs. Sans ce nettoyage, des utilisateurs malveillants pourraient envoyer un objet contenant un opérateur $, ou incluant un ., ce qui pourrait modifier le contexte d'une opération de base de données. Le plus notoire est l'opérateur $where, qui peut exécuter du JavaScript arbitraire sur la base de données.
La meilleure façon d'éviter cela est de désinfecter les données reçues, et de supprimer toutes les clés offensantes, ou de remplacer les caractères par une clé "sûre".
https://www.npmjs.com/package/express-mongo-sanitize



********
Codes de réponse HTTP
********
https://developer.mozilla.org/fr/docs/Web/HTTP/Status





