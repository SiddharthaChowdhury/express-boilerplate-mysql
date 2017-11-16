// UserController.js

module.exports = {
    tryOut: function(req, res, next, db){
        db.query('INSERT INTO users (first_name, last_name, email_primary) VALUES (?, ?, ?)', ['Larry', 'Garry', 'schowdhury@deloitte.com'], function(err, result) {
            if (err) throw err
            db.query('SELECT * FROM users', function(err, results) {
                if (err) throw err
                console.log(results[0]);
            })
        })
	}
}