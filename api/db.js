function getData(query, response){
  let mysql = require('mysql');
  let connection = mysql.createConnection({
      connectionLimit: 100,
      host: "localhost",
      user: "root",
      password: "",
      database: "calendario"
    });

  connection.query(query, (err, result, callback) => response.json(result));

};

module.exports = getData;