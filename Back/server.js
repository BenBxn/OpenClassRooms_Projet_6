//Sources 
//https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express#/id/r-6466276
const http = require("http");
const app = require("./app");

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

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);




const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = 
        typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
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

//Ecouter d'événements 
//Indiquer Port utilisé par le serveur
server.on('error', errorHandler);

server.on('listening', () => {
    const address = server.address();
    const bind = 
        typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

server.listen(port);