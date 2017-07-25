/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req, res) {
		Posts.findOne({
			id: req.param('id')
		}).exec(function(err, post) {
			if (err) return res.send(err, 500);

			res.view({ post: post });
		})
	}
};

