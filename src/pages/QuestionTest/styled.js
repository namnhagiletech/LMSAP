import styled from 'styled-components';

export const ResultTestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .dot-result {
    color: #fff;
    height: 180px;
    width: 180px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-good {
      background-color: #a5a072;
      border: 20px solid #e0ddc7;
    }

    &-great {
      background-color: #ed5d8e;
      border: 20px solid #ffe2d7;
    }

    &-congrats {
      background-color: #60d888;
      border: 20px solid #eafcb1;
    }
  }

  .box-title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .correct-option {
    font-size: 80px;
    height: 80px;
    line-height: 80px;
  }

  .total-option {
    font-size: 31px;
    height: 31px;
    line-height: 31px;
  }

  .index-ans {
    color: #a5a072;
    font-size: 20px;
    margin-right: 10px;
  }

  .correct-answer {
    height: 20px;
    width: 20px;
    background-color: #f7f7f7;
    border-radius: 50%;
    border: 4px solid #ff5277;
    display: inline-block;
  }

  .wrong-answer {
    height: 20px;
    width: 20px;
    color: #717071;
    font-size: 20px;
    display: flex;
    align-items: center;
    font-weight: 700;
  }

  .col-center {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
      background-color: #fff;
      border-radius: 50px;
    }
  }

  .box-header {
    font-size: 40px;
    color: #a5a072;
    margin: 20px 0;
  }

  .box-note {
    color: #a5a072;
    background-color: #fff;
    width: 100%;
    font-size: 11.8px;
    display: flex;
    justify-content: center;
  }

  .list-answer {
    margin: 20px 0;
  }
`;

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
