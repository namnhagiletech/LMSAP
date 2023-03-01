import React from "react";
import { Pen } from "../../assets/icons/Pen";

const CardCommon = ({ content, img, video }: any) => {
  return (
    <div className="card w-[360px] mx-auto my-0">
      <div className="card-header bg-[#FFE2D7] grid grid-cols-3 py-3 rounded-t-xl">
        <div className="flex justify-center self-center">
          POINT
          <span className="ml-2">
            <Pen />
          </span>
        </div>
        <div className="justify-self-center text-lg text-[#A5A072]">
          解&nbsp;&nbsp;&nbsp;説
        </div>
      </div>
      <div className="card-content p-5 rounded-b-xl bg-white">
        {img || video ? (
          <div className="mb-5">
            {img && <img src={img} className="m-auto" alt="#" />}
            {video && { video }}
          </div>
        ) : null}
        <p className="text-sm leading-7">{content}</p>
      </div>
    </div>
  );
};

export default CardCommon;
