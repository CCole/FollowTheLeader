var url = 'https://spreadsheets.google.com/feeds/list/1kpJkREh28K6-IGIOpFbDN2CrW8BmyPe-ZZghHB4w5H0/1/public/basic?alt=json' ;

/*function callback(data){
    $("#test").text(JSON.stringify(data));
}*/

function callback(data){
    var rows = [];
    var cells = data.feed.entry;
    
    for (var i = 0; i < cells.length; i++){
        var rowObj = {};
        rowObj.Participants = cells[i].title.$t;
        var rowCols = cells[i].content.$t.split(',');
        for (var j = 0; j < rowCols.length; j++){
            var keyVal = rowCols[j].split(':');
            rowObj[keyVal[0].trim()] = keyVal[1].trim();
        }
        rows.push(rowObj);
    }
    
    var raw = document.createElement('p');
    raw.innerText = JSON.stringify(rows);
    document.body.appendChild(raw);
}



$(document).ready(function(){
$.ajax({
  url: url,
  success: function(data){
    callback(data); 
  }
    });
    
});