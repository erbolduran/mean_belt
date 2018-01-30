var express         = require('express'),
    app             = express(),
    routes          = require('./server/config/routes.js'),
    mongoose        = require('mongoose'),
    session         = require('express-session'),
    path            = require('path'),
    bodyParser      = require('body-parser'),
    port            = 6789;

require('./server/config/mongoose.js');

app.use(session({
    secret: 'secretypass',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, '/client/dist')));

routes(app);

app.listen(port, function(){
    console.log(`Running on port ${port}`);
})