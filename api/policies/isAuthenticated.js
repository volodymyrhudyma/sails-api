var jwt = require('express-jwt');
var fs = require("fs");

var authCheck = jwt({
  algorithms: ['RS256'],
  secret: fs.readFileSync('cert.pem'),
  audience: 'progrest.com'
});

module.exports = authCheck;