const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/img")));
app.use(express.static(path.join(__dirname, "/public/img/clients")));

app.get('/',(req,res)=>{
    res.render("home")
})
app.get('/stores',(req,res)=>{
    res.render("mobile-stores")
})
app.get('/accessories',(req,res)=>{
    res.render("accessories")
})
app.get('/services',(req,res)=>{
    res.render("services")
})
app.get('/pricing',(req,res)=>{
    res.render("pricing")
})

app.listen(port, ()=>{
    console.log(`listening to port: http://localhost:${port}`)
})