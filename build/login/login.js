var MongoClient = require('mongodb');
var url = "mongodb://localhost:27017/";



var username = document.getElementById('#username');


function login(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("vsologin");
        dbo.collection("users").findOne({"username": username}, function(err, result) {
          if (err) throw err;
          console.log(result.username + " " + result.password);
          db.close();
        });
      });
}


