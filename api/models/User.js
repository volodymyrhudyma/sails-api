/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
	    type: 'string',
	    required: true,
	},
	surname: {
		type: 'string',
	    required: true,
	},
	email: {
		type: 'string',
	    required: true,
	},
	avatar: {
	    type: 'string',
	    required: true,
	},
	reportedIssues: {
		collection: 'issue',
      	via: 'reporter'
	},
	assignedIssues: {
		collection: 'issue',
      	via: 'assignee'
	},
  }
};

