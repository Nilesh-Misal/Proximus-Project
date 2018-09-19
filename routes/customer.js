 

exports.save = function(req,res){
    var language=req.body.language;
    console.log(language);
    
    var newuser=req.body.newnumber;
    //var existingnumber=req.body.existingnumber;
    //console.log(newuser);

    //var length=9999;

    //for(var i=0001,i<length;i++)

   // var 

    var customer=req.body.customer;
    //console.log(customer)

    var customerno=req.body.existingnumber;
    //console.log(customerno) 

   // console.log(customer) 

   // var input = JSON.parse(JSON.stringify(req.body));
    //console.log(input);
    
    
    // var language= input.language;
    // var values = [];
    // //console.log(values);

    //         for(var i=0; i< language.length; i++)
    //         console.log('hello',language[i]);
    //         values.push([language[i].language]);

    // if(customerno)
    // {

        req.getConnection(function (err, connection) {
        
            var data = {
                newcustomer:req.body.newnumber,
                //existingnumber:req.body.existingnumber,
                language:req.body.language,
                contactperson    : req.body.cname,
                companyname : req.body.comname,
                address : req.body.address,
                postalcode   : req.body.pcode,
                vatno   : req.body.vno,
                //customer:customer,
                //customerno:customerno,
                installation_details:req.body.install_details,
                techpersonlastname:req.body.lastname,
                techpersonfirstname:req.body.firstname,
                techpersontelephoneno:req.body.telephoneno,
                techpersonmobileno:req.body.mobileno,
                techpersonemail:req.body.email,
                adminpersonlastname:req.body.adlastname,
                adminpersonfirstname:req.body.adfirstname,
                admintphone:req.body.tphone,
                adminpersonmobileno:req.body.admobileno,
                adminpersonemail:req.body.ademail
            
            };
            console.log(data);
            
                var query = connection.query("INSERT INTO customer set ? ",data, function(err, rows)
            {
      
              if (err)
                  console.log("Error inserting : %s ",err );
             else{
                 console.log(rows);
                 //req.flash('success', 'Record Added');
                 res.send('successfully inserted');
                 //res.redirect('/');
             }
             
              
            });
            
           // console.log(query.sql); get raw query
           []
        });

            
    // } else
    // {
    //     req.getConnection(function (err, connection) {
        
    //         var data = {
    //             language:req.body.language,
    //             contactperson    : req.body.cname,
    //             companyname : req.body.comname,
    //             address : req.body.address,
    //             postalcode   : req.body.pcode,
    //             vatno   : req.body.vno,
    //             customer:req.body.customer1,
    //             installation_details:req.body.install_details,
    //             techpersonlastname:req.body.lastname,
    //             techpersonfirstname:req.body.firstname,
    //             techpersontelephoneno:req.body.telephoneno,
    //             techpersonmobileno:req.body.mobileno,
    //             techpersonemail:req.body.email,
    //             adminpersonlastname:req.body.adlastname,
    //             adminpersonfirstname:req.body.adfirstname,
    //             admintphone:req.body.tphone,
    //             adminpersonmobileno:req.body.admobileno,
    //             adminpersonemail:req.body.ademail
            
    // //         };
    //         console.log(data);
            
    //             var query = connection.query("INSERT INTO customer set ? ",data, function(err, rows)
    //         {
      
    //           if (err)
    //               console.log("Error inserting : %s ",err );
    //          else{
    //              console.log(rows);
    //              //req.flash('success', 'Record Added');
    //              res.send('Data successfully inserted');
    //              //res.redirect('/');
    //          }
             
              
    //         });
            
           // console.log(query.sql); get raw query
    //        []
    //     });
    // }

   


    // req.getConnection(function (err, connection) {
        
    //     var data = {
    //         language:req.body.language,
    //         contactperson    : req.body.cname,
    //         companyname : req.body.comname,
    //         address : req.body.address,
    //         postalcode   : req.body.pcode,
    //         vatno   : req.body.vno,
    //         customer:req.body.customer,
    //         installation_details:req.body.install_details,
    //         techpersonlastname:req.body.lastname,
    //         techpersonfirstname:req.body.firstname,
    //         techpersontelephoneno:req.body.telephoneno,
    //         techpersonmobileno:req.body.mobileno,
    //         techpersonemail:req.body.email,
    //         adminpersonlastname:req.body.adlastname,
    //         adminpersonfirstname:req.body.adfirstname,
    //         admintphone:req.body.tphone,
    //         adminpersonmobileno:req.body.admobileno,
    //         adminpersonemail:req.body.ademail
        
    //     };
    //     console.log(data);
        
    //         var query = connection.query("INSERT INTO customer set ? ",data, function(err, rows)
    //     {
  
    //       if (err)
    //           console.log("Error inserting : %s ",err );
    //      else{
    //          console.log(rows);
    //          //req.flash('success', 'Record Added');
    //          res.send('successfully inserted');
    //          //res.redirect('/');
    //      }
         
          
    //     });
        
    //    // console.log(query.sql); get raw query
    //    []
    // });
};
exports.edit = function(req, res){
    
    var id = req.params.id;
    console.log(id);
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            else
            {
                //return res.status(200).send(successEncode({status:'success','data':rows,'message':'Compan Fetched Successfully'}))
                console.log(rows);
            }
           // res.render('edit_customer',{page_title:"Edit Customers",data:rows});
                
           
         });
         
         //console.log(query.sql);
    }); 
};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    console.log(id);
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            language:req.body.language,
            contactperson    : req.body.cname,
            companyname : req.body.comname,
            address : req.body.address,
            postalcode   : req.body.pcode,
            vatno   : req.body.vno,
            customer:req.body.customer,
            installation_details:req.body.install_details,
            techpersonlastname:req.body.tlastname,
            techpersonfirstname:req.body.tfirstname,
            techpersontelephoneno:req.body.ttelephoneno,
            techpersonmobileno:req.body.tmobileno,
            techpersonemail:req.body.temail,
            adminpersonlastname:req.body.adlastname,
            adminpersonfirstname:req.body.adfirstname,
            admintphone:req.body.tphone,
            adminpersonmobileno:req.body.admobileno,
            adminpersonemail:req.body.ademail
        
        
        };
        
        connection.query("UPDATE customer set ? WHERE id = ? ",data,[id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         else{
             console.log(rows);
             console.log(res);
              res.redirect('/');
         }
         
          
        });
    
    });
};
exports.delete_customer = function(req,res){
          
    var id = req.params.id;
    console.log(id)
   
    req.getConnection(function (err, connection) {
       
       connection.query("DELETE FROM customer  WHERE id = ? ",[id], function(err, rows)
       {
           
            if(err)
                console.log("Error deleting : %s ",err );
           else
           {
               console.log(rows)
               // res.redirect('/');
           }
         
            
       });
       
    });
};