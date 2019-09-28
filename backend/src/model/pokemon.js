const mongoose = require('mongoose')
const pokemonEsquema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  tipo: {
    type: Array,
    'default': [
      'veneno',
      'volador',
      'agua',
      'psiquico',
      'tierra',
      'hielo',
      'planta',
      'roca'
    ]
  },
  imagen: {
    type: String,
    required: true
  },
  activo: {
    type: Boolean,
  }
})
const Pokemon = mongoose.model('Perfil', pokemonEsquema)
module.exports = Pokemon;
