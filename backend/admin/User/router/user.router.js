const express = require('express');
const router = express.Router();
const userinfo = require('../controlls/user.controlls')

router.post('/create', userinfo.create);
router.get('/', userinfo.get);
router.put('/update/:id', userinfo.update);
router.delete('/remove/:id', userinfo.remove);

module.exports = router