/**
 * Project.js
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
	tags: {
	    type: 'array',
	    required: true,
	},
	favorited: {
	    type: 'boolean',
	    required: true,
	},
	completed: {
	    type: 'boolean',
	    required: true,
	},
	progress: {
		type: 'integer',
		required: true,
		defaultsTo: 0
	},
	finishAt: {
	    type: 'date',
	    required: true,
	},
  }
};

