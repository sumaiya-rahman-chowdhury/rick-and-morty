"use client"

import { useRouter } from "next/navigation";

function ViewAllButton() {
  const router = useRouter()
  return (
    <div>
      <button onClick={()=>router.push("/the-casts")} className="px-4 py-2 border border-lime-400 text-white rounded-md hover:bg-lime-400 hover:text-black transition duration-300">
        View All
      </button>
    </div>
  );
}

export default ViewAllButton;
