"use client";
import { NextPage } from "next";
import { Pixelify_Sans } from "next/font/google";
import TimerCard from "./components/TimerCard";
import { useState } from "react";
import {
  ChevronRight,
  Settings,
} from "lucide-react";
import SolidBgCard from "./components/SolidBgCard";
import BgCard from "./components/BgCard";

interface Props {}

const pixelify = Pixelify_Sans({ subsets: ["latin"] });

const Page: NextPage<Props> = ({}) => {
  const [expandSolid, setExpandSolid] = useState<Boolean>(false);
  const [expandNature, setNatureSolid] = useState<Boolean>(false);
  const images = [
    "https://w0.peakpx.com/wallpaper/273/76/HD-wallpaper-peaceful-easy-feeling-peaceful-nature-tranquil-nature-relaxing-nature.jpg",
    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg",
    "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhY2VmdWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJaoPejpi1jWwkY5KK2J5fTuRYjsnDz1vgQA&s",
    "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?cs=srgb&dl=pexels-stywo-1261728.jpg&fm=jpg",
    "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?cs=srgb&dl=pexels-nicole-avagliano-1132392-2749481.jpg&fm=jpg",
  ];
  return (
    <div
      className={`w-[90vw] md:w-[70vw] border-x border-white/10 min-h-screen mx-auto py-[5vh] px-[2vw] flex flex-col gap-5`}
    >
      <div>
        <h1 className={`${pixelify.className} text-xl`}>
          Let's start by setting up an enviornment
        </h1>
        <p className="opacity-70 text-sm">You can always change it after...</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold">1. Choose a timer:</h1>
          <div className="flex justify-center items-center gap-1">
            <button className="px-4 hover:bg-transparent hover:text-white transition-all duration-300 py-1 border border-white bg-white text-black font-bold rounded-full cursor-pointer flex justify-center items-center gap-2 text-sm">
              <Settings size={20} />
              Try Custom
            </button>
          </div>
        </div>
        <div className="flex w-fit mx-auto">
          <TimerCard
            timerName="Pomodoro Classic"
            focusTime={25}
            focusUnit="min"
            breakTime={5}
            breakUnit="min"
          />
          <TimerCard
            timerName="Extended Pomodoro"
            focusTime={50}
            focusUnit="min"
            breakTime={10}
            breakUnit="min"
          />
          <TimerCard
            timerName="Deep Work"
            focusTime={90}
            focusUnit="min"
            breakTime={20}
            breakUnit="min"
          />
          <TimerCard
            timerName="Pomodoro Classic"
            focusTime={"inf"}
            focusUnit="min"
            breakTime={5}
            breakUnit="min"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold">2. Choose a background:</h1>
        </div>
        <div className="flex relative flex-col gap-2 font-medium w-fit mx-auto">
          <h1
            className="flex gap-2 items-center select-none"
            onClick={() => setExpandSolid((e) => !e)}
          >
            <ChevronRight
              size={20}
              className={`transition-all duration-300 ${
                expandSolid && "rotate-90"
              }`}
            />
            Solid Colors
          </h1>
          <div
            className={`grid grid-cols-4 transition-all duration-300 gap-y-4 ${
              expandSolid ? "h-fit" : "overflow-y-scroll max-h-60 py-3 pb-5"
            }`}
          >
            <SolidBgCard color="#0E0F12" colorName="Charcoal Black" />
            <SolidBgCard color="#0B1C2D" colorName="Deep Navy" />
            <SolidBgCard color="#101826" colorName="Ink Blue" />
            <SolidBgCard color="#1A1C1F" colorName="Graphite" />

            <SolidBgCard color="#2A2A2A" colorName="Warm Gray" />
            <SolidBgCard color="#E8E1D9" colorName="Sand" />
            <SolidBgCard color="#F3F4F6" colorName="Cloud" />
            <SolidBgCard color="#FAFAFA" colorName="Pearl White" />

            <SolidBgCard color="#0F2F24" colorName="Forest Green" />
            <SolidBgCard color="#1F3D2B" colorName="Moss" />
            <SolidBgCard color="#A3B18A" colorName="Sage" />
            <SolidBgCard color="#0D3B3E" colorName="Ocean Teal" />

            <SolidBgCard color="#0A2540" colorName="Solid Blue " />
            <SolidBgCard color="#22162B" colorName="Midnight Purple" />
            <SolidBgCard color="#2C3A4A" colorName="Slate Blue" />
            <SolidBgCard color="#1C2541" colorName="Muted Indigo" />

            {!expandSolid && (
              <div className="absolute bottom-0 w-full h-[10%] bg-linear-to-b from-transparent to-black"></div>
            )}
          </div>
        </div>
        <div className="flex relative flex-col gap-2 font-medium w-fit mx-auto">
          <h1
            className="flex gap-2 items-center select-none"
            onClick={() => setNatureSolid((e) => !e)}
          >
            <ChevronRight
              size={20}
              className={`transition-all duration-300 ${
                expandNature && "rotate-90"
              }`}
            />
            Nature Backgrounds
          </h1>
          <div
            className={`grid grid-cols-4 transition-all duration-300 gap-y-4 ${
              expandNature ? "h-fit" : "overflow-y-scroll max-h-60 py-3 pb-5"
            }`}
          >
            {images.map((d, i) => (
              <BgCard key={i} bgLink={d} />
            ))}
            {!expandNature && (
              <div className="absolute bottom-0 w-full h-[10%] bg-linear-to-b from-transparent to-black"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
