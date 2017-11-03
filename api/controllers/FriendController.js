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
		    .populate('to').populate('from').exec(function (err, populatedFriend) {
		       if(err) {
		       	 return res.serverError(err);
		       } else {
		       		return res.json(populatedFriend);
		       }
		    });
		});
    },
    getInvitations: function(req, res) {
    	Friend.find().populate('to').populate('from').then(function(friends) {
			var invitations = friends.filter(function(friend) {
				return friend.to.id === req.query.userId && !friend.confirmed;
			});	
			return res.json(invitations);
		});        
    },
    getSentInvitations: function(req, res) {
    	Friend.find().populate('to').populate('from').then(function(friends) {
			var invitations = friends.filter(function(friend) {
				return friend.userId === req.query.userId && !friend.confirmed;
			});	
			return res.json(invitations);
		});        
    },
    getAcceptedInvitations: function(req, res) {
    	Friend.find().populate('to').populate('from').then(function(friends) {
			var invitations = friends.filter(function(friend) {
				return (friend.to.id === req.query.userId || friend.userId === req.query.userId) && friend.confirmed;
			});
			return res.json(invitations);
		});        
    }, 
    acceptInvitation: function(req, res) {
    	Friend.findOne({id: req.param('id')}).exec(function(err, friend) {
    		if (err) return res.negotiate(err);

    		friend.confirmed = 1;
			
			friend.save(function(error) {
		        if(error) {
		            return res.serverError(err);
		        } else {
		            return res.json(friend);
		        }
		    });
		});        
    },
};

