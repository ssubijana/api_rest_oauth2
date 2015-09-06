var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require("method-override");
    //oauthserver = require('oauth2-server'),
    //clientController = require('./controllers/client');
 
var app = express();
 
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(bodyParser.json());

app.use(methodOverride());

var router = express.Router();
 
/*app.oauth = oauthserver({
  model: {}, // See below for specification 
  grants: ['password'],
  debug: true
});
 
app.all('/oauth/token', app.oauth.grant());
 
app.get('/', app.oauth.authorise(), function (req, res) {
  res.send('Secret area');
});
 
app.use(app.oauth.errorHandler());

// Create endpoint handlers for /clients
app.route('/clients')
  .post(authController.isAuthenticated, clientController.postClients)
  .get(authController.isAuthenticated, clientController.getClients);*/

router.get('/hello', function(req, res) {
   res.json({ message: 'Hello world!' });
});

app.use('/api', router);
 
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});


mongoose.connect('mongodb://localhost/clients', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});

var models = require('./models/client')(app, mongoose);
