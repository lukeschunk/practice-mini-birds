var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs')

var db = mongojs("birds");

var app = express();

var products = db.collection("products");

var corsOptions = {
  origin: 'http://localhost:3000'  
};


//_____________________________________________ENDPOINTS_____________________________________________
app.get('/api/sighting', function(req, res) {
    res.send("a lark has been sighted");
});

app.post('/api/sighting', function(req, res) {
    
});

app.put('/api/sighting', function(req, res) {
    
});


app.delete('/api/sighting', function(req, res) {
    
});


app.use(express.static(__dirname + '/public'));

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.listen(3000, function() {
   console.log('listening to port 3000'); 
});

