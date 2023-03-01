import React from "react";
import "./style.scss";

const TitleCommon = ({ height, title, subtitle, type, icon }: any) => {
  return (
    <div className="title" style={{ height: height }}>
      <div className="text-center">
        <p className="title__main">{title}</p>
        <p className={`title__sub ${type} `}>{subtitle}</p>
      </div>
      {icon}
    </div>
  );
};

export default TitleCommon;
