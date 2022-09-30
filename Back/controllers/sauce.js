// Importation models sauce
const Sauce = require("../models/sauce");

// Importation Package fs / gérer le système de fichiers
const fs = require("fs");

/*// Importation Package jsonwebtoken
const jwt = require('jsonwebtoken');*/


// Ajout création sauce /* Save */ 
exports.createSauce = (req, res, next) => {
    //Objet
    const sauceObject = JSON.parse(req.body.sauce);
    //Suppression ID front
    delete sauceObject._id;
    //Conversion objet en chaine
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    });
    //Enregister
    sauce.save()
    .then(() => 
        res.status(201).json({ message: "Sauce enregistrée" }))
    .catch((error) =>
        res.status(400).json({ error }));
};

// Recuperer information 1 sauce /* findOne() */
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({
        _id: req.params.id,
    })
    .then((sauce) => {
        res.status(200).json(sauce);
    })
    .catch((error) => {
        res.status(404).json({
        error: error,
        });
    });
};

//Recuperer information Toutes sauces /* find() */
exports.getAllSauce = (req, res, next) => {
    Sauce.find()
    .then((sauces) => {
        res.status(200).json(sauces);
    })
    .catch((error) => {
        res.status(400).json({
            error: error,
        });
    });
};


//Modifier information 1 sauce /* udptadeOne() */
exports.modifySauce = (req, res, next) => {
    //Si req.file existe 
    if (req.file) {
        /*console.log("");*/
        //Si modification image => suppression ancienne 
        Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
            const filename = sauce.imageUrl.split("/images/")[1];
            fs.unlink(`images/${filename}`, () => {
                const sauceObject = {
                    ...JSON.parse(req.body.sauce),
                    imageUrl: `${req.protocol}://${req.get("host")}/images/${
                    req.file.filename
                    }`,
                };
                Sauce.updateOne(
                    { _id: req.params.id },
                    { ...sauceObject, _id: req.params.id }
                )
                    .then(() => res.status(200).json({ message: "Sauce modifiée" }))
                    .catch((error) => res.status(400).json({ error }));
            });
        })
        .catch((error) => res.status(500).json({ error }));
    //Sinon
    } else {
        /*console.log("");*/
        const sauceObject = { ...req.body };
        Sauce.updateOne(
            { _id: req.params.id },
            { ...sauceObject, _id: req.params.id }
        )
        .then(() => res.status(200).json({ message: "Sauce modifiée" }))
        .catch((error) => res.status(400).json({ error }));
        }
};

//Supprimer Sauce /* deleteOne() */
exports.deleteSauce = (req, res, next) => {
    //Chercher la sauce
    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
            //export fichier
            const filename = sauce.imageUrl.split("/images/")[1];
            //sup fichier
            fs.unlink(`images/${filename}`, () => {
            //sup objet
                Sauce.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: "Sauce supprimée" }))
                .catch((error) => res.status(400).json({ error }));
            });
        })
    .catch((error) => res.status(500).json({ error }));
};



//LIKES Sauce

exports.like = (req, res, next) => {
    const like = req.body.like;

    // Si user Like //////
    if (like === 1) {
        Sauce.findOne({ _id: req.params.id })
            .then((sauce) => {
                //Si user à déjà like ou dislike 
                if (sauce.usersDisliked.includes(req.body.userId) || sauce.usersLiked.includes(req.body.userId)) {
                    res.status(401).json({ message: 'Opération non autorisée !'});
                } else {
                    Sauce.updateOne({ _id: req.params.id }, {
                        //Insère userId dans tableau usersLiked
                        $push: { usersLiked: req.body.userId },
                        //Ajouter like
                        $inc: { likes: +1 },
                }) 
                    .then(() => res.status(200).json({ message: 'J\'aime !' }))
                    .catch((error) => res.status(400).json({ error }));
                }
            })
            .catch((error) => res.status(404).json({ error }));
    };

    // Si user Dislike //////
    if (like === -1) {
        Sauce.findOne({ _id: req.params.id })
            .then((sauce) => {
                //Si user à déjà like ou dislike 
                if (sauce.usersDisliked.includes(req.body.userId) || sauce.usersLiked.includes(req.body.userId)) {
                    res.status(401).json({ message: 'Opération non autorisée !'});
                } else {
                    Sauce.updateOne({ _id: req.params.id }, {
                        //Insèrer userId dans tableau usersLiked 
                        $push: { usersDisliked: req.body.userId },
                        //Ajouter dislike
                        $inc: { dislikes: +1 },
                }) 
                    .then(() => res.status(200).json({ message: 'Je n\'aime pas !' }))
                    .catch((error) => res.status(400).json({ error }));
                }
            })
            .catch((error) => res.status(404).json({ error }));
    };

    //Si user retire like ou dislike
    if (like === 0) {
        Sauce.findOne({ _id: req.params.id })
            .then((sauce) => {
                //si user est dans le tableau usersLiked
                if (sauce.usersLiked.includes(req.body.userId)) {
                    Sauce.updateOne({ _id: req.params.id }, {
                        //Retirer user 
                        $pull: { usersLiked: req.body.userId },
                        //Retirer like
                        $inc: { likes: -1 },
                    })
                        .then(() => res.status(200).json({ message: '"J\'aime" retiré !' }))
                        .catch((error) => res.status(400).json({ error }))
                };
                //si user est dans le tableau usersDisliked
                if (sauce.usersDisliked.includes(req.body.userId)) {
                    Sauce.updateOne({ _id: req.params.id }, {
                        //Retirer user 
                        $pull: { usersDisliked: req.body.userId },
                        //Retirer dislike
                        $inc: { dislikes: -1 },
                    })
                        .then(() => res.status(200).json({ message: '"Je n\'aime pas" retiré !' }))
                        .catch((error) => res.status(400).json({ error }))
                };
            })
            .catch((error) => res.status(404).json({ error }));
        };
    };