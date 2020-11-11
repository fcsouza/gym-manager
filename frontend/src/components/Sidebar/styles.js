import styled from 'styled-components';

export const Container = styled.nav`
  width: 115px;
  height: 100%;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;

  > a {
    width: 100%;
    height: 60px;
    background: #8691dd;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    a {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #cbced6;
      border-left: 3px solid #fff;

      svg {
        margin-bottom: 7px;
      }

      &:hover,
      &.active {
        border-left: 3px solid #8691dd;
        color: #8691dd;
        font-weight: 600;

        svg {
          fill: #8691dd;
        }
      }
    }
  }
`;
