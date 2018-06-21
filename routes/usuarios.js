const express = require('express');
const router = express.Router();

const usuarioModel= require('../models/usuarios');

router.get('/',usuarioModel.find);

module.exports = router;
