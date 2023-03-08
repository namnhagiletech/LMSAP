import { Modal, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const ModalCloseExam = ({ children }: { children: React.ReactNode }) => {
  const naigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const onVisible = () => {
    setVisible(!visible);
  };

  const renderFooter = () => {
    return (
      <Row className={styles.btnActions} wrap={false} align='middle' justify={'center'}>
        <div
          className='button-modal'
          onClick={() => {
            naigate('/');
          }}
        >
          保存して中断する
        </div>
        <div className='button-modal' onClick={onVisible}>
          キャンセル
        </div>
      </Row>
    );
  };

  return (
    <>
      <span onClick={onVisible}>{children}</span>
      <Modal
        className={styles.modalClose}
        title=''
        open={visible}
        footer={renderFooter()}
        onCancel={onVisible}
        closeIcon={<></>}
        centered
      >
        <p>模擬試験を一時中断しますか？</p>

        <p> 現在の解答内容が保存されます。</p>
      </Modal>
    </>
  );
};

export default ModalCloseExam;
