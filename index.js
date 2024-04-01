import express from 'express';
import router from "./routes/index.js";
import EventManager from "./event-manager/index.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const PORT = 1000;

app.listen(PORT, () => {
    console.log('server started on port ', PORT);
})

app.use(bodyParser(), cors({origin: '*'}));

const eventManager = new EventManager();
const tokenManager = new EventManager();

app.use((req, res, next) => {
    req.eventManager = eventManager;
    req.tokenManager = tokenManager
    next();
});

app.use(router);