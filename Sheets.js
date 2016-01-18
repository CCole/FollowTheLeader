var url = 'https://spreadsheets.google.com/feeds/list/1kpJkREh28K6-IGIOpFbDN2CrW8BmyPe-ZZghHB4w5H0/1/public/basic?alt=json' ;

function callback(data){
    $("#test").text = JSON.stringify(data);
}


$(document).ready(function(){
$.ajax({
  url: url,
  success: function(data){
    callback(data); 
  }
    });
    
});