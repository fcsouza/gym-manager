import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    flex: 1;
    svg {
      cursor: pointer;
      margin-right: 15px;
    }
  }

  button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px dotted #696a80;
    cursor: pointer;
  }
`;
