//Sources 
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express#/id/r-6466276
// lancer serveur sur http localhost 3000

//Import module http node
const http = require("http"); 
//Import Fichier app.js
const app = require("./app");

//Import package Dotenv
const dotenv = require("dotenv");
dotenv.config();

const normalizePort = val => {
    const port = parseInt(val, 10);
    
    if (isNaN(port)) {
        return val;
        }
    if (port >= 0) {
        return port;
        }
    return false;
};

//Deffinir PORT
const port = normalizePort(process.env.PORT || "3000");
//Express port
app.set("port", port);

//Rechercher erreur 
const errorHandler = error => {
    //si serveur KO
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = 
        typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    //si error code
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

//Connecter app au serveur via HTTP
const server = http.createServer(app);

//Ecouter événements 
//Indiquer Port utilisé par le serveur
//si serveur KO > errorHandler
server.on('error', errorHandler);

server.on('listening', () => {
    const address = server.address();
    const bind = 
        typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

server.listen(port);