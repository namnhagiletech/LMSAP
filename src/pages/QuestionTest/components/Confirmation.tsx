import { Col, Row } from 'antd';
import React from 'react';
import { ConfirmationWrapper } from '../styled';

interface IConfirmationProps {
  listAnswer: any[];
  nextStep: () => void;
}

const Confirmation: React.FunctionComponent<IConfirmationProps> = ({ listAnswer, nextStep }) => {
  return (
    <ConfirmationWrapper>
      <div className='title-confirm'>確認画面</div>
      <Row gutter={16}>
        {listAnswer.map((item: any, idx: number) => {
          return (
            <Col key={idx} span={12} style={{ display: 'flex' }}>
              <div className='index-ans'>Q{idx + 1}</div>
              <div className='option-ans'>{item?.option?.toString()}</div>
            </Col>
          );
        })}
      </Row>
      <div className='button-confirm' onClick={nextStep}>
        模擬試験を終了する
      </div>
    </ConfirmationWrapper>
  );
};

export default Confirmation;
