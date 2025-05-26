import logo from "@/public/Image-resource/Logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src={logo}
        alt="logo"
        width={200}
        height={100}
        className="object-contain"
      />
    </div>
  );
}
