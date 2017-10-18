var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer('WHysRsTW0Oe_j95lEgLSkaEpba73502ucxOfTt2901Gf4q-pMpPshfqO-_lC2JID', 'base64'),
  audience: 'sYQrG53uT3yKGv3s4Ltgc8XZ67Li3I7l'
});

module.exports = authCheck;