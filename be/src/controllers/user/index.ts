import Koa from 'koa';
import * as userService from 'services/user';
import { IUserDocument } from 'models/user';

export const titleByAccountId = async (ctx: Koa.Context) => {
  const { accountId } = ctx.query;
  const title = await userService.titleByAccountId(accountId);
  ctx.status = 200;
  ctx.response.body = title;
};

export const getInvitation = async (ctx: Koa.Context) => {
  const { user }: { user: IUserDocument } = ctx.request.body;
  const accounts = await userService.getInvitation(user);
  const invitations = accounts.map((account: any, idx) => ({
    accountObjId: account._id,
    title: account.title,
    ownerName: account.ownerName,
    host: user.invitations[idx].host,
  }));
  ctx.body = invitations;
};

export const postAccount = async (ctx: Koa.Context) => {
  const { user }: { user: IUserDocument } = ctx.request.body;
  const { accountObjId }: { accountObjId: string } = ctx.params;
  await userService.registerAccount(accountObjId, user);
  ctx.status = 201;
  ctx.res.end();
};
export default titleByAccountId;
