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
    		Issue.findOne({id: id}).populate('comments', { entityType: 'issue' } ).exec(function(err, issue) {
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
   }
};

