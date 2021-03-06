var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var tasks = require('./routes/tasks');

var port = 3000;

var app = express();
app.use(cors());

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname, 'client/dist')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', tasks);

app.get("/", (request, response) => {
    response.sendFile('index.html');
});

app.listen(port, function() {
    console.log('Server started on port ' + port);
});