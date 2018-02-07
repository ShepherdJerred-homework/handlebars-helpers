const app = require('./');
const config = require('./config');

app.listen(config.serverPort, () => console.log('Listening on port ' + config.serverPort + '...'));
