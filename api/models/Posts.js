/**
 * Posts.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: {
      type: 'string',
      required: true,
      size: 1000
    },

    texto: {
      type: 'string',
      required: true,
      size: 10000
    },

    data: {
      type: 'datetime',
			required: true
    },

    autor: {
      type: 'string',
      required: true,
      size: 1000
    },

    imagem: {
      type: 'string',
      required: true,
      size: 1000
    },

    cabecalho: {
      type: 'string',
      required: true,
      size: 1000
    }
  }
};

