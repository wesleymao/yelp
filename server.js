var express 			= require('express'),
	app					= express();
	bodyParser 			= require('body-parser'),
	mongoose 			= require('mongoose'),
	restsController 	= require('./server/controller/restMap-controller');


mongoose.connect('mongodb://wesleymao:xy1zsfsz@ds045511.mongolab.com:45511/yelpdb');

app.use(bodyParser());

app.get('/', function (req, res){
	res.sendfile(__dirname + '/client/views/index.html');	
});

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/rests/:city', restsController.get );
app.get('/api/rests/', restsController.list );
app.post('/api/rests', restsController.create );

app.listen(3000, function(){
	console.log('Listening...');
});