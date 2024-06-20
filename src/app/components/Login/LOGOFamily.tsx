import Arrowdownthin from "@/app/Utilities/icons/arrowdownthin";
import React from "react";

export default function LOGOFamily() {
  return (
    <div className="p-6 bg-c-DarkPurple text-c-White h-[510px] lg:h-[680px] text-center flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="averiaSerifLibre font-bold text-3xl mb-3">
          LOGO Family
        </h3>
        <p className="max-w-[280px] mb-3">
          Som medlem i LOGO Family samlar du poäng på dina köp och får tillgång
          till exklusiva erbjudanden och förmåner. Läs mer om våra olika nivåer
          och förmåner nedanför.
        </p>
        <button>
          <Arrowdownthin />
        </button>
      </div>
    </div>
  );
}
