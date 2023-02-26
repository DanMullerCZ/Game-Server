const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('pages'));

app.get('/', (req, res) => {
    res.status(308).redirect('/home');
});

app.listen(port, () => {
    console.log(`Game-Server app listening on port ${port}`);
});

app.get('/home', (req, res) => {
    res.render('homepage');
});

app.get('/hatching-eggs', (req, res) => {
    res.status(200).sendFile('pages/hatching-eggs/hatching-eggs.html', {root: __dirname});
});

app.get('/pong', (req, res) => {
    res.status(200).sendFile('pages/pong/pong.html', {root: __dirname});
});

app.get('/tic-tac-toe', (req, res) => {
    res.status(200).sendFile('pages/tic-tac-toe/tic-tac-toe.html', {root: __dirname});
});
