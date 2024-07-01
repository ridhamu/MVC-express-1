import express, { Express } from "express";
import cors from 'cors'; 
import bodyParser from "body-parser";
import bookRoutes from './routers/bookRoutes'; 

const app: Express = express();

//middle ware
app.use(cors()); 
app.use(bodyParser.json()); 
app.use('/api', bookRoutes); 

export default app; 

