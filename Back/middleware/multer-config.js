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
        const extension = MIME_TYPES[file.mimetype]; //extention fichier (jpg,png,gif)
        if(
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/gif"
        )
        //nom avec date
        {
            callback(null, name + Date.now() + '.' + extension); //+ date timestamp 
        
        //Sinon le fichier ne correspond pas et sera deplacé  
        } else {
            console.log("fichier non conforme");
            callback(
                null,
                "ImagesBan/" + req.auth.userId + "_" + name + Date.now() + "." + extension
            );
        }
        
    }
});

//Export multer-config
module.exports = multer({storage: storage}).single('image'); /*single : fichier unique*/