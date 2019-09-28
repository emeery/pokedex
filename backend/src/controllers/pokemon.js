const express = require('express')
const Pokemon = require('../model/pokemon')
const multer = require('multer')

const router = express.Router()

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
};
// valida el tipo mime
const almacen = multer.diskStorage({
  destination: (req, file, cb) => {
      const esValido = MIME_TYPE_MAP[file.mimetype];
      let error = new Error('tipo mime invalido');
      if(esValido) {error = null; }
      cb(error, "images");
  },
  filename: (req, file, cb) => {
      const nombre = file.originalname.toLowerCase().split(' ').join('-');
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, nombre + '-' + Date.now() + '.' + ext );
  }
});

router.post('', (req, res) => {
   res.status(200).json({poke:'pokm'})
});

module.exports = router
