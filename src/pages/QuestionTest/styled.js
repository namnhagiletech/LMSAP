import styled from 'styled-components';

export const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-confirm {
    background: #fff;
    padding: 8px 16px;
    border-radius: 50px;
    margin: 20px 0;
  }

  .button-confirm {
    margin-top: 20px;
    background-color: #717071;
    border-radius: 50px;
    padding: 16px 24px;
    cursor: pointer;
  }

  .index-ans {
    color: #a5a072;
    font-size: 20px;
  }

  .option-ans {
    margin-left: 12px;
    background-color: #fff;
    padding: 5px 12px;
    border-radius: 50px;
  }
`;
