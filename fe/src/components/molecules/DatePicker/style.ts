import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.4em;
  width: fit-content;
  position: absolute;
  top: 0;
  left: 0;
  .react-datepicker__navigation--previous {
    border-right-color: #fff;
  }
  .react-datepicker__navigation--next {
    border-left-color: #fff;
  }
  .react-datepicker__header {
    background: ${({ theme }) => theme.color.brandColor};
  }
  .react-datepicker__month-container {
    font-family: 'Bmeuljiro';
  }
`;

export const DecsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Small = styled.small`
  font-size: 0.8rem;
`;
