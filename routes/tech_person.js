exports.save = function(req,res){
    var lastname=req.body.lastname;
    console.log(lastname);
    
    var input = JSON.parse(JSON.stringify(req.body));
    console.log(input);
    
    req.getConnection(function (err, connection) {
        
        var data = {
            lastname:req.body.lastname,
            firstname    : req.body.firstname,
            telephoneno : req.body.telephoneno,
            mobileno : req.body.mobileno,
            email : req.body.email,
                  
        };
        console.log(data);
        
        var query = connection.query("INSERT INTO  tech_person set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/');
          
        });
        
       // console.log(query.sql); get raw query
    
    });
};