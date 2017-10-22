/**
 * IssueController
 *
 * @description :: Server-side logic for managing Issues
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	changeStatus: function(req, res) {
		Issue.findOne({id: req.param('id')}).exec(function(err, issue) {
			if(err) {
				return res.serverError(err);
			}

			issue.status = req.param('status');

			issue.save(function(error) {
		        if(error) {
		            return res.serverError(err);
		        } else {
		            return res.json({ status: issue.status });
		        }
		    });

		});
    },
    changeAssignee: function(req, res) {

    	Issue.update({id: req.param('id')}, {assignee: req.param('assignee')}).exec(function(err, issue) {
    		if(err) {
				return res.serverError(err);
			}
			// Avoid making unnecessary query to DB
			Issue.findOne({id: req.param('id')}).populate('assignee').exec(function(err, issue) {
				sails.log.debug(issue);
				if(err) {
					return res.serverError(err);
				}
				return res.json(issue);
			});
    	});
    },
    latest: function(req, res) {
    	var issues = Issue.find();
    	issues.limit(1);

		issues.exec(function(err, latestIssue) {
			if(err) {
				return res.serverError(err);
			}
            return res.json({ issue: latestIssue[0] });
		});
    },
    find: function(req, res){
    	var id = req.param('id');
    	if(id) {
    		Issue.findOne({id: id}).populate('comments', { entityType: 'issue' } ).populate('reporter').populate('assignee').exec(function(err, issue) {
				if(err) {
					return res.serverError(err);
				}
	            return res.json(issue);
			});
    	} else {
    		Issue.find({projectId: req.query.projectId}).exec(function(err, issues) {
				if(err) {
					return res.serverError(err);
				}
	            return res.json(issues);
			});
    	}
   },
    createAttachment: function(req, res) {
      // Get the file

      req.file('file').upload({
        // don't allow the total upload size to exceed ~10MB
        maxBytes: 5000000
      },function whenDone(err, uploadedFile) {

        if (err) {
          return res.negotiate(err);
        }

        // If no files were uploaded, respond with an error.
        if (uploadedFile.length === 0){
          return res.badRequest('No attachment was uploaded');
        }

        return res.json(uploadedFile);
      });
    },
};

