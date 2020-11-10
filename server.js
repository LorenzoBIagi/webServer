var express = require('express');
var app = express();

app.set('view engine', 'ejs');


//express.render() cerca il file già nelle views
var fakeApi= () => 'Faker'
//views

//Home
app.get('/', function(req, res) {
    var proPlayer=fakeApi();
    res.render('pages/index',
    {proPlayer:proPlayer,}
)}
);

//Other
app.get('/other', function(req, res) {
    res.render('pages/other',);
});
var port=8080

app.listen(port);
console.log('Server is listening on port',port);