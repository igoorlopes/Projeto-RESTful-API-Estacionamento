const express = require('express');
const router = express.Router();
const {getCarros, getCarroEspecifico,postCarro,putCarro,deleteCarro} = require('../controllers/carros-controller');


router.get('/', getCarros);
router.get('/:id_carros', getCarroEspecifico);
router.post('/', postCarro);
router.put('/:id', putCarro);
router.delete('/:id', deleteCarro);

module.exports = router;