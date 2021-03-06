var express = require( 'express' );
var app = express();
var path = require( 'path' );
var pg = require( 'pg' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

var connectionString = 'postgres//localhost:5432/testDB';

app.use( bodyParser.json() );

app.listen( 9000, 'localhost', function( req, res ) {
  console.log( 'Hailing frequencies open, Captain. Listening on PORT 9000.' );
});

app.use( express.static( 'public' ) );

app.get( '/', function( req, res ) {
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});
