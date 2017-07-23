/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: {
      type: 'string',
			size: 1000
    },

    email: {
      type: 'string',
			size: 1000
    },

    ocupacao: {
      type: 'string',
			size: 1000
    },

    idade: {
      type: 'integer'
    }
  }
};

