//Importation Mongoose DB
const mongoose = require('mongoose');

//Schéma de données Mongoose
const sauceSchema = mongoose.Schema({
    userId: { type: String, require: true }, 
    name: { type: String, require: true },
    manufacturer: { type: String, require: true },
    description: { type: String, require: true },
    mainPepper: { type: String, require: true },
    imageUrl: { type: String },
    heat: { type: Number, require: true },
    likes: { type: Number, require: true, default: 0 },
    dislikes: { type: Number, require: true, default: 0 },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] }
});

//Export schéma "Sauce" pour Express
module.exports = mongoose.model('Sauce', sauceSchema);

// Sources :https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466362-creez-un-schema-de-donnees