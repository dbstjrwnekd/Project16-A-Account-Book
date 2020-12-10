import Router from 'koa-router';
import { getInvitation, postAccount } from 'controllers/user';

const router = new Router();

router.get('/', getInvitation);
router.post('/:accountObjId', postAccount);
export default router;
