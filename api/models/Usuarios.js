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
      required: true,
			size: 1000
    },

    sobrenome: {
      type: 'string',
      required: true,
      size: 1000
    },

    email: {
      type: 'string',
      required: true,
      unique: true,
      size: 1000
    },

    ip: {
      type: 'string',
      required: true,
      size: 15
    }
  }
};

