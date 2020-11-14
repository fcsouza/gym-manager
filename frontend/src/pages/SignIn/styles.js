import styled from 'styled-components';
import { Form as Formulario } from '@rocketseat/unform';

export const Container = styled.div`
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Form = styled(Formulario)`
  max-width: 360px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 36px 50px;
  display: flex;
  flex-direction: column;

  > img {
    margin-bottom: 36px;
  }

  label {
    color: #444444;
  }

  input {
    height: 45px;
    border-radius: 4px;
    border: 1px solid #dddddd;
    padding: 10px;
    margin-bottom: 20px;
    margin-top: 10px;
    color: #444444;

    &::placeholder {
      color: #999999;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ee4d64;
    border-radius: 4px;
    color: #fff;
    height: 45px;
    border: 0;
    font-weight: bold;
    transition: background 0.2s;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover {
      background: #de4359;
    }
  }
`;
