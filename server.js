var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const menu =[
    {
        name:'Home',
        url:'/',
    },
    {
        name:'Other',
        url:'/other',
    },
]
//express.render() cerca il file già nelle views
var fakeApi= () => 'Faker'
//views

//Home
app.get('/', function(req, res) {

    var data={
        page:'Home',
        url:req.url,
        menu:menu
    }

    var proPlayer=fakeApi();

    
    res.render('pages/index',
    {
    data:data,
    proPlayer:proPlayer,  
    }
)}
);

//Other
app.get('/other', function(req, res) {

    var data={
        page:'Other',
        url:req.url,
        menu:menu
    }

    res.render('pages/other',
    {
        data:data
    });
    

});
var port=8080

app.listen(port);
console.log('Server is listening on port',port);