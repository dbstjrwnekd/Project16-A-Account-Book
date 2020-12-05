import Router from 'koa-router';
import * as userController from 'controllers/user';

const router = new Router();

router.get('/titleByAccountId', userController.titleByAccountId);

export default router;