import http from 'http'
import debug from 'debug'
import express from 'express'
import rating from './rating-service'
import profile from './profile-service'
import user from  './user-service'
import jobRef from './job-reference-service'
import loop from './loop-service'

var app = express();

app.use('/rating', rating);
app.use('/profile', profile);
app.use('/loop', loop);
app.use('/user', user);
app.use('/job-reference', jobRef);


const port = 3000;
app.set('port', port);
  /**
   * Create HTTP server.
   */
var server = http.createServer(app);
server.listen(port, function() {
  console.log('Express server listening on port ' + server.address().port)
});
server.on('error', onError);
server.on('listening', onListening);


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}


module.exports = app;
