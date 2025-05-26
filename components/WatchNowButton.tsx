import {PlayCircle } from "lucide-react";

const WatchNowButton = () => {
  return (
    <button className="order-2 md:order-1 flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 px-6 py-2 text-white font-semibold shadow-lg hover:brightness-105 transition">
      <PlayCircle size={16} />
      Watch Now
    </button>
  );
};

export default WatchNowButton;
