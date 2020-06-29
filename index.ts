import Server from './classes/server';
import { SERVER_PORT } from './global/environment';
import router from './routes/router'; 

import bodyParser from 'body-parser';
import cors from 'cors';



const servidor = Server.instance;


// bodyParse
servidor.app.use( bodyParser.urlencoded({ extended: true }));
servidor.app.use( bodyParser.json() );

// cors

servidor.app.use( cors( { origin: true, credentials: true }) );


servidor.app.use( '/', router );

servidor.start( () => {
    console.log(`El servidor esta corriendo en el puerto ${SERVER_PORT}`);
} );