import React, { useState } from "react";
import "./index.scss";
import Title from "../../components/TitleCommon";
import HairDryer from "../../assets/icons/HairDryer";
import Trial from "./features/Trial";
import MiniTest from "./features/MiniTest";
import Examination from "./features/Examination";

const TrialExamination = () => {
  const [content, setContent] = useState("");
  const showContent = (content: string) => {
    setContent(content);
  };

  const renderSwitch = (param: string) => {
    switch (param) {
      case "exam":
        return <Examination onClose={showContent} />;
      case "trial":
        return <Trial onClose={showContent} />;
      case "mini-test":
        return <MiniTest onClose={showContent} />;
      default:
        return (
          <>
            <div
              onClick={() => showContent("exam")}
              className="examination__content__selection"
            >
              全国統一模試
            </div>
            <div
              onClick={() => showContent("trial")}
              className="examination__content__selection"
            >
              セルフ模試
            </div>
            <div
              onClick={() => showContent("mini-test")}
              className="examination__content__selection"
            >
              小テスト
            </div>
          </>
        );
    }
  };

  return (
    <div className="examination">
      <div className="hidden md:block">
        <Title
          icon={<HairDryer />}
          height="90px"
          title="模擬試験/小テスト"
          subtitle="trial examination"
          type="trial"
        />
      </div>
      <div className="examination__content">{renderSwitch(content)}</div>
    </div>
  );
};

export default TrialExamination;
