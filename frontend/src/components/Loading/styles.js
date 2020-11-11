import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  margin-top: 55px;

  li {
    border-radius: 4px;
    height: 48px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 40px;
    animation: pulse 1s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;
