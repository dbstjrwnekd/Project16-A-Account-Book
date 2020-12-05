import React from 'react';
import * as S from './style';

export interface OneDateType {
  date?: number;
  income?: number;
  expense?: number;
}
export interface Props extends OneDateType {
  onClick?: () => void;
}

const CalenderOneDate = ({
  date,
  income,
  expense,
  onClick,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.CalenderOneDate onClick={onClick} {...props}>
      <S.DateText>{date}</S.DateText>
      <S.PriceTextWrap>
        <S.IncomeText>{income}</S.IncomeText>
        <S.ExpenseText>{expense}</S.ExpenseText>
      </S.PriceTextWrap>
      <S.EmptyArea />
    </S.CalenderOneDate>
  );
};

export default CalenderOneDate;