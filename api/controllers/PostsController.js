/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req, res) {

		var id = req.param('id');
		console.log(id);
		var reg = new RegExp('^[0-9]+$');
		if (!reg.test(id)) {
			console.log('Ta aqui');
			return res.redirect('home');
		}

		console.log('Ta aqui 2');

		Posts.findOne({
			id: req.param('id')
		}).exec(function(err, post) {
			if (err) return res.redirect('home');

			res.view({ post: post });
		})
	}
};