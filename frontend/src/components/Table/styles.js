import styled from 'styled-components';

export const Container = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    border-collapse: separate;
    border-spacing: 0 0.7em;

    thead {
      th {
        margin-bottom: 10px;
        padding: 10px 20px;
        color: #a9b3c8;
        font-weight: 600;
        text-align: left;

        &:last-child {
          text-align: center;
        }
      }
    }

    tbody {
      tr {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 7px;
        margin-bottom: 5px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

        td {
          color: #52475c;
          padding: 10px 20px;

          &:first-child {
            text-align: left;
            color: #7f93cc;
            font-weight: 600;
          }
        }
      }

      div {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const Delete = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdded8;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
`;

export const Edit = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d7f7f8;
  border-radius: 50%;
  cursor: pointer;
`;

export const Status = styled.span`
  background: #80d5bc;
  border-radius: 7px;
  color: #fff !important;
  padding: 5px 10px;
  font-size: 13px;
`;
