/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	inserir: function(req, res) {
        if (!req.param('nome') || !req.param('sobrenome') || !req.param('email') || !req.param('ocupacao')) {
            return res.json(400, {
                result: 'BAD_REQUEST',
                reason: 'Parametros invalidos (nome, sobrenome, email, ocupacao)'
            });
        }

        var email = req.param('email');
        var values = {
            nome: req.param('nome') + ' ' + req.param('sobrenome'),
            email: email,
            ocupacao: req.param('ocupacao'),
            ip: req.ip
        }

        Usuarios.findOrCreate({
            email: email
        }, values)
        .then(function cb(usuario) {

        })
        .catch(function cbError(err) {
            return res.json(500, {
                result: 'BAD_REQUEST',
                reason: err
            });
        });
    }
};

