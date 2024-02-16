// 12/02   MongoDB va CRUD operatsiyalari
console.log('Starting Web server');
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require('http');

// 1 kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code 
app.set("views", "views");
app.set("view engine", "ejs");

//4 routing code
app.post("/create-item", (req, res) => {
    //to do: code with db here
});

app.get("/", function (req, res) {
    res.render('reja');
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
    
    );
});

             // another lesson
// const http = require("http");

// const mongodb = require("mongodb");

// let db;
// const connectionString = "mongodb+srv://boburmirzosherboev:GDHoOdhY3a3YOgIw@cluster0.cs4cbzo.mongodb.net/"

// mongodb.connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }, (err, client) => {
//     if(err) console.log('Error on connection MONGO DB');
//     else {
//         console.log("MongoDB connection succeed");
//         module.exports = client;

//         const app = require("./app");
//     const server = http.createServer(app);
//     let PORT = 3000;
//     server.listen(PORT, function () {
//       console.log(`the server is running successfully on port: ${PORT},
//      http://localhost:${PORT}`
//     );
//     });
//     }
// }
// );