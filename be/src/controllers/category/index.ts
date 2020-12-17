import { Context } from 'koa';
import {
  getCategories,
  postCategory,
  updateCategory,
  deleteOneCategory,
} from 'services/category';

const get = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const categorisedType = await getCategories(accountObjId);
  ctx.status = 200;
  ctx.body = categorisedType;
};

const post = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const { type, title, color } = ctx.request.body;

  await postCategory(type, title, color, accountObjId);
  ctx.status = 201;
  ctx.res.end();
};

const put = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const { objId, type, title, color } = ctx.request.body;

  await updateCategory(objId, type, title, color, accountObjId);
  ctx.status = 201;
  ctx.res.end();
};

const deleteCategory = async (ctx: Context) => {
  const { accountObjId, category } = ctx.params;
  await deleteOneCategory(accountObjId, category);
  ctx.status = 204;
  ctx.res.end();
};

export default { get, post, put, deleteCategory };
