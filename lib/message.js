//Google-Spreadsheets 
var GoogleSS = require("google-spreadsheet"); 
var sheet = new GoogleSS('1wgdA1ZMnbOgjorTLAKci-JYsNlP_ke9B7f7vWZSWetE');

var cred = {
    client_email: ,
    private_key: 
}

exports.getMessage = function() {sheet.useServiceAccountAuth(cred, function(err){
    sheet.getRows(1,{start: 1, num: 5,}, function(err, row_data){
            console.log(row_data); 
        }); 
    });
};