import { makeAutoObservable, runInAction, toJS } from 'mobx';
import CategoryAPI from 'apis/category';
import { ICategory } from 'types';
import { TransactionStore } from '../Transaction';

export const categoryType = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  UNCLASSIFIED: 'UNCLASSIFIED',
};

const METHOD = 'METHOD';

export const CategoryStore = makeAutoObservable({
  categoryList: {
    expense: [],
    income: [],
    unclassified: [],
  },

  getCategories(type: string): ICategory[] {
    const convertedType = categoryConverter(type);
    if (convertedType === categoryType.EXPENSE) {
      return toJS(this.categoryList.expense);
    }
    if (convertedType === categoryType.INCOME) {
      return toJS(this.categoryList.income);
    }
    return toJS(this.categoryList.unclassified);
  },

  async loadCategories() {
    const categories: any = await CategoryAPI.getCategories(
      TransactionStore.accountObjId,
    );

    runInAction(() => {
      this.categoryList.expense = categories.EXPENSE || [];
      this.categoryList.income = categories.INCOME || [];
      this.categoryList.unclassified = categories.UNCLASSIFIED || [];
    });
    return Promise.resolve();
  },
});

export const categoryConverter = (input: string): string => {
  switch (input) {
    case '지출':
    case 'expense':
    case categoryType.EXPENSE:
      return categoryType.EXPENSE;

    case '수입':
    case 'income':
    case categoryType.INCOME:
      return categoryType.INCOME;

    case '결제수단':
    case 'method':
    case METHOD:
      return METHOD;

    default:
      return categoryType.UNCLASSIFIED;
  }
};
export const categoryConvertBig2Small = (input: string) => {
  switch (input) {
    case categoryType.EXPENSE:
    case 'expense':
    case '지출':
      return 'expense';

    case categoryType.INCOME:
    case 'income':
    case '수입':
      return 'income';

    default:
      return 'unclassified';
  }
};
export default {};
