const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');
const hbs = require('hbs');
const partials_path = path.join(__dirname, "../templates/partials")

const template_path = path.join(__dirname, "../templates/views")
const staticfile =path.join( __dirname,"../public");
app.set("view engine",'hbs');
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticfile));

app.get("/", (req, res) => {
    res.render('index');
    // res.send("Welcome")
});

app.get("/about", (req, res) => {
    res.render('about');
    // res.send("Welcome to the about page")
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render("404error",{
        errorMsg : 'Opps! Page not found'
    })
});


app.listen(port, (req, res) => {
    console.log("listening to the port")
});
