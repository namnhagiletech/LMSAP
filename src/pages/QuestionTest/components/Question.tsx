import { Checkbox, Col, Form, FormInstance, Row } from 'antd';
import back from '../../../assets/images/back.svg';
import next from '../../../assets/images/next.svg';
import React, { useMemo, useState } from 'react';
import { QuestionType } from '../type';

import styles from './index.module.scss';

interface IQuestionProps {
  question: QuestionType;
  keyIdx: number;
  isShow: boolean;
  form: FormInstance<any>;
  backStep: () => void;
  nextStep: (questionSelected?: any) => void;
}

const Media = ({ url }: { url?: string }) => {
  if (!url) return null;

  if (url.includes('mp4')) return <video src={url} />;

  return <img src={url} alt='' />;
};

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
      <Row
        gutter={[{ xs: 20 }, { xs: 20 }]}
        align='middle'
        justify={'space-between'}
        className={styles.answerList}
        wrap={false}
      >
        {question.answer.length === 2
          ? question.answer.map((item: any, idx: any) => (
              <Col key={idx} span={10}>
                <Checkbox
                  key={idx}
                  value={`${idx + 1} ` + item.isCorrect}
                  className={item.isCorrect && showCorrectOption ? 'show-more' : undefined}
                >
                  <div className={styles.txtAnswer}>{item.isCorrect ? '正しい' : '誤っている'}</div>
                </Checkbox>
              </Col>
            ))
          : question.answer.map((item: any, idx: any) => (
              <Col key={idx} xs={12} lg={6}>
                <Checkbox
                  key={idx}
                  value={`${idx + 1} ` + item.isCorrect}
                  className={item.isCorrect && showCorrectOption ? 'show-more' : undefined}
                >
                  <div className={styles.txtAnswer}>{idx + 1}</div>
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

  const ansersCorrect = useMemo(() => {
    return question.answer?.filter((answer) => answer.isCorrect);
  }, [question.answer]);

  if (!isShow) return <></>;
  console.log({
    ansersCorrect,
  });

  return (
    <div className={styles.questionWrap}>
      <div className='index-que'>Q{keyIdx}</div>
      <div className='overall-question'>
        <div
          className={styles.contentQuestion}
          dangerouslySetInnerHTML={{
            __html: question.title,
          }}
        />

        <div className={styles.listAnswer}>
          {question.answer.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', fontSize: '25px' }}>
              <div>
                {idx + 1}. {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Form.Item name={`question-${keyIdx}`}>
        <FormItemCheckBoxQuestion showCorrectOption={showCorrectOption} question={question} />
      </Form.Item>

      {showCorrectOption && (
        <div className={styles.explanation}>
          <div className={styles.explainTitle}>Explain</div>

          <div className={styles.explainBody}>
            {ansersCorrect?.map((it) => (
              <div key={it.id}>
                <Media url={it?.explainImageOrVideo ?? ''} />

                {it?.explainText && (
                  <p
                    className={styles.explainText}
                    dangerouslySetInnerHTML={{
                      __html: it.explainText,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <Row align={'middle'} justify='center' wrap={false} className={styles.btnActions}>
        {keyIdx !== 1 && (
          <button className={styles.btn} onClick={backStep}>
            <img src={back} alt='' />
            <div>&nbsp;戻る</div>
          </button>
        )}

        <button
          className={styles.btn}
          onClick={() => {
            showCorrectOption ? nextStep(question) : setShowCorrectOption(true);
          }}
          // disabled={showCorrectOption}
        >
          <div>次&nbsp;</div>
          <img src={next} alt='' />
        </button>
      </Row>
    </div>
  );
};

export default Question;
