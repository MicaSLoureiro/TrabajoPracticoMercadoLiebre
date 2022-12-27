const express = require('express');
const { get } = require('http');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res) => res.sendFile(path.resolve(__dirname, 'view/home.html')));
app.get('/register',(req, res) => res.sendFile(path.resolve(__dirname, 'view/register.html')));
app.get('/login',(req, res) => res.sendFile(path.resolve(__dirname, 'view/login.html')));




app.listen(port, () => console.log(`Se levanto con éxito el servidor http://localhost:${port}/`))