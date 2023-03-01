import React from "react";
import "../index.scss";
import ButtonCommon from "../../../components/ButtonCommon";
import CloseIcon from "../../../assets/icons/Close";
import { Link } from "react-router-dom";

const Trial = ({ onClose }: any) => {
  return (
    <div className="examination__content__trial">
      <h4 className="examination__content__trial--title">セルフ模試</h4>
      <div className="examination__content__trial--content">
        <div className="examination__content__trial__level">
          <p>
            Level <span className="lvl-1">1</span>
          </p>
          <Link to="/ai-test">
            <ButtonCommon type="button large bluesky" title="〇×問題" />
          </Link>
        </div>
        <div className="examination__content__trial__level">
          <p>
            Level <span className="lvl-2">2</span>
          </p>
          <ButtonCommon type="button large semi-purple" title="4択問題" />
        </div>
        <div className="examination__content__trial__level">
          <p>
            Level <span className="lvl-3">3</span>
          </p>
          <ButtonCommon type="button large purple" title="過去問" />
        </div>
      </div>
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

export default Trial;
