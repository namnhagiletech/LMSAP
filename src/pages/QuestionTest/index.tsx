import { Form, Row, Spin } from 'antd';
import { useRef, useState } from 'react';

import Question from './components/Question';
import ResultTest from './components/ResultTest';
import { useMutation, useQuery } from '@apollo/client';
import { GET_QUESTION_AI, SUBMIT_QUESTION_AI } from 'src/services/question-ai';

import styles from './index.module.scss';
import { QuestionType } from './type';
import IconClose from 'src/components/icons/IconClose';
import ModalCloseExam from './ModalCloseExam/ModalCloseExam';

const formatBody = (ansersList: any[], questionList: QuestionType[]) => {
  return ansersList?.reduce((acc, it) => {
    const keys = Object.keys(it)?.[0];
    const values = it?.[keys];

    const [, questionId, subjectId] = keys?.split('_');

    const questionInQuestionList = questionList?.find((val) => val.id === questionId);

    const answers = questionInQuestionList?.answer?.map((answerItem) => {
      const isCorrect = values?.find((answer: string) => answer === answerItem?.id);

      return {
        answerId: answerItem?.id,
        isCorrect: !!isCorrect,
      };
    });

    acc.push({
      answers,
      questionId,
      subjectId,
    });

    return acc;
  }, []);
};

const QuestionTest = () => {
  const [form] = Form.useForm();
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const { data, loading } = useQuery(GET_QUESTION_AI);
  const refListAnswer: any = useRef([]);
  const refAnswersFormat: any = useRef([]);

  const [submitQuestionAi, { data: submitQuestionAiData }] = useMutation(SUBMIT_QUESTION_AI);

  const nextStep = (questionSelected?: QuestionType) => {
    if (refAnswersFormat?.current?.length) {
      setSelectedQuestion(10);
      return;
    }

    if (questionSelected && !refAnswersFormat.current?.length) {
      const allValues = form.getFieldsValue();

      refListAnswer.current.push(allValues);
    }

    if (selectedQuestion + 1 === 10 && !refAnswersFormat.current?.length) {
      handleSubmitAnswers();
      return;
    }

    setSelectedQuestion(selectedQuestion + 1);
  };
  const backStep = () => {
    setSelectedQuestion(selectedQuestion - 1);
  };

  const handleSubmitAnswers = async () => {
    try {
      refAnswersFormat.current = formatBody(refListAnswer.current, data?.getQuestionAi);

      await submitQuestionAi({
        variables: {
          data: {
            questions: refAnswersFormat.current,
          },
        },
      });

      // refAnswersFormat.current = refAnswersFormat.current?.map((it: any) => {
      //   const questionInData = data?.getQuestionAi?.find(
      //     (questionIt: QuestionType) => questionIt?.id === it?.questionId,
      //   );

      //   const countAnswerCorrect = questionInData?.answer?.filter(
      //     (answerItem: Answer) => answerItem.isCorrect,
      //   )?.length;

      //   const countAnswerCorrectUserChoosed = it?.answers?.filter(
      //     (answerItem: any) => answerItem?.isCorrect,
      //   )?.length;
      //   return {
      //     ...it,
      //     isCorrect: countAnswerCorrect === countAnswerCorrectUserChoosed,
      //   };
      // });

      setSelectedQuestion(10);
    } catch (error) {
      console.log({
        error,
      });
    }
  };

  if (loading)
    return (
      <Row align={'middle'} justify='center'>
        <Spin />
      </Row>
    );

  if (!data?.getQuestionAi?.length) return null;

  return (
    <div className={styles.wrap}>
      <div>
        {!refAnswersFormat.current?.length || selectedQuestion === 10 ? (
          <ModalCloseExam>
            <span className={styles.btnClose}>
              <IconClose />
            </span>
          </ModalCloseExam>
        ) : (
          <span className={styles.btnClose} onClick={() => setSelectedQuestion(10)}>
            <IconClose />
          </span>
        )}
        <Form form={form}>
          {data?.getQuestionAi?.map((question: QuestionType, idx: any) => (
            <Question
              key={question?.id}
              isShow={idx === selectedQuestion}
              question={question}
              keyIdx={idx + 1}
              nextStep={nextStep}
              backStep={backStep}
              form={form}
            />
          ))}

          {/* {selectedQuestion === data?.getQuestionAi?.length && (
          <Confirmation listAnswer={refListAnswer.current} nextStep={nextStep} />
        )} */}

          {selectedQuestion === data?.getQuestionAi?.length &&
            submitQuestionAiData?.submitAnswerQuestionAi?.length && (
              <ResultTest
                listAnswer={submitQuestionAiData?.submitAnswerQuestionAi ?? []}
                handleNavigate={(idx) => {
                  setSelectedQuestion(idx);
                }}
                backStep={backStep}
              />
            )}
        </Form>
      </div>
    </div>
  );
};

export default QuestionTest;
