import { Col, Row } from 'antd';
import classNames from 'classnames';
import React from 'react';
import back from '../../../assets/images/back.svg';

import styles from './index.module.scss';

interface IResultTestProps {
  listAnswer: any[];
  handleNavigate: (p: number) => void;
  backStep: () => void;
}

const ResultTest: React.FunctionComponent<IResultTestProps> = ({
  listAnswer,
  handleNavigate,
  backStep,
}) => {
  const correctAnswer = listAnswer.filter((item) => item.correct).length;
  const percentCorrect = correctAnswer / listAnswer.length;

  const showTitleCongrats = (percent: number) => {
    switch (true) {
      case percent < 1 && percent >= 0.8:
        return (
          <div className='box-title'>
            <div className='box-header box-header-great'>Great</div>
            <div className='dot-result dot-result-great'>
              <div className='correct-option'>{correctAnswer || 0}</div>
              <div className='total-option'>/{listAnswer.length}</div>
            </div>
          </div>
        );
        break;
      case percent === 1:
        return (
          <div className='box-title'>
            <div className='box-header box-header-congrats'>Congratulations!</div>
            <div className='dot-result  dot-result-congrats'>
              <div className='correct-option'>{correctAnswer || 0}</div>
              <div className='total-option'>/{listAnswer.length}</div>
            </div>
          </div>
        );
        break;

      default:
        return (
          <div className='box-title'>
            <div className='box-header box-header-good'>Try harder</div>
            <div className='dot-result  dot-result-good'>
              <div className='correct-option'>{correctAnswer || 0}</div>
              <div className='total-option'>/{listAnswer.length}</div>
            </div>
          </div>
        );
        break;
    }
  };

  return (
    <div className={styles.resultWrap}>
      {showTitleCongrats(percentCorrect)}

      <Row gutter={16} className='list-answer'>
        {listAnswer.map((item: any, idx: number) => {
          return (
            <Col key={idx} span={12}>
              <div className='col-center' onClick={() => handleNavigate(idx)}>
                <div className='index-ans'>Q{idx + 1}</div>
                {item.correct ? (
                  <div className='correct-answer' />
                ) : (
                  <div className='wrong-answer'>X</div>
                )}
              </div>
            </Col>
          );
        })}
      </Row>
      <p className={classNames(styles.boxNote, 'mb-10')}>
        <span>問題・解説を確認したい方は問題番号をクリックしてください</span>
      </p>

      <Row align={'middle'} justify='center'>
        <button className={styles.btn} onClick={backStep}>
          <img src={back} alt='' />
          <div>&nbsp;戻る</div>
        </button>
      </Row>
    </div>
  );
};

export default ResultTest;
