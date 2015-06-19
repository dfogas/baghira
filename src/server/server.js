//Copyright David Fogaš, 12th May 2015
var express = require('express');//nodejs on server side is express
var mongoose = require('mongoose');//persistence with MongoDB
var bodyParser = require('body-parser');//for deciphering body of urlencoded data e.g. %20%

var app = express();
// using express default router
var router = express.Router();

//connect to local instance of mongodb (required install)
mongoose.connect('mongodb://localhost/mbase');
mongoose.connection.once( 'open', function cb() { console.log ('successfully connected to MongoDB'); });

// defining mongoose schema and model for api
var AgentSchema = new mongoose.Schema({
  name: String,
  playerId: String,
  type: String,
  operations: Number,
  electronics: Number,
  stealth: Number
});
var Agent = mongoose.model('Agent', AgentSchema);

// rather self-explaining set of config and middleware linkage
app.set('port', process.env.PORT || 3300 );
//app.use('/build', express.static('build'));
//app.use('/assets', express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// //and routes
// app.get('/', function(req,res) {
//   //res.render('index');
//   res.end('Hello handsome!');
// });
// app.get('/about', function(req,res) {
//   //res.render('about');
//   res.end('I am beautiful and sexy webpage.');
// });
//
// app.get('/specrunner', function(req,res) {
//   //res.render('specrunner', { defaultLayout: null });
//   res.end('You can test me!');
// });

// prefixing api calls w/ api
app.use('/api', router);

// and first api functionality
router.route('/agents').get( function(req,res) {
  Agent.find( function(err, agents) {
    if (!err) {
      res.send (agents);
    } else {
      return console.error (err);
    }
  });
});

// handle 404 error
app.use( function (req, res, next) {
  res.status('404');
  res.send('404 - Not Found');
});

// server starting call
app.listen(app.get('port'), function() {
  console.log('MIA Server is running under ' + app.get('env') + ' on port ' + app.get('port') + '.');
});
