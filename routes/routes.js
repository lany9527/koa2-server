/**
 * Created by littlestone on 17-4-24.
 */
const router = require('koa-router')();
import UserController from '../controllers/user';

router
  .get('/api/user/logout', UserController.logout)
  .post('/api/user/logout', UserController.logout)
  .post('/api/user/register', UserController.register)

module.exports = router;