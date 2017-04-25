var router = require('koa-router')();
const UserController = require('../../app/controllers/user.export');

router.get('/api/user/logout', UserController.logout)
router.post('/api/user/login', UserController.login)
router.post('/api/user/register', UserController.register)

module.exports = router;