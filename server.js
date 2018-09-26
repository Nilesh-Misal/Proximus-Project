var express = require('express');
var routes = require('./routes/customer');

var path=require('path');

var flash = require('connect-flash');
var app = express();
var customers = require('./routes/customer'); 
var techperson=require('./routes/tech_person');
var administrative=require('./routes/administartive_person');
var cookieParser = require('cookie-parser');

var session = require('express-session');

// app.use(cookieParser());
// app.use(session({ secret: 'zxcv' }))

// app.use(flash());
// app.set('view engine', 'ejs');
// app.set('views', '/views/customer.html');
// app.use(express.static('public'));


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded());
var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');



// app.set('views', path.join(__dirname, '/'));
// app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/customer.html'));

});

//app.use(express.static(__dirname + '/public'));

app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/images'));

// var pool;
app.use(
  // pool=mysql.createConnection({

  //   host            : 'proximusdb.cns4bogu4wnd.us-east-1.rds.amazonaws.com',
  //   user            : 'test',
  //   password        : 'jampot321',
  //   database        : 'proximusdatabase',
  //   connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
  //   multipleStatements : true  
  // }))


//    mysql.createPool({
      
//     host            : 'proximusdb.cns4bogu4wnd.us-east-1.rds.amazonaws.com',
//     user            : 'test',
//     password        : 'jampot321',
//     database        : 'proximusdatabase',
//     connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
//     multipleStatements : true           // I like this because it helps prevent nested sql statements, it can be buggy though, so be careful
// },'pool'))
    
  connection(mysql,{
      
      host: 'proximusdb.cns4bogu4wnd.us-east-1.rds.amazonaws.com',  
      user: 'test',
      password : 'jampot321',
      database:'proximusdatabase',
      connectionLimit : 10,   
      multipleStatements : true ,    
      //port : 3306,  

  })  
);
// pool.connect();


// app.post('/customers/add',function(req,res){
//   console.log(req.body.language);
//   console.log(req.body.cname);
// })

app.post('/customers/add', customers.save);
app.post('/tech_person/add', techperson.save);
app.post('/administrative/add', administrative.save);
app.put('/customers/edit/:id', customers.edit);
app.post('/customers/edit/:id',customers.save_edit);
app.get('/customers/delete/:id', customers.delete_customer);

app.get('/customers');

//app.use(app.router);

//const db = require('../app/config/db.config.js');
  // app.post('/getdata',function(req,res){
  //   var 
  // })
  
var server = app.listen(4300, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})

