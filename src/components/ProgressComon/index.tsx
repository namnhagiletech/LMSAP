import React from "react";
import { Progress } from "antd";

const ProgressComon = () => {
  return (
    <Progress
      percent={75}
      strokeColor="#B4B4B5"
      trailColor="#111"
      showInfo={false}
      success={{ percent: 57.5, strokeColor: "#FF5277" }}
    />
  );
};

export default ProgressComon;
