import GradientPill from "../GradientPill";
import Image from "next/image";
import RickLogo from "@/public/Image-resource/portal.png";
import bubble from "@/public/Image-resource/bubble.png";

function RickBanner() {
  return (
    <div className="relative z-10 text-center px-6 ">
      <div className="relative w-full flex items-center justify-center  px-4">
        <div className="relative flex items-center">
          <Image
            src={bubble}
            alt="Bubble"
            width={200}
            height={200}
            className="absolute -left-12 top-[36%] -translate-y-1/2 opacity-90 pointer-events-none"
          />

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic relative z-10 ml-6">
            THE
          </h1>
        </div>

        <div className="mx-4">
          <Image
            src={RickLogo}
            alt="Rick Icon"
            width={150}
            height={150}
            className="drop-shadow-[0_0_12px_#0f0]"
          />
        </div>

        <h1 className="font-tt text-green-400 text-3xl  md:text-6xl lg:text-7xl font-bold ml-2">
          RICK&
        </h1>
        <GradientPill />
      </div>
    </div>
  );
}

export default RickBanner;
