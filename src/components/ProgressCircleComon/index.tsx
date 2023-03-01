import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ wrongAns, rightAns }: any) => {
  return (
    <div className="m-auto mt-2 mb-5" style={{ width: 200, height: 200 }}>
      <CircularProgressbarWithChildren
        value={80}
        background={true}
        styles={{
          path: {
            stroke: `#E0DDC7`,
            strokeLinecap: "butt",
          },
          trail: {
            stroke: "#EEEEEF",
            strokeLinecap: "butt",
          },
          background: {
            fill: "#A5A072",
          },
        }}
      >
        <p className="text-center mt-8">
          <span className="text-[80px] text-[#fff] leading-[0px] font-semibold">
            {wrongAns}
          </span>
          <br />
          <span className="text-[24px] text-[#fff] ">/{rightAns}</span>
        </p>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default ProgressCircle;
