import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routers/router.js';
import errorHandlerMd from './middlewares/errorHandlerMd.js';

const app = express();

app.use(cors());
app.use(json());

app.use(router);
app.use(errorHandlerMd);

app.listen(process.env.PORT, ()=> {
    console.log('Server opening on port:' + process.env.PORT);
})