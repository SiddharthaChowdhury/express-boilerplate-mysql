var mysql = require('mysql');

var state = {
    db: null,
}
  
exports.connectMySQL = function(data, done) {
    if (state.db) return done(state.db)

    let p1 = new Promise((resolve, reject) => {
        state.db = mysql.createConnection({
            host: data.host,
            user: data.username,
            password: data.password,
            database: data.database
        });
          
        state.db.connect(function(err) {
            if (err)  reject(" > MySQL connection error : ", err);
            resolve(" > MySQL database is connected successfully!")
        });
    });
    p1.then((val) => {
        console.log(val)
        done(state.db);
    })
    .catch((reason) => {
        console.log(reason);
    });
}
  
exports.get = function() {
    return state.db
}







var connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_user',
    password: 'some_secret',
    database: 'the_app_database'
  })
  
  connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
  
    connection.query('CREATE TABLE people(id int primary key, name varchar(255), age int, address text)', function(err, result) {
      if (err) throw err
      connection.query('INSERT INTO people (name, age, address) VALUES (?, ?, ?)', ['Larry', '41', 'California, USA'], function(err, result) {
        if (err) throw err
        connection.query('SELECT * FROM people', function(err, results) {
          if (err) throw err
          console.log(results[0].id)
          console.log(results[0].name)
          console.log(results[0].age)
          console.log(results[0].address)
        })
      })
    }) 
  })