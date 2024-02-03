const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mealconnect',
    port : 3306
});

connection.connect((err)=>{
    if (err){
        console.log(err.message);
    }
    console.log('db '+connection.state);
})