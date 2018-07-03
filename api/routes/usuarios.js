const express = require('express');
const router  = express.Router();

const userModel = require('../models/usuarios');

router.get('/',userModel.find);
router.get('/:id',userModel.findOne);
router.post('/',userModel.create);
router.put('/:id',userModel.update);
router.delete('/:id',userModel.delete);

module.exports = router;
