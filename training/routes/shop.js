const express = require('express');
const {log, loadHtml} = require('../toolkit');

const router = express.Router();

router.get('/', (req, res, next) => {

    res.send(loadHtml('index'));

});












module.exports = router;