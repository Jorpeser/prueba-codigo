import { PORT, DATABASE_URL } from './constants.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import newsRoutes from './routes/newsRoutes.js';

const main = async () => {

    const app = express();

    app.use(bodyParser.json());

    app.use(
        cors({
          origin: 'http://localhost:3000',
          methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        })
    );

    // Routes
    app.use('/news', newsRoutes);

    
    // Connect to Mongo Database
    await mongoose.connect(DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

    
    app.get('/', (req, res) => {
        res.send('Hello World!');
    })

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    
}

main().catch((err) => console.log(err));