/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req, res) {

		var id = req.param('id');
		
		var reg = new RegExp('^[0-9]+$');
		if (!reg.test(id)) {
			return res.redirect('home');
		}

		Posts.findOne({
			id: req.param('id')
		}).exec(function(err, post) {
			if (err) return res.redirect('home');

			res.view({ post: post });
		})
	}
};