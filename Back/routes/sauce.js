// Importation express
const express = require('express');
// Création Routeurs 
const router = express.Router();



// Importation Middleware "authorize" /*attention ordre*/
const auth = require('../middleware/auth');
// Importation Middleware "multer""
const multer = require('../middleware/multer-config');
// Importation Controller "sauce"
const sauceCtrl = require('../controllers/sauce');

// Routers
//intercepter les requetes GET POST PUT DELETE
router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.like);


// Export Router
module.exports = router;

// Sources :
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466459-optimisez-la-structure-du-back-end#/id/r-6609594