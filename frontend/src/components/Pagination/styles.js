import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  ul {
    background: #fff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    padding: 4px 15px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      height: 30px;
      width: 30px;
      cursor: pointer;
      color: #696a80;
      font-weight: 600;
      border-radius: 4px;
      margin: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      &.active,
      &:hover {
        color: #fff;
        background: #5f8ce3;
      }
    }
  }
`;
