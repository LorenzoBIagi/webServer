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
        name:'Champions',
        url:'/champions',
        content:'Here you can see my favourite champions'
    },
    {
        name:'Other',
        url:'/other',
        content:'That\'s the content of other\'s page, have fun'
    },
   
]
var champions={
   
    hated:[
        'Yasuo','Zoe','Mundo','Darius','Fizz'
    ],
    loved:[
        'LeBlanc','Lux','Teemo','Kassadin','Jarvan IV'
    ]
    
}

var fakeApi= () => 'Faker'
//Routes

//Home
app.get('/', function(req, res) {

    var data={
        page:'Home',
        url:req.url,
        menu:menu,
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

//Champions
app.get('/champions', function(req, res) {

    var data={
        page:'Champions',
        url:req.url,
        menu:menu,
        champions:champions
    }
  

    //express.render() cerca il file già nelle views
    res.render('pages/champions',
    {
    data:data 
    }
)}
);

//Other
app.get('/other', function(req, res) {

    var data={
        page:'Other',
        url:req.url,
        menu:menu,
        champions:champions
        
    }

    res.render('pages/other',
    {
        data:data
    });
    

});

var port=8080

app.listen(port);
console.log('Server is listening on port',port);