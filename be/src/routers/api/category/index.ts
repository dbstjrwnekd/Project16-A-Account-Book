import Router from 'koa-router';
import koaCompose from 'koa-compose';
import categoryController from 'controllers/category';
import { verifyAccountAccess, isUnclassifide } from 'middlewares';

const router = new Router();

router.get('/statistics', categoryController.getStatisticsInfo);

router.use('/', verifyAccountAccess);
router.get('/', categoryController.get);
router.post('/', categoryController.post);
router.put('/', categoryController.put);
router.put(
  '/delete',
  koaCompose([isUnclassifide, categoryController.deleteCategory]),
);

export default router;
