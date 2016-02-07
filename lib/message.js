//Google-Spreadsheets 
var GoogleSS = require("google-spreadsheet"); 
var sheet = new GoogleSS('1wgdA1ZMnbOgjorTLAKci-JYsNlP_ke9B7f7vWZSWetE');
var myConfig = require("./myconfig");
//var args = process.argv.slice(2) ;
var KEY = myConfig.config(); 
//var USER_ID = process.env.USER_ID ;
//var USER_KEY = process.env.USER_KEY ; 
//console.log(KEY); 

var cred = {
    client_email: KEY.USER_ID,
    private_key: KEY.USER_KEY
}; 

//console.log(cred.private_key);
//console.log(cred.client_email);


//this main function returns before the getRows callback returns. try counting callbacks maybe? 
console.log('inside main function'); 
    var mess ; 
    //authenticates
    sheet.useServiceAccountAuth(cred, function(err){
        console.log('inside 1st callback'); 
        //gets our row object and does something with it
         sheet.getRows(1,{start: 1, num: 5,}, function(err, row_data){
                console.log('inside 2nd Callback'); 
               console.log(row_data[0].message); 
               mess = row_data[0].message;   
                    }); 
    });
    

  console.log((typeof mess) + 'back inside main function with value of mess variable'); 
    

exports.getMessage = function(){
        return mess; 
    }; 
        

 
 
 