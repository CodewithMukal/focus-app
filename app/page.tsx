import Aurora from "@/components/ui/Aurora";
import { Button } from "@/components/ui/button";
import LightPillar from "@/components/ui/LightPillar";
import Particles from "@/components/ui/Particles";
import Prism from "@/components/ui/Prism";
import LightRays from "@/components/ui/Rays";
import { Pixelify_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const pixelify = Pixelify_Sans({subsets: ["latin"]})

export default function Home() {
  const buttonTextList = [
    "Take me through..",
    "Start Focusing",
    "Let's Begin",
  ]
  const bgList = [<Aurora speed={0.3}/>, <LightRays/>, <Particles particleColors={["#11111"]}/>, <Prism/>, <LightPillar pillarRotation={45}/>]
  const randomBgIndex = Math.floor(Math.random()* bgList.length)
  const randomIndex = Math.floor(Math.random()*buttonTextList.length);
  const randomText = buttonTextList[randomIndex];
  return (
    <>
      <div className="w-full min-h-screen justify-center items-center flex flex-col text-white">
        <div className="fixed top-0 left-0 -z-10 opacity-50">
          {bgList[randomBgIndex]}
        </div>
        <h1 className={`${pixelify.className} text-4xl`}>FOCUS.</h1>
        <p className="text-sm max-w-[90vw] text-center">Timers, ambient music, non-distractive backgrounds - so YOU can lock tf in...</p>
        <Link href={"/config"}>
          <Button className={`my-5 duration-600 hover:ring-1 ring-white/20 ${pixelify.className} cursor-pointer`} >{randomText}</Button>
        </Link>
      </div>  
    </>
  );
}
