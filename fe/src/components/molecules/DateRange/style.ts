import styled from 'styled-components';

export const DecsContainer = styled.div`
  display: grid;
  max-width: 240px;
  grid-gap: 0.7em;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem 0.3rem;
  background: transparent;
  background: ${({ theme }) => theme.color.white};
  .date-container {
    display: flex;
    justify-content: center;
  }
  .my-react-picker {
    text-align: center;
  }

  & > div {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Small = styled.small`
  font-size: 0.8rem;
  text-align: center;
  color: ${({ theme }) => theme.color.subText};
`;
