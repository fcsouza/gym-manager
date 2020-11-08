import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #f5f5f5;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 4px;
  }
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 50px 10px 50px 115px;

  > h2 {
    font-size: 26px;
    font-weight: 500;
    color: #696a80;
    margin-bottom: 40px;
  }
`;

export const ButtonCreate = styled.button`
  background: #8691dd;
  border-radius: 4px;
  border: 0;
  color: #fff;
  padding: 10px 30px;
  margin: 0 15px;
  font-weight: 500;
`;

export const ButtonCancel = styled.button`
  background: #cbced6;
  border-radius: 4px;
  border: 0;
  color: #fff;
  padding: 10px 20px;
  margin: 0 15px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 70px;

  div {
    & + div {
      padding-left: 60px;
      margin-left: 60px;
      border-left: 1px solid #ddd;
    }

    span {
      display: block;
      color: #777777;
      font-size: 16px;
      margin-bottom: 10px;
    }

    strong {
      font-weight: 700;
      color: #5f8ce3;
      font-size: 28px;
    }
  }
`;

export const FormBox = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  > h2 {
    font-weight: 500;
    color: #696a80;
    margin-bottom: 15px;
  }

  form {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 7px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    padding: 30px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    > div {
      flex-basis: 100%;

      &.col-3 {
        flex-basis: 32%;
      }

      &:last-child {
        margin-top: 30px;
        text-align: center;
      }
    }

    label {
      color: #777777;
      width: 100%;
      display: block;
      margin-top: 15px;
      margin-bottom: 7px;
      font-size: 16px;
    }

    input {
      width: 100%;
      margin-bottom: 5px;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #dddddd;
    }

    span {
      color: red;
      margin-bottom: 15px;
      display: block;
    }
  }
`;
