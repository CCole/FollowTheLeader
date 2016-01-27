//Google-Spreadsheets 
var GoogleSS = require("google-spreadsheet"); 
var sheet = new GoogleSS('1wgdA1ZMnbOgjorTLAKci-JYsNlP_ke9B7f7vWZSWetE');

var args = process.argv.slice(2) ;

//var USER_ID = args[0] ;
//var USER_KEY = args[1] ; 



var cred = {
    client_email: process.env.USER_ID,
    private_key: process.env.USER_KEY
}

console.log(cred.private_key);
console.log(typeof cred.private_key);

exports.getMessage = function() {sheet.useServiceAccountAuth(cred, function(err){
    sheet.getRows(1,{start: 1, num: 5,}, function(err, row_data){
            console.log(row_data[0].message); 
        }); 
    });
};