let mysql = require('mysql')
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "calendario"
});

const express = require('express');
const algorithmn = require('./algorithm/algo');
const server = express();
const port = 3001;

server.use(express.json());

connection.connect();

server.get('/',(req, res) => {
            connection.query("SELECT * FROM apontamento",(err, result) => {
                if(err) {
                    res.send({"error":true});
                }
                else { 
                    res.send(result); 
                }
            });
});

server.get('/algorithm',async (req, res) => {
        res.send( await algorithmn());
});

server.listen(port, () => console.log(`Example server listening on port ${port}!`));