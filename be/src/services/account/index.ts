import { AccountModel } from 'models/account';
import { NotVaildException } from 'models/account/static';
import { UserModel } from 'models/user';

export const getAccountsByUserId = async (userId: string) => {
  // const res = AccountModel.find(userId, { account: true }).populate({
  //   path: 'accounts',
  //   select: '_id title owner',
  // });
  const res = AccountModel.find();
  return res;
};

export const getAccountByTitleAndOwner = async (
  title: string,
  owner: string,
) => {
  const account = await AccountModel.findByTitleAndOwner(title, owner);

  if (!account) throw new NotVaildException();
  return account;
};

export const addUserInAccount = async (
  accountObjId: string,
  userObjId: string,
) => {
  const selectedUserModel = await UserModel.findById(userObjId);

  const result = await AccountModel.update(
    { _id: accountObjId },
    { $addToSet: { users: selectedUserModel } },
  );
  if (result.ok && result.nModified === 0) {
    return { success: true, message: '중복된 유저 입력' };
  }
  if (result.ok) {
    return { success: true, message: '정상적으로 유저 추가' };
  }
  return { success: false, message: result };
};

export default {};
