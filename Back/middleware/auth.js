//Sources
// https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466605-configurez-le-middleware-dauthentification#/id/r-6715739
// Importation Package jsonwebtoken /*verifier token auth*/
const jwt = require('jsonwebtoken');

/*const mongooseError = require('mongoose-error');*/ 

//Import Dotenv
require('dotenv').config();

//Export Middleware
module.exports = (req, res, next) => {
    try {
        // Recuperer Token header authorization /*split*/
        const token = req.headers.authorization.split(' ')[1];
        // Verifier Token & token-Key /*verify jwt*/
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        // Recuperer userId Token
        const userId = decodedToken.userId;
        //Reintegrer requête comme clé d'authentification
        req.auth = {userId: userId};
        //Si userID dans requete different > error
        if (req.body.userId && req.body.userId !== userId) {
            console.log("UserID non valide");
            throw "UserID non valide";  
        }
        //Sinon ok next()
        else {
        next();
        } 
    }
    catch(error) {
        res.status(401).json({error});
        /*mongooseError( 
            res.status(401).json({ error: error | '[ ERREUR ] : ECHEC Authentification '})
        );*/
    }
};