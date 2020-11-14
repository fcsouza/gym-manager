import styled from 'styled-components';

export const Plans = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;

  li {
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex-basis: 30%;
    position: relative;
    margin-bottom: 5%;

    header {
      padding: 10px;
      background: #f8fafb;

      strong {
        color: #444444;
        display: block;
      }
    }

    > span {
      position: absolute;
      background: #ff606d;
      color: #fff;
      padding: 3px 15px;
      border-radius: 17px;
      font-weight: 500;
      top: 17px;
      left: -13px;
    }

    > div {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 30px 0;

      > div {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #dce8e8;
        margin: 0 auto;
        padding: 15px;

        img {
          width: 100%;
        }
      }

      strong {
        color: #444;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      span {
        color: #71b4f8;
      }

      p {
        color: #696a80;
        margin-bottom: 15px;
      }
    }

    div:last-child {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-top: 1px solid #ddd;
      padding: 0;

      button {
        width: 100%;
        padding: 15px 0;
        background: none;
        color: #444444;

        &:first-child {
          border-right: 1px solid #ddd;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-top-left-radius: 0;
          transition: background 0.2s;

          &:hover {
            background: #4d85ee;
            color: #fff;
          }
        }

        &:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-top-right-radius: 0;
          transition: background 0.2s;

          &:hover {
            background: #ee4d64;
            color: #fff;
          }
        }
      }
    }
  }
`;
