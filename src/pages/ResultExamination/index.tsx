import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import ProgressCircle from "../../components/ProgressCircleComon";
import ButtonCommon from "../../components/ButtonCommon";
import CircleRing from "../../assets/icons/CircleRing";
import Multiple from "../../assets/icons/Multiple";

const ResultExamination = () => {
  return (
    <div className="result">
      <h4 className="text-center text-[#A5A072] text-[32px] font-semibold">
        Great
      </h4>
      <div className="result__progress text-center">
        <ProgressCircle wrongAns={100} rightAns={110} />
        <ButtonCommon title="合格" type="button medium white special-red" />
      </div>
      <div className="result__list-answer mt-4">
        <p className="flex justify-center items-center text-[#A5A072]">
          <span className="text-[#FF5277] text-[32px] font-bold mr-2">9</span>
          問正解/10問中
        </p>
        <ul className="columns-2 w-[200px] m-auto mb-4">
          <li className="flex items-center justify-start gap-4 ">
            <Link to="/explain" className="text-[#A5A072] text-[24px]">
              Q1
            </Link>{" "}
            <CircleRing />
          </li>
          <li className="flex items-center justify-start gap-4 text-[#A5A072] text-[24px]">
            <Link to="/explain" className="text-[#A5A072] text-[24px]">
              Q2
            </Link>{" "}
            <CircleRing />
          </li>
          <li className="flex items-center justify-start gap-4 ">
            <Link to="/explain" className="text-[#A5A072] text-[24px]">
              Q3
            </Link>{" "}
            <CircleRing />
          </li>
          <li className="flex items-center justify-start gap-4 text-[#A5A072] text-[24px]">
            <Link to="/explain" className="text-[#A5A072] text-[24px]">
              Q4
            </Link>{" "}
            <Multiple />
          </li>
          <li className="flex items-center justify-start gap-4 ">
            <Link to="/explain" className="text-[#A5A072] text-[24px]">
              Q5
            </Link>{" "}
            <CircleRing />
          </li>
          <li className="flex items-center justify-start gap-4 text-[#A5A072] text-[24px]">
            <Link to="/explain" className="text-[#A5A072] text-[24px]">
              Q6
            </Link>{" "}
            <Multiple />
          </li>
          <li className="flex items-center justify-start gap-4 ">
            <Link to="/explain" className="text-[#A5A072] text-[24px]">
              Q7
            </Link>{" "}
            <CircleRing />
          </li>
          <li className="flex items-center justify-start gap-4 text-[#A5A072] text-[24px]">
            <Link to="/explain" className="text-[#A5A072] text-[24px]">
              Q8
            </Link>{" "}
            <Multiple />
          </li>
        </ul>
        <div className="hidden md:block">
          <ButtonCommon
            title="問題・解説を確認したい方は問題番号をクリックしてください"
            type="button white special-semi-brown"
          />
        </div>
        <div className="text-[#A5A072] text-[10px] bg-[#fff] w-full h-10 leading-10 text-center sm:hidden">
          問題・解説を確認したい方は問題番号をクリックしてください
        </div>
      </div>
      <div className="mt-9">
        <table className="table-auto m-auto text-[10px] w-[260px]">
          <thead>
            <tr>
              <th className="text-[#A5A072] text-left py-2">教科名</th>
              <th className="text-[#A5A072] text-right py-2">得点 / 配点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">関係法規・制度及び運営管理</td>
              <td className="py-2 text-right">10 / 20点</td>
            </tr>
            <tr className="text-[#E50012]">
              <td className="py-2">関係法規・制度及び運営管理</td>
              <td className="py-2 text-right">10 / 20点</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultExamination;
