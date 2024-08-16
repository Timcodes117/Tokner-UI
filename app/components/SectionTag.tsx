import React from "react";

interface tagProps {
  label: string;
  outterLabel?: string;
  color: string;
  shadowClass?: string;
}
const SectionTag = ({ label, outterLabel, color, shadowClass }: tagProps) => {
  return (
    <>
      <div
        style={{ background: color }}
        className={`w-[82px] h-[82px] bg-[red] rounded-tr-[50px] rounded-tl-[50px] rounded-br-[50px]  rounded-bl-[10px]
    flex relative
    items-center justify-center
     ${shadowClass} `}
      >
        <b className="text-[26px] text-[#0F1320] font-[centGothB]">{label}</b>
        <div className="flex flex-col absolute bottom-[-5px] right-[-50px] ">
          <div
            className="w-[12px] h-[12px] rounded-[100px]  mb-[5px]"
            style={{ background: color }}
          />
          <p className="text-[18px] text-[white] font-[centGothB]">
            {outterLabel}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionTag;
