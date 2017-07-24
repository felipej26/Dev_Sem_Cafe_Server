/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req, res) {
        Posts.findAll(function(err, posts){
		    if (err) return res.send(err, 500);

		    res.view({ model: posts });
	    });
    }
};

