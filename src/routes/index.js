const express = require('express');
const router = express.Router();

const {
    getFakeData,
    getFakeDataById,
    createFakeData,
    updateFakeData,
    deleteFakeData
} = require('../controllers/fakeApiController');
const { validate, schemas } = require('../middlewares/validate');


router.get('/getData', getFakeData);

router.get('/get/:id',
    validate(schemas.getFakeDataByIdSchema),
    getFakeDataById
);

router.post('/create', createFakeData);

router.put('/update/:id', updateFakeData);

router.delete('/delete/:id', deleteFakeData);

module.exports = router;