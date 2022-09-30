//Sources
// Importation express https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express#/id/r-6466239
const express = require('express');
//App via express
const app = express();

/**const bodyParser = require('body-parser');*/
/*const cors = require('cors');*/
const helmet = require('helmet');

require("dotenv").config();

//Accéder au path du serveur
const path = require('path');

//Importation Routes sauce & user
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');




//Connexion Mongoose DATABASE
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466348-configurez-votre-base-de-donnees#/id/r-7434422
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB,
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));




// Sécurise les headers avec helmet
app.use(helmet({crossOriginEmbedderPolicy: false,}));

//CORS 
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466298-creez-une-route-get#/id/r-6466289
app.use((req, res, next) => {
    /* Pour accéder à l'API depuis n'importe quelle origine */
    res.setHeader('Access-Control-Allow-Origin', '*' /*process.env.AUTHORIZED_ORIGIN*/);
    /* Ajouter les headers aux requêtes envoyées vers l'API */
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    /*  Pour envoyer des requêtes avec les méthodes mentionnées */
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    /*res.setHeader("Cross-Origin-Resource-Policy", "same-site");*/
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    /*res.setHeader('Access-Control-Allow-Credentials', true);*/
    next();
});

/*app.use(cors());*/
/*app.use(bodyParser.json());*/
//ou 
app.use(express.json());

//ROUTES
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes); // L'url de la source est /api/auth (userRoutes)
app.use('/api/sauces', sauceRoutes); // L'url de la source est /api/sauce (sauceRoutes)



//Export app Express
module.exports = app;