import { Col, Row } from "antd";
import React from "react";
import { ResultTestWrapper } from "../styled";
import { AnswerType } from "../type";

interface IResultTestProps {
  listAnswer: AnswerType[];
  handleNavigate: (p: number) => void;
}

const ResultTest: React.FunctionComponent<IResultTestProps> = ({
  listAnswer,
  handleNavigate,
}) => {
  const showTitleCongrats = (percent: number) => {
    switch (true) {
      case percent < 1 && percent >= 0.8:
        return (
          <div className="box-title">
            <div className="box-header box-header-great">Great</div>
            <div className="dot-result dot-result-great">
              <div className="correct-option">{correctAnswer}</div>
              <div className="total-option">/{listAnswer.length}</div>
            </div>
          </div>
        );
        break;
      case percent === 1:
        return (
          <div className="box-title">
            <div className="box-header box-header-congrats">
              Congratulations!
            </div>
            <div className="dot-result  dot-result-congrats">
              <div className="correct-option">{correctAnswer}</div>
              <div className="total-option">/{listAnswer.length}</div>
            </div>
          </div>
        );
        break;

      default:
        return (
          <div className="box-title">
            <div className="box-header box-header-good">Try harder</div>
            <div className="dot-result  dot-result-good">
              <div className="correct-option">{correctAnswer}</div>
              <div className="total-option">/{listAnswer.length}</div>
            </div>
          </div>
        );
        break;
    }
  };

  const correctAnswer = listAnswer.filter((item) => item.correct).length;
  const percentCorrect = correctAnswer / listAnswer.length;

  return (
    <ResultTestWrapper>
      {showTitleCongrats(percentCorrect)}

      <Row gutter={16} className="list-answer">
        {listAnswer.map((item: AnswerType, idx: number) => {
          return (
            <Col key={idx} span={12}>
              <div className="col-center" onClick={() => handleNavigate(idx)}>
                <div className="index-ans">Q{idx + 1}</div>
                {item.correct ? (
                  <div className="correct-answer" />
                ) : (
                  <div className="wrong-answer">X</div>
                )}
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="box-note">
        問題・解説を確認したい方は問題番号をクリックしてください
      </div>
    </ResultTestWrapper>
  );
};

export default ResultTest;
