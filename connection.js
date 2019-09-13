function Connect(){

    let mysql = require('mysql')
    let connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "calendario"
    });
    
    connection.connect();

    let data = connection.query('SELECT * FROM apontamento', 
            (err, rows, fields) => {rows[0]});

    console.log(data);
}

Connect();