var express = require('express');
var app = express();

app.use(express.static('public'))

app.set('view engine', 'ejs');

const menu =[
    {
        name:'Home',
        url:'/',
        content:'Here you can explore and discover my favourite champions and explore my gaming style!'
    },
    {
        name:'Other',
        url:'/other',
        content:''
    },
]

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

    //express.render() cerca il file già nelle views
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