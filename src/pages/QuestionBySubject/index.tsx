import React from "react";
import { Link } from "react-router-dom";
import ShampooIcon from "../../assets/icons/Shampoo";
import TitleCommon from "../../components/TitleCommon";
import "./index.scss";

const QuestionBySubject = () => {
  return (
    <div className="question-subject">
      <div className="hidden md:block">
        <TitleCommon
          icon={<ShampooIcon />}
          height="90px"
          title="教科から選ぶ"
          subtitle="Question"
          type="select"
        />
      </div>
      <div className="question-subject__content">
        <div className="question-subject__selection">
          <Link
            to="/AI-test"
            className="question-subject__selection__subject special"
          >
            hello
          </Link>
          <div className="question-subject__selection__subject">hello</div>
          <div className="question-subject__selection__subject">hello</div>
          <div className="question-subject__selection__subject special">
            hello
          </div>
          <div className="question-subject__selection__subject special">
            人体の構造及び機能
          </div>
        </div>
        <div className="question-subject__selection">
          <div className="question-subject__selection__subject">hello</div>
          <div className="question-subject__selection__subject">hello</div>
          <div className="question-subject__selection__subject special">
            hello
          </div>
          <div className="question-subject__selection__subject">hello</div>
          <div className="question-subject__selection__subject">hello</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBySubject;
