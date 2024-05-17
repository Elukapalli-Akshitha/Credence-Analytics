import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [

    {
        name: "Harry Potter and the Order of the Phoenix",
        img: "https://bit.ly/2IcnSwz",
        summary: "Harry Potter and Dumbledore's warning about the return of
        Lord Voldemort is not heeded by the wizard authorities who, in turn, look to
        undermine Dumbledore's authority at Hogwarts and discredit Harry."
    }
];

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`${user.first_name} has been added to the Database`);
}) 

export default router