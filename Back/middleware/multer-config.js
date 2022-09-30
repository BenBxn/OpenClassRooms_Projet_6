//Sources
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466627-acceptez-les-fichiers-entrants-avec-multer#/id/r-6466626
// Importation Package multer / gérer les fichiers entrants dans les requêtes HTTP.
const multer = require('multer');

//Formats images
const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/gif": "gif",
};

//Destination pour enregistrer les fichiers dans dossier 'images'
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_'); //nom d'origne & "espace" remplacé par "_"
        const extension = MIME_TYPES[file.mimetype]; //extention fichier (jpg,png,gig)
        callback(null, name + Date.now() + '.' + extension); //+ date timestamp 
    }
});

//Export multer-config
module.exports = multer({storage: storage}).single('image'); /*single*/