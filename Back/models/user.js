//Importation Mongoose DB
const mongoose = require('mongoose');
// & Unique-Validator
const uniqueValidator = require('mongoose-unique-validator');
// & mongodb errors
/*const mongoErrors = require('mongodb-errors');*/

//Schéma de données Mongoose
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});


/*userSchema.plugin(mongoErrors);*/
// 1usr = 1adress@
userSchema.plugin(uniqueValidator);

//Export schéma "User" pour Express
module.exports = mongoose.model('User', userSchema);

// sources : 
// https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466473-preparez-la-base-de-donnees-pour-les-informations-dauthentification#/id/r-6466472
// https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466362-creez-un-schema-de-donnees