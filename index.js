import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import userRoutes from './routes/Users.js'

const PORT = 9000

app.use(bodyParser.json());

app.use('/users', userRoutes);

res.send("Harry Potter and the Order of the Phoenix");

app.get('/', (req, res));
    


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));