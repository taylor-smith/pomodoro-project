import express from 'express';

const app = express();
app.use(express.static(process.env.PUBLIC_DIR));

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