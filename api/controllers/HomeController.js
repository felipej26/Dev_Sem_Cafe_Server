/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
        Posts.find()
		.sort('id DESC')
		.exec(function(err, posts){
		    if (err) return res.send(err, 500);

			res.view({ posts: posts });
	    });
    },

	sobre: function(req, res) {
        res.view();
    },

	acervo: function(req, res) {
		res.view();
	},

	cadastrar: function(req, res) {
		res.view();
	}
};

