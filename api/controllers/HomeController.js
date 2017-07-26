/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
        Posts.find().exec(function(err, posts){
		    if (err) return res.send(err, 500);
			
			var ip = req.headers["X-Forwarded-For"] || req.connection.remoteAddress;

			res.view({ posts: posts, ip: ip });
	    });
    }
};

