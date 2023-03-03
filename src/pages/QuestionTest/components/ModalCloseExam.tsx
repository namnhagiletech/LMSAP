import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterModalWrapper, ModalCustom } from '../styled';

interface IModalCloseExamProps {
  isOpenModalFinish: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const ModalCloseExam: React.FunctionComponent<IModalCloseExamProps> = ({
  isOpenModalFinish,
  onCancel,
  onOk,
}) => {
  const naigate = useNavigate();

  const renderFooter = () => {
    return (
      <FooterModalWrapper>
        <div
          className='button-modal'
          onClick={() => {
            onOk();
            naigate('/');
          }}
        >
          保存して中断する
        </div>
        <div className='button-modal' onClick={onCancel}>
          キャンセル
        </div>
      </FooterModalWrapper>
    );
  };
  return (
    <ModalCustom
      title=''
      open={isOpenModalFinish}
      onOk={onOk}
      onCancel={onCancel}
      footer={renderFooter()}
    >
      <p>
        模擬試験を一時中断しますか？ <br />
        現在の解答内容が保存されます。
      </p>
    </ModalCustom>
  );
};

export default ModalCloseExam;
