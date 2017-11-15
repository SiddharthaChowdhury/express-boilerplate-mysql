module.exports = ($,db,C) =>{
    /*
    *	Please define the nodes below.
    */
    
        $.get('/db', function(req, res, next){
            C.UserController.allUsers(req, res, next, db);
        })
    
        $.get('/', function(req, res, next){
            C.UserController.index(req, res, next, db);
        })
    
    /*
    *	 Define routes above
    */
    return $;}