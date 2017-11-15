// conf.include-all.js
var path = require('path');

var bundles = {
    controllers: function(){
        var controllers = require('include-all')({
            dirname     :  path.join(__dirname, '../Controllers'),
            filter      :  /(.+Controller)\.js$/,
            excludeDirs :  /^\.(git|svn)$/
        });
        return controllers;
    }
}
module.exports = bundles;