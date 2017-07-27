/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    count: function(req, res) {
        Usuarios
        .count()
        .exec(function(err, usuarios) {
            if (err) return res.json({erro: "Erro ao buscar os leads. " + err});

            return res.json({leads: usuarios});
        });
    }
};

