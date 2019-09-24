let express = require('express');
let getData = require('./db');
let app = express();
const query = "SELECT * FROM apontamento WHERE id=1";

app.use(express.json());

app.get('/', function (req, res) {
  getData(query, res);           
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});