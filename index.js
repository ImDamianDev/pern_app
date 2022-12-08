//import dependencies
const express = require('express');

//initialization
const app = express();

//settings
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

//routes
app.get("/", ( req, res ) => {
    res.send("Hola Mundo, recordando como crear un servidor con express")
});

app.get("/QuienSoy",( req, res ) => {
    res.send("Hi Im Damian")
});

app.get("/Home/:id", ( req, res ) => {
    res.send(req.params.id)
});

app.get("*", ( req, res ) => {
    res.send(`<p style="color:red">La dirección que estás consultando no
    existe </p>`)
});


//starting the server
app.listen(PORT, ()=>{
    console.log(`\n=========================================\nserver is running\n\nhost: ${HOST}\nport: ${PORT}\nhttp://${HOST}:${PORT}/\n=========================================`)
})
