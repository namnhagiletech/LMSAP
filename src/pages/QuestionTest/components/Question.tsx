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

  if (url.includes('mp4'))
    return (
      <video
        src={url?.startsWith('http') ? url : process.env.REACT_APP_API_ENDPOINT_UPLOAD + url}
      />
    );

  return (
    <img
      src={url?.startsWith('http') ? url : process.env.REACT_APP_API_ENDPOINT_UPLOAD + url}
      alt=''
    />
  );
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
        gutter={[{ xs: 10, md: 20 }, {}]}
        align='middle'
        justify={'space-between'}
        className={styles.answerList}
      >
        {question.answer.length === 2
          ? question.answer.map((item: any, idx: any) => (
              <Col key={idx} span={6}>
                <Checkbox
                  key={idx}
                  value={item?.id}
                  className={item.isCorrect && showCorrectOption ? 'show-more' : undefined}
                >
                  <div className={styles.txtAnswer}>{item?.text || ''}</div>
                </Checkbox>
              </Col>
            ))
          : question.answer.map((item: any, idx: any) => (
              <Col key={idx} span={6}>
                <Checkbox
                  key={idx}
                  value={item?.id}
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
}) => {
  const [showCorrectOption, setShowCorrectOption] = useState(false);
  const valueAnswer = Form.useWatch([`question_${question?.id}_${question?.subjectId}`]);

  const isSelectedAnswer = valueAnswer?.filter(Boolean);

  const ansersCorrect = useMemo(() => {
    return question.answer?.filter((answer) => answer.isCorrect);
  }, [question.answer]);

  if (!isShow) return <></>;
  return (
    <div className={styles.questionWrap}>
      <div className='index-que'>Q{keyIdx}</div>
      <div className='overall-question mb-4'>
        <div
          className={styles.contentQuestion}
          dangerouslySetInnerHTML={{
            __html: question?.title?.split('\n')?.join('<br />'),
          }}
        />
        {question?.description && (
          <div
            className={styles.contentQuestion}
            dangerouslySetInnerHTML={{
              __html: question?.description?.split('\n')?.join('<br />'),
            }}
          />
        )}
        {question?.file && (
          <div className={styles.mediaQuestion}>
            <Media url={question?.file ?? ''} />
          </div>
        )}
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

      <Form.Item name={`question_${question?.id}_${question?.subjectId}`} preserve>
        <FormItemCheckBoxQuestion showCorrectOption={showCorrectOption} question={question} />
      </Form.Item>

      {showCorrectOption && (
        <div className={styles.explanation}>
          <div className={styles.explainTitle}>解 説</div>

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
          disabled={!isSelectedAnswer?.length}
        >
          <div>次&nbsp;</div>
          <img src={next} alt='' />
        </button>
      </Row>
    </div>
  );
};

export default Question;
