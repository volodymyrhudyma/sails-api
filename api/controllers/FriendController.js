/**
 * FriendController
 *
 * @description :: Server-side logic for managing Friends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		Friend.create(req.params.all()).exec(function (err, friend) {
		  if (err) return res.negotiate(err);

		  Friend.findById(friend.id)
		    .populate('info').exec(function (err, populatedFriend) {
		       if(err) {
		       	 return res.serverError(err);
		       } else {
		       		return res.json(populatedFriend);
		       }
		    });
		});
    },
};

