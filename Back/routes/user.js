// Importation express
const express = require('express');
// Création Routeurs 
const router = express.Router();
// possible raterlimiter

// Importation Controller "user"
const userCtrl = require('../controllers/user');

// Routers Enregistrement et Connexion 
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// Export Router
module.exports = router;

//Sources
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466506-creez-des-utilisateurs#/id/r-6715694