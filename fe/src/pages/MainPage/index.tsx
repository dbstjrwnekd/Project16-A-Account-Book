import React, { useEffect, useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { transactionStore, TransactionDBType } from 'stores/Transaction';
import * as S from './style';

export interface Props {}

const convertTransactionDBTypetoTransactionType = (
  input: TransactionDBType[],
) => {
  return input.map((el) => {
    const { _id, category, method, ...other } = el;
    return {
      ...other,
      id: _id,
      category: category.title,
      method: method.title,
    };
  });
};

const MainPage = ({ ...props }: Props) => {
  const [accountDateList, setAccountDateList] = useState<JSX.Element[]>([]);
  const HeaderBar = <S.HeaderBar />;
  const SubHeaderBar = (
    <S.MonthInfoHeader
      month={transactionStore.month}
      total={{
        income: transactionStore.totalPrices.income,
        expense: transactionStore.totalPrices.expense,
      }}
    />
  );

  useEffect(() => {
    const accountDateListComponent = Object.entries(
      toJS(transactionStore.accountDateList),
    ).map((el) => {
      const date = `${transactionStore.year}-${transactionStore.month}-${el[0]}`;
      const oneAccountDate = el[1] as TransactionDBType[];
      return (
        <S.AccountDate
          key={date}
          date={new Date(date)}
          transactionList={convertTransactionDBTypetoTransactionType(
            oneAccountDate,
          )}
        />
      );
    });
    setAccountDateList([...accountDateListComponent]);
  }, [transactionStore.accountDateList]);

  const Contents = (
    <>
      <S.FilterBar />
      {accountDateList}
    </>
  );
  const NavBar = <S.NavBar />;

  return (
    <S.MainPage {...props}>
      <S.HeaderNav
        HeaderBar={HeaderBar}
        SubHeaderBar={SubHeaderBar}
        Contents={Contents}
        NavBar={NavBar}
      />
    </S.MainPage>
  );
};

export default observer(MainPage);
