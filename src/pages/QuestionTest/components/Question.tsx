import { Checkbox, Col, Form, FormInstance, Row } from 'antd';
import back from '../../../assets/images/back.svg';
import next from '../../../assets/images/next.svg';
import React, { useMemo, useState } from 'react';
import { FooterWrapper, QuestionWrapper } from '../styled';
import { QuestionType } from '../type';
import ModalCloseExam from './ModalCloseExam';

import styles from './index.module.scss';

interface IQuestionProps {
  question: QuestionType;
  keyIdx: number;
  isShow: boolean;
  form: FormInstance<any>;
  backStep: () => void;
  nextStep: (questionSelected?: any) => void;
}

const FormItemCheckBoxQuestion = ({ value = [], onChange, showCorrectOption, question }: any) => {
  const onChangeVal = (val: any) => {
    const lastItem = val?.[val?.length - 1];

    // yes no question
    if (question.level === 1) {
      if (lastItem === value?.[0]) {
        return onChange([]);
      }

      return onChange([lastItem]);
    }

    onChange(val);
  };

  return (
    <Checkbox.Group
      value={value}
      disabled={showCorrectOption}
      className='radio-custom'
      onChange={onChangeVal}
    >
      <Row gutter={16}>
        {question.answer.length === 2
          ? question.answer.map((item: any, idx: any) => (
              <Col key={idx} span={12}>
                <Checkbox
                  key={idx}
                  value={`${idx + 1} ` + item.isCorrect}
                  className={item.isCorrect && showCorrectOption ? 'show-more' : undefined}
                >
                  <div>{item.isCorrect ? '正しい' : '誤っている'}</div>
                </Checkbox>
              </Col>
            ))
          : question.answer.map((item: any, idx: any) => (
              <Col key={idx} xs={12} md={6} sm={12}>
                <Checkbox
                  key={idx}
                  value={`${idx + 1} ` + item.isCorrect}
                  className={item.isCorrect && showCorrectOption ? 'show-more' : undefined}
                >
                  {idx + 1}
                </Checkbox>
              </Col>
            ))}
      </Row>
    </Checkbox.Group>
  );
};

const Question: React.FunctionComponent<IQuestionProps> = ({
  keyIdx,
  question,
  isShow,
  nextStep,
  backStep,
  form,
}) => {
  const [showCorrectOption, setShowCorrectOption] = useState(false);
  const [isOpenModalFinish, setIsOpenModalFinish] = useState(false);

  const ansersCorrect = useMemo(() => {
    return question.answer?.filter((answer) => answer.isCorrect);
  }, [question.answer]);

  return (
    <QuestionWrapper isShow={isShow}>
      <div className='wrong-answer' onClick={() => setIsOpenModalFinish(true)}>
        X
      </div>
      <div className='index-que'>Q{keyIdx}</div>
      <div className='overall-question'>
        <div
          className='content-question'
          dangerouslySetInnerHTML={{
            __html: question.title,
          }}
        />

        {/* {question?.level !== 1 && ( */}
        <div className='list-answer'>
          {question.answer.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', fontSize: '25px' }}>
              <div>
                {idx + 1}. {item.text}
              </div>
            </div>
          ))}
        </div>
        {/* )} */}
      </div>

      <Form.Item name={`question-${keyIdx}`}>
        <FormItemCheckBoxQuestion showCorrectOption={showCorrectOption} question={question} />
      </Form.Item>

      {showCorrectOption && (
        <div className={styles.explanation}>
          {ansersCorrect?.map((it) => (
            <div key={it.id}>
              {it?.explainText && <p>{it.explainText}</p>}
              {it?.explainImageOrVideo && <video src={it?.explainImageOrVideo} />}
            </div>
          ))}
        </div>
      )}

      <FooterWrapper>
        {keyIdx !== 1 ? (
          <div className='button-footer button-footer-back' onClick={backStep}>
            <img src={back} alt='' />

            <div>&nbsp;戻る</div>
          </div>
        ) : (
          <div />
        )}

        <div
          className='button-footer button-footer-next'
          onClick={() => {
            showCorrectOption ? nextStep(question) : setShowCorrectOption(true);
          }}
        >
          <div>次&nbsp;</div>
          <img src={next} alt='' />
        </div>
      </FooterWrapper>

      <ModalCloseExam
        isOpenModalFinish={isOpenModalFinish}
        onOk={() => {
          setIsOpenModalFinish(false);
        }}
        onCancel={() => {
          setIsOpenModalFinish(false);
        }}
      />
    </QuestionWrapper>
  );
};

export default Question;
