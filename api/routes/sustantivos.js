const express = require('express');
const router  = express.Router();

const verbModel = require('../models/sustantivos');

router.get('/',verbModel.find);
//router.get('/:id',userModel.findOne);
router.post('/',verbModel.create);
//router.put('/:id',userModel.update);
//router.delete('/:id',userModel.delete);
module.exports = router;