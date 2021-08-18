const express = require('express');

const app= express();

//Requerir path 
const path = require('path');

app.use(express.static('public'));


//Ruta/home
//ruta de accesso del navegador y un callback


app.listen(3000, ()=> {
    console.log('Server running at port 3000');
});


app.get('/', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/home.html'))

});

app.get('/register', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/register.html'))
    //res.sendFile(__dirname + '/views/register.html');

});

app.get('/login', (req,res) =>{
    //res se encuentra en el callback en el segundo parámetro
    res.sendFile(path.resolve('./views/login.html'))
    //res.sendFile(__dirname + '/views/login.html');

});