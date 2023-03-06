/* eslint-disable react/jsx-key */
import { Form } from 'antd';
import { isEqualArray } from '../../helpers/utils';
import { useMemo, useState } from 'react';

import Confirmation from './components/Confirmation';
import Question from './components/Question';
import ResultTest from './components/ResultTest';
import { useQuery } from '@apollo/client';
import { GET_QUESTION_AI } from 'src/services/question-ai';

import styles from './index.module.css';
import { Answer, QuestionType } from './type';

const QuestionTest = () => {
  const [form] = Form.useForm();
  const [listAnswer, setListAnswer] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const { data, loading } = useQuery(GET_QUESTION_AI);

  const correctOption = useMemo(() => {
    return data?.getQuestionAi?.map((item: QuestionType) => {
      const arrrayIndex: any = [];

      item.answer.forEach((answer: Answer, index: any) => {
        if (answer.isCorrect) arrrayIndex.push(index + 1);
      });

      return arrrayIndex;
    });
  }, [data?.getQuestionAi]);

  const nextStep = () => {
    setSelectedQuestion(selectedQuestion + 1);
    check();
  };
  const backStep = () => {
    setSelectedQuestion(selectedQuestion - 1);
  };

  const convertAnswerArray = (arr: any) => {
    const arr2 = arr.map((item1: any, idx: any) => {
      if (!!item1 && !!item1.length) {
        let optionArr: any = [];
        item1.map((item2: any) => {
          const list = item2.split(' ');
          optionArr.push(+list[0]);
        });
        return {
          order: idx + 1,
          option: optionArr,
          correct: isEqualArray(optionArr, correctOption[idx]),
        };
      }

      return {
        order: idx + 1,
        option: undefined,
        correct: false,
      };
    });
    setListAnswer(arr2);
  };

  const check = () => {
    form.validateFields().then((value) => {
      let lastChoice = [];
      for (let i = 1; i <= data?.getQuestionAi?.length; i++) {
        lastChoice.push(value[`question-${i}`]);
      }
      convertAnswerArray(lastChoice);
    });
  };

  if (loading || !data?.getQuestionAi?.length) return null;

  return (
    <div className={styles.wrap}>
      <Form form={form}>
        {data?.getQuestionAi?.map((question: QuestionType, idx: any) => (
          <Question
            isShow={idx === selectedQuestion}
            question={question}
            keyIdx={idx + 1}
            nextStep={nextStep}
            backStep={backStep}
            form={form}
          />
        ))}
        {selectedQuestion === data?.getQuestionAi?.length && (
          <Confirmation listAnswer={listAnswer} nextStep={nextStep} />
        )}
        {selectedQuestion === data?.getQuestionAi?.length + 1 && (
          <ResultTest
            listAnswer={listAnswer}
            handleNavigate={(idx) => {
              setSelectedQuestion(idx);
            }}
          />
        )}
      </Form>
    </div>
  );
};

export default QuestionTest;
