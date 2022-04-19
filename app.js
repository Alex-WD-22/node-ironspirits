const express = require("express");
const app = express();

// app.get(path, code);
app.use(express.static('public'));

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});


app.get('/contact', (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html');
})


app.listen(3000, () => {
    console.log("server listening to requests...")
});
