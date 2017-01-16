import express from 'express';
import Sql from './sql';
import * as models from '../common/models';

const app = express();
app.use(express.static(process.env.PUBLIC_DIR));

app.get('/api/pomodoros', async (req, res) => {
    const sql = new Sql();
    try {
        await sql.open();
        const rawPomodoros = await sql.all('SELECT * FROM pomodoros');
        const pomodoros = models.deserializePomodoros(rawPomodoros);
        const serializedPomodoros = models.serializePomodoros(pomodoros);
        res.send(pomodoros);
    } catch (err) {
        res.status(500).send(JSON.stringify(err));
    } finally {
        sql.close();
    }
});

app.get('/*', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <title>Fullstack Typescript</title>
        <div id="app"></div>
        <script src="client.js"></script>
    `)
})

app.listen(3000, () => {
    console.log(`Listening on port: 3000`);
})