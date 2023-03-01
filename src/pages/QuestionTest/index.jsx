import { Form } from "antd";
import { isEqualArray } from "../../helpers/utils";
import { useMemo, useState } from "react";

import Confirmation from "./components/Confirmation";
import Question from "./components/Question";
import ResultTest from "./components/ResultTest";
import { DataList } from "./FakeData";
import { QuestionTestWrapper } from "./styled";

const QuestionTest = () => {
  const [form] = Form.useForm();
  const [listAnswer, setListAnswer] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const nextStep = () => {
    setSelectedQuestion(selectedQuestion + 1);
    check();
  };
  const backStep = () => {
    setSelectedQuestion(selectedQuestion - 1);
  };

  const convertAnswerArray = (arr) => {
    const arr2 = arr.map((item1, idx) => {
      if (!!item1 && !!item1.length) {
        let optionArr = [];
        item1.map((item2) => {
          const list = item2.split(" ");
          optionArr.push(+list[0]);
        });
        return {
          order: idx + 1,
          option: optionArr,
          correct: isEqualArray(optionArr, correctOption[idx]),
        };
      } else {
        return {
          order: idx + 1,
          option: undefined,
          correct: false,
        };
      }
    });
    setListAnswer(arr2);
  };

  const check = () => {
    form.validateFields().then((value) => {
      let lastChoice = [];
      for (let i = 1; i <= ListQuestion.length; i++) {
        lastChoice.push(value[`question-${i}`]);
      }
      convertAnswerArray(lastChoice);
    });
  };

  const ListQuestion = useMemo(
    () =>
      DataList.map((item) => {
        return {
          ...item,
          listAnswer: item.listAnswer.sort(() => Math.random() - 0.5),
        };
      }),
    []
  );

  let correctOption = ListQuestion.map((item) => {
    const arrrayIndex = [];
    item.listAnswer.filter((answer, index) => {
      if (answer.isCorrect === true) arrrayIndex.push(index + 1);
    });
    return arrrayIndex;
  });

  return (
    <QuestionTestWrapper>
      <Form form={form}>
        {ListQuestion.map((question, idx) => (
          <Question
            isShow={idx === selectedQuestion}
            question={question}
            keyIdx={idx + 1}
            nextStep={nextStep}
            backStep={backStep}
            form={form}
          />
        ))}
        {selectedQuestion === ListQuestion.length && (
          <Confirmation listAnswer={listAnswer} nextStep={nextStep} />
        )}
        {selectedQuestion === ListQuestion.length + 1 && (
          <ResultTest
            listAnswer={listAnswer}
            handleNavigate={(idx) => {
              setSelectedQuestion(idx);
            }}
          />
        )}
      </Form>
    </QuestionTestWrapper>
  );
};

export default QuestionTest;
