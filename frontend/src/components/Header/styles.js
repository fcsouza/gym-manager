import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(90deg, #9aa8fc, #71b4f8);
  margin-left: 115px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;

  div {
    display: flex;
    align-items: center;

    input {
      border: 0;
      background: #95aafc;
      margin-left: 10px;
      padding: 10px;
      color: #f7f9fc;

      &::placeholder {
        color: #f7f9fc;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;

    strong {
      color: #f7f9fc;
      display: block;
      margin: 0 20px;
    }

    img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }
`;
