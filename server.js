console.log("starting web server");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");

//1 entering code 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 session code

//3 views code 
app.set("views", "views");
app.set("view engine", "ejs");

//4 routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
});

app.get("/", function (req, res) {
    res.render("purchase");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`the server is running successfully on port: ${PORT}`);
});
