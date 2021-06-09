import express from 'express';
import mongoose from 'mongoose';
import { ROUTES } from './routes';
import cors from 'cors';

const uri = "mongodb+srv://isko88:isko88@cluster0.y9wmk.mongodb.net/wallet?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('db connected'));

export const app = express();
app.use(cors());
app.use(express.json());

const port = 8000;


ROUTES.forEach(({ path, router }) => {
    app.use(path, router);
});

// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});