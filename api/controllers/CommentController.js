/**
 * CommentController
 *
 * @description :: Server-side logic for managing Comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		Comment.create({
			author: req.param('author'),
			message: req.param('message'),
			entityId: req.param('id'),
			entityType: req.param('type'),
		}).exec(function(error, comment) {
			if(error) {
	            return res.serverError(err);
	        } else {
	            return res.json(comment);
	        }
		});
    },
};

