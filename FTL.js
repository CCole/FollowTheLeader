//Follow the leader

var express = require('express'); 

var app = express(); 

var handlebars = require('express-handlebars').create({
    defaultLayout:'main'});

var messenger = require('./lib/message.js'); 


//var sheets = require('lib/sheets'); 

app.engine('handlebars', handlebars.engine); 
app.set('view engine', 'handlebars'); 

app.set('port', process.env.PORT || 3000); 

app.use(express.static(__dirname + '/public'));

/*get daily message from Google Sheets spreadsheet*/

/*Daily Quote*/
var wish = "Don't wish for it. Work for it.",
think = "Think a 20 minute workout won't do anything? Well it's sure as heck better than a 0 minute workout.",
morning = "One small positive thought in the morning can change the entire outcome of your day." ;
var quotes = [wish, think, morning ] ; 

/* For Page Testing Mocha*/
app.use(function(req, res, next){
    res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1'; 
    next(); 
});

/*Routes*/
//Can I tell this route to wait until message has a value? 
app.get('/', function(req, res){
   /* message.getMessage(); */
    /*var daily = quotes[Math.floor(Math.random() * quotes.length)];*/
  // if (messenger){
        res.render('home', {message: messenger.getMessage()});   
  //  }
});

// 404 page 
app.use(function (req, res){
    res.status(404); 
    res.render('404'); 
});

// 500 page
app.use(function(err, req, res, next){
   console.error(err.stack); 
   res.status(500); 
   res.render('500'); 
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port'))
});