/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  findByEmail: function(req, res){
    var email = req.query.email;
    User.findOne({email: email}).populate('reportedIssues').populate('assignedIssues').exec(function(err, user) {
      if(err) {
        return res.serverError(err);
      }
      return res.json(user);
    });
  },
};

