import Image from "next/image";
import Link from "next/link";

interface CharacterCardProps {
  name: string;
  image: string;
  id:string
}

export default function CharacterCard({ name, image,id }: CharacterCardProps) {
  return (
    <Link href={`/character/${id}`}>
    <div
      className="w-[220px] rounded-md p-[2px]"
      style={{
        background:
          "linear-gradient(to right, rgb(50, 50, 150), rgb(203, 140, 235))",
        clipPath: "polygon(0 0, 100% 0, 100% 77%, 85% 100%, 0 100%)",
      }}
    >
      <div
        className="rounded-md text-white transition-transform duration-200 hover:scale-[1.03]"
        style={{
          background: "linear-gradient(to bottom right, #0f0f1a, #1a1f40)",
          clipPath: "polygon(0 0, 100% 0, 100% 77%, 85% 100%, 0 100%)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Image
          src={image}
          alt={name}
          width={220}
          height={220}
          className="w-full h-auto p-5"
        />
        <div className="text-center text-[12px] pb-5">{name}</div>
      </div>
    </div>
        </Link>

  );
}
