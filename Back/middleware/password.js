/*// https://www.npmjs.com/package/password-validator
//Importation Package password-validator
const passwordValidator = require("password-validator");

//Schéma
const passwordSchema = new passwordValidator();

//Conditions mdp
passwordSchema
    .is().min(8) // Minimum 8 caractères
    .is().max(100) // Maximum 100 caractères
    .has().uppercase(1) // Doit avoir (1) majuscule
    .has().lowercase() // Doit avoir des minuscules
    .has().digits(2) // Doit avoir au minimum 2 chiffres
    .has().symbols(1) //Doit avoir au minimu 1 symbol
    .has().not().spaces() // Pas d'espaces
    .is().not().oneOf(["Passw0rd", "Password123"]); // liste mdp Blacklistés


/*
// Valider par rapport à une chaîne de mot de passe
console.log(schema.validate('validPASS123'));
// => true
console.log(schema.validate('invalidPASS'));
// => false

console.log(schema.validate('joke', { list: true }));
// => [ 'min', 'uppercase', 'digits' ]
*/
/*
module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        return res.status(403).json({
            message:
                "Mot de passe pas assez sécurisé. il doit contenir minimum 8 caractères dont : minimum 2 chiffres, minimum 1 majuscule et minimum 1 symbole. Aucun Espace.",
        });
    } else {
        next();
    }
};
*/