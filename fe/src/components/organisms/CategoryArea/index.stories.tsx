import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import CategoryArea from '.';

export default {
  title: 'Organisms / CategoryArea',
};

const dataList = ['random', 'values'];

const defaultClickHandler = () => {
  const a = [];
  a.push(1);
};

const onPlusButtonClick = () => {
  console.log('plus button clicked');
};

export const defaultTabHeader = () => {
  return (
    <ThemeProvider theme={theme}>
      <CategoryArea
        dataList={dataList}
        onClickHandler={defaultClickHandler}
        onPlusButtonClick={onPlusButtonClick}
      />
    </ThemeProvider>
  );
};