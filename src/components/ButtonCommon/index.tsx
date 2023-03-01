import { Button } from "antd";
import React from "react";
import "./style.scss";

const ButtonCommon = ({ title, type }: any) => {
  return (
    <Button block htmlType="submit" className={`${type}`}>
      {title ? title : "Button"}
    </Button>
  );
};

export default ButtonCommon;
