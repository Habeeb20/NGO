const express = require("express");
const bodyparser = require("body-parser")
const app = express();


const port = 1111

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static("public"));


app.get("/index", function(req, res){
    res.sendFile("index.html", {
        root:__dirname
    });
});

app.get("/login", function(req, res){
    res.render("login.ejs");
});

app.listen(port, () => {
console.log("successfully running")
})