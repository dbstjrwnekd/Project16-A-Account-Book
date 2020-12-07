import Koa from 'koa';
import { invalidTransactionError } from 'libs/error';
import * as service from 'services/transaction';

const getTransactionList = async (ctx: Koa.Context) => {
  const { startDate, endDate } = ctx.query;
  const { accountObjId } = ctx.params;
  const res = await service.getTransactionList({
    startDate,
    endDate,
    accountObjId,
  });
  ctx.status = res.length === 0 ? 204 : 200;
  ctx.body = res;
};

const getTransaction = async (ctx: Koa.Context) => {
  const { transactionObjId } = ctx.params;
  try {
    const transaction = await service.getTransaction(transactionObjId);
    ctx.body = transaction;
  } catch (e) {
    throw invalidTransactionError;
  }
};

const post = async (ctx: Koa.Context) => {
  const { transaction } = ctx.request.body;
  const { accountObjId } = ctx.params;
  try {
    await service.saveAndAddToAccount(transaction, accountObjId);
  } catch (e) {
    e.status = 400;
    throw e;
  }
  ctx.status = 201;
  ctx.res.end();
};

const updateTransaction = async (ctx: Koa.Context) => {
  const { transaction } = ctx.request.body;
  const { transactionObjId } = ctx.params;
  try {
    await service.updateTransaction(transactionObjId, transaction);
    ctx.res.end();
  } catch (e) {
    throw invalidTransactionError;
  }
};

export default { getTransactionList, post, getTransaction, updateTransaction };
