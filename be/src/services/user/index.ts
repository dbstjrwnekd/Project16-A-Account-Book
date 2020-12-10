/* eslint-disable no-param-reassign */
import { AccountModel, IAccountDocument } from 'models/account';
import { IUserDocument } from 'models/user';

export const titleByAccountId = async (accountId: String) => {
  const account = await AccountModel.findOne(
    { _id: accountId },
    { _id: false, title: true },
  ).exec();

  return account;
};

export const getInvitation = async (user: IUserDocument) => {
  const account: any = user.invitations?.map((invitation) =>
    AccountModel.findById(invitation.accounts).select(
      'title _id ownerName accountProfile',
    ),
  );
  const results = await Promise.all(account);
  return results;
};

export const registerAccount = async (
  accountObjId: string,
  user: IUserDocument,
) => {
  const before = user.invitations.length;
  user.invitations = user.invitations?.filter(
    (invitation) => String(invitation.accounts) !== accountObjId,
  );
  if (before === user.invitations.length) return Promise.resolve();
  return Promise.all([
    user.save(),
    AccountModel.updateOne(
      { _id: accountObjId },
      { $addToSet: { users: user } },
    ),
  ]);
};
export default titleByAccountId;
