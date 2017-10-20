/**
 * Issue.js
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
	slug: {
	    type: 'string',
	    required: true,
	},
	description: {
	    type: 'string',
	    required: true,
	},
	type: {
	    type: 'string',
	    required: true,
	},
	status: {
	    type: 'string',
	    required: true,
	    defaultsTo: 'to-do'
	},
	projectId: {
	    type: 'string',
	    required: true,
	},
	priority: {
		type: 'string',
		required: true,
	},
	comments: {
		collection: 'comment',
		via: 'entityId'
	},
	reporter: {
		model: 'user'
	},
	assignee: {
		model: 'user'
	},
  }
};

