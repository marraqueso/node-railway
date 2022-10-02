import express from 'express';
import { pool } from './db.js';
import { PORT } from './config.js';


const app = express();


app.get('/', async (req, res) =>{
    const [rows] = await pool.query('SELECT * FROM estudiante');
    res.json(rows);
});

app.get('/ping', async(req, res) =>{
    const cons = await pool.query('SELECT "awit" AS node');
    res.json(cons[0][0]);
});

app.post('/reg', async(req, res) =>{
    const result  = await pool.query('INSERT INTO estudiante(nombre, apellido) VALUES("Katty","Rojas")');
    
    res.send('Registo Completo');
});

app.listen(PORT);

console.log(`App listening in http://localhost:${PORT}`);


