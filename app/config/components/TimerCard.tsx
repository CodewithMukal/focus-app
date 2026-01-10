"use client";
import { Infinity } from "lucide-react";
import { NextPage } from "next";
import React, { useState } from "react";

interface Props {
  timerName: string;
  focusTime: number | string;
  focusUnit: string;
  breakTime: number;
  breakUnit: string;
  //   isSelected: boolean;
  //   setSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const TimerCard: NextPage<Props> = ({
  timerName,
  focusTime,
  focusUnit,
  breakTime,
  breakUnit,
}: Props) => {
  const [isSelected, setSelected] = useState(false);
  return focusTime !== "inf" ? (
    <div className="flex flex-col items-center w-fit gap-1">
      <div
        onClick={() => setSelected((e) => !e)}
        className={`w-75 px-2 py-4 max-w-[90%] border rounded-sm border-white/20 cursor-pointer select-none flex justify-center items-center transition-all duration-300 h-30 ${
          isSelected
            ? "bg-white text-black hover:opacity-70"
            : "bg-white/5 hover:bg-white/10"
        }`}
      >
        <div className="flex gap-2 font-bold justify-center items-center cursor-pointer">
          <div className="flex justify-center items-center flex-col">
            <div className="flex gap-1 items-center">
              <p className="text-4xl">{focusTime}</p>
              <p className="font-normal lowercase">{focusUnit}</p>
            </div>
            <p className="font-normal text-[12px]">Focus</p>
          </div>
          <div
            className={`h-20 w-px ${isSelected ? "bg-black" : "bg-white/40"}`}
          ></div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex gap-1 items-center">
              <p className="text-4xl">{breakTime}</p>
              <p className="font-normal lowercase">{breakUnit}</p>
            </div>
            <p className="font-normal text-[12px]">Relax</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="font-medium text-sm">{timerName}</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center min-h-full w-fit gap-1">
      <div
        onClick={() => setSelected((e) => !e)}
        className={`w-75 h-30 px-2 py-4 max-w-[90%] border rounded-sm border-white/20 cursor-pointer select-none flex justify-center items-center transition-all duration-300 ${
          isSelected
            ? "bg-white text-black hover:opacity-70"
            : "bg-white/5 hover:bg-white/10"
        }`}
      >
        <Infinity size={80}/>
      </div>
      <p className="font-medium text-sm">Flow</p>
    </div>
  );
};

export default TimerCard;
