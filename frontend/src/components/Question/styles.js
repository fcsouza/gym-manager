import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 40px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    time {
      font-size: 15px;
      color: #cbced6;
    }
  }

  p {
    color: #696a80;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-left: 15px;
    line-height: 20px;
  }

  > div {
    border-top: 1px solid #dddddd;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-top: 15px;
  img {
    width: ${props => (props.answer ? '40px' : '60px')};
    height: ${props => (props.answer ? '40px' : '60px')};
    border-radius: 50%;
  }

  span {
    color: #63bcf0;
    font-size: 15px;
    font-weight: 600;
    margin-left: 15px;
  }
`;
