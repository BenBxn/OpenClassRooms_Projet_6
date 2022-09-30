//Sources
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466473-preparez-la-base-de-donnees-pour-les-informations-dauthentification#/id/r-6466462
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466506-creez-des-utilisateurs#/id/r-6466505
// Importation bcrypt /* chiffrer des données */
const bcrypt = require('bcrypt');
// Importation Package jsonwebtoken
const jwt = require('jsonwebtoken');

require("dotenv").config();

//cryptoJS
const cryptojs = require('crypto-js');

// Importation models user
const User = require('../models/user');

//Mail-Validator https://www.npmjs.com/package/email-validator
const emailValidator = require('email-validator');
//ou
/*const validator = require("validator");*/

// https://www.npmjs.com/package/password-validator
//Importation Package password-validator
const passwordValidator = require('password-validator');
//Schéma
const passwordSchema = new passwordValidator();
//Conditions mdp
passwordSchema
    .is().min(8) // Minimum 8 caractères
    .is().max(20) // Maximum 20 caractères
    .has().uppercase(1) // Doit avoir (1) majuscule
    .has().lowercase() // Doit avoir des minuscules
    .has().digits(2) // Doit avoir au minimum 2 chiffres
    .has().symbols(1) //Doit avoir au minimu 1 symbol
    .has().not().spaces() // Pas d'espaces
    .is().not().oneOf(["Passw0rd", "Password123"]); // liste mdp Blacklistés


//Création nouveau User
exports.signup = (req, res, next) => {
    // avec validator
    /*const valideEmail = validator.isEmail(req.body.email);
    const validePassword = passwordSchema.validate(req.body.password);
    if (valideEmail === true && validePassword === true) {
            bcrypt.hash(req.body.password, 10) //crypter/hasher mot de passe
            .then(hash => { //mdp hasher dans DB
            const user = new User({ //création user avec shéma
                email: req.body.email, //ou cryptedEmail, CryptoJS 256 
                password: hash
                });
                //Enregistrer dans DB
                user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé' }))
                .catch(error => res.status(400).json({ error }));
            })
    .catch(error => res.status(500).json({ error }));
    } else {
    console.log("Email ou mot de passe non conforme");
    // information au cas le mot de passe serait invalide
    console.log("caratère invalide ou manquant au mot de passe: " +
        passwordSchema.validate(req.body.password, { list: true })
    );
    }
};*/
    // ou avec email-validator et cryptoJS
    if(!emailValidator.validate(req.body.email)){ //mail-validator
        return res.status(500).json({message : "Adresse email non valide"})
    } 
    else if (!passwordSchema.validate(req.body.password)){ //password-validator
        return res.status(500).json({message : "Mot de passe pas assez sécurisé. Il doit contenir minimum 8 caractères dont : minimum 2 chiffres, minimum 1 majuscule et minimum 1 symbole et aucun Espace."})
    } 
    else {
    const cryptedEmail = cryptojs.SHA256(req.body.email, process.env.CRYPTO_MAIL).toString()
    bcrypt.hash(req.body.password, 10) //crypter/hasher mot de passe
        .then(hash => { //mdp hasher dans DB
        const user = new User({ //création user avec shéma
            email: cryptedEmail, //ou cryptedEmail, CryptoJS 256 
            password: hash
        });
        //Enregistrer dans DB
        user.save()
            .then(() => res.status(201).json({ message: 'Utilisateur créé' }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error });
        });
    }
};

//Sources
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466533-verifiez-les-informations-didentification-dun-utilisateur#/id/r-7905533
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466557-creez-des-tokens-dauthentification#/id/r-6715714

//Connexion user
exports.login = (req, res, next) => {
    const cryptedEmail = cryptojs.SHA256(req.body.email, process.env.CRYPTO_MAIL).toString();
    User.findOne({ email: cryptedEmail }) //ou /*cryptedEmail*/ }) //findOne() pour trouver un user dans DB
        .then(user => {
            if (!user) { //Si aucun user trouvé 
            return res.status(401).json({ message: 'Utilisateur non trouvé' });
            }
            //Sinon
            bcrypt.compare(req.body.password, user.password) //verification mdp entre celui de l'utilisateur et le hash
            .then(valid => {
                if (!valid) { //Si mdp ne correspond pas 
                return res.status(401).json({ error: 'Mot de passe incorrect' });
                }
                //Sinon envoie userId et Token d'auth.
                res.status(200).json({
                userId: user._id,
                token: jwt.sign( /*jwt.sign : encoder nouveau Token */ /*payload useID, KeyToken, validité*/
                    { userId: user._id },
                    process.env.TOKEN_KEY, /*.env*/
                    { expiresIn: '24h' }
                )
                });
            })
            .catch(error => res.status(500).json({ error }));
            
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error });
        });
        /*.catch( error => res.status(401).json({ message: ' Incorrect login/password pair ! ' }));*/
};