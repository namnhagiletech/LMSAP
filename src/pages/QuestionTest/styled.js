import { Modal } from 'antd';
import styled from 'styled-components';

export const ModalCustom = styled(Modal)`
  width: fit-content;

  p {
    display: flex;
    justify-content: center;
  }

  .ant-modal-close {
    display: none;
  }

  .ant-modal-content {
    width: fit-content;
    margin: 0 auto;
    border-radius: 29px;
    padding: 35px;
  }
`;

export const FooterModalWrapper = styled.div`
  display: flex;
  justify-content: center;

  .button-modal {
    cursor: pointer;
    border-radius: 50px;
    padding: 5px 15px;
    background-color: #717071;
    width: max-content;
    margin: 0 5px;
  }
`;

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

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: ${(props) => (props.isShow ? `block` : `none`)};

  .wrong-answer {
    color: #717071;
    font-size: 20px;
    display: flex;
    align-items: center;
    font-weight: 700;
    justify-content: end;
    cursor: pointer;
  }

  .index-que {
    color: #a5a072;
    font-size: 40px;
    display: flex;
    justify-content: center;
  }
  .content-question {
    margin-bottom: 20px;
    font-size: 24.5px;
  }

  .list-answer {
    margin-bottom: 30px;
  }

  .ant-row {
    width: 100%;
    justify-content: center;
  }

  .ant-col {
    display: flex;
    justify-content: center;
  }

  .ant-checkbox-group {
    width: 100%;
  }

  .ant-form-item {
    width: 100%;
  }

  .overall-question {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: calc(100vh - 355px); */
    /* min-height: 200px; */
    max-height: 400px;
    overflow-y: auto;
    width: 100%;

    @media only screen and (max-width: 600px) {
      height: 300px;
    }
  }

  .radio-custom .ant-checkbox-wrapper {
    border: 2px solid #ccc;
    border-radius: 50px;
    margin: 8px;
    width: 80%;
    max-width: 240px;
    height: 35px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .radio-custom .ant-checkbox-wrapper-checked {
    background: #aaa;
  }

  .radio-custom .ant-checkbox {
    z-index: -1;
    width: 0;
  }

  .show-more {
    background-color: red !important;
  }

  .show-more span {
    color: white;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  position: absolute;
  bottom: 50px;
  right: 20px;
  left: 20px;
  /* position: absolute;
  bottom: 30px; */

  .button-footer {
    display: flex;
    cursor: pointer;
  }

  .ant-steps-item-icon {
    width: 24px;
    height: 24px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
  .ant-steps-item-finish .ant-steps-item-icon {
    border-radius: 4px;
    background: #154398 !important;
    span span svg {
      fill: #fff;
    }
  }
  .ant-steps-item-active .ant-steps-item-icon {
    border-radius: 4px;
    background: #154398 !important;
    color: #fff !important;
  }

  .ant-steps-item-wait .ant-steps-item-icon {
    border-radius: 4px;
    background: #dddddd;
  }
  .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
    color: #fff !important;
  }

  .ant-steps-item-title {
    font-weight: bold;
    font-size: 12px;
  }
`;
