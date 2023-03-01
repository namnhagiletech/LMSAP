import React from "react";
import "../index.scss";
import CloseIcon from "../../../assets/icons/Close";
import ButtonCommon from "../../../components/ButtonCommon";
import { Link } from "react-router-dom";

const Examination = ({ onClose }: any) => {
  return (
    <div className="examination__content__trial">
      <h4 className="examination__content__trial--title">模擬試験タイトル</h4>
      <div className="examination__content__trial--content">
        <div className="examination__content__trial__exam">
          <ButtonCommon
            title="実施期間"
            type="button small special light-gray"
          />
          <p className="time">2022/12/1～2022/12/10</p>
        </div>
        <div className="examination__content__trial__exam">
          <ButtonCommon
            title="制限時間"
            type="button small special light-gray"
          />
          <p className="time">
            100<span>分</span>
          </p>
        </div>
      </div>
      <Link to="/AI-test">
        <ButtonCommon title="開始する " type="button huge gradient-blue" />
      </Link>
      <div
        onClick={() => {
          onClose("");
        }}
        className="close"
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default Examination;
