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
