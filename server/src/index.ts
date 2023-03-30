/**
 * IMPORTANT: 
 * ---------
 * Do not manually edit this file if you'd like to use Colyseus Arena
 * 
 * If you're self-hosting (without Arena), you can manually instantiate a
 * Colyseus Server as documented here: 👉 https://docs.colyseus.io/server/api/#constructor-options 
 */
// import { listen } from "@colyseus/arena";

// Import arena config
// import arenaConfig from "./arena.config";

// Create and listen on 2567 (or PORT environment variable.)
// listen(arenaConfig);

import express from 'express';
import cors from 'cors';
import { createServer } from 'http';

import { Server } from 'colyseus';

import { MyRoom } from './rooms/MyRoom';

const PORT = 3000;
const app = express();


app.use(cors());



const gameServer = new Server({
    server: createServer(app)
});

gameServer.define('myroom', MyRoom);

app.get('/', (req, res, next) => {
    res.json({
        msg: 'This is CORS-enabled for all origins'
    });
});


app.listen(PORT, () => {

    console.log('CORS-enabled web server listening on port ', PORT);

});

gameServer.listen(2173);
