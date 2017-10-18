/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	toggleFavorite: function(req, res) {
		Project.findOne({id: req.param('id')}).exec(function(err, project) {
			if(err) {
				return res.serverError(err);
			}

			project.favorited = !project.favorited;

			project.save(function(error) {
		        if(error) {
		            return res.serverError(err);
		        } else {
		            return res.json({ favorited: project.favorited });
		        }
		    });
			
		});        
    },
    complete: function(req, res) {
		Project.findOne({id: req.param('id')}).exec(function(err, project) {
			if(err) {
				return res.serverError(err);
			}

			project.completed = true;

			project.save(function(error) {
		        if(error) {
		            return res.serverError(err);
		        } else {
		            return res.json({ completed: project.completed });
		        }
		    });
			
		});        
    },
};

