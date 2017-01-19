import express from 'express';
import Sql from './sql';
import bodyParser from 'body-parser';
import moment from 'moment';
import * as models from '../common/models';
import { PomodoroBusiness } from './business/PomodoroBusiness';

const app = express();
app.use(express.static(process.env.PUBLIC_DIR));
app.use(bodyParser.json());


app.get('/api/pomodoros', async (req, res) => {
    try {
        const pomodoroBusiness = new PomodoroBusiness();
        pomodoroBusiness.getAll((error, result) => {
            error ? res.status(500).send(JSON.stringify(error)) : res.status(200).send(result);
        })
    } catch (e) {
        console.log(e);
        res.send({'error': 'error in your request'});
    }
});

app.post('/api/pomodoro', async (req, res) => {
    try {
        const pomodoro: models.IPomodoroModel = <models.IPomodoroModel>req.body;
        const pomodoroBusiness = new PomodoroBusiness();
        pomodoroBusiness.create(pomodoro, (error, result) => {
            error ? res.status(500).send(JSON.stringify(error)) : res.status(201).send(result);
        })
    } catch (e) {
        console.log(e);
        res.send({'error': 'error in your request'});
    }
})

app.get('/*', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <title>Pomodoro App</title>
        <div id="app"></div>
        <script src="client.js"></script>
    `)
})

app.listen(3000, () => {
    console.log(`Listening on port: 3000`);
})