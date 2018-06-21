const express = require('express');
const router  = express.Router();

const mascotaModel = require('../models/mascotas');

router.get('/',mascotaModel.find);
router.get('/:id',mascotaModel.findOne);
router.post('/',mascotaModel.create);
router.put('/:id',mascotaModel.update);
router.delete('/:id',mascotaModel.delete);

module.exports = router;
