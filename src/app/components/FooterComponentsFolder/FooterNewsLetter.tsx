import Heart from "@/app/Utilities/icons/heart";
import React from "react";

export default function FooterNewsLetter() {
  return (
    <div className="lg:flex flex-col lg:max-w-[400px] mb-40">
      <div className="flex justify-between mb-2.5">
        <div>
          <p className="text-sm">Joina familjen</p>
          <h3 className="text-lg font-semibold">LOGO Family kundklubb</h3>
        </div>
        <div>
          <Heart stroke="#FFFFFF" className="origin-left" />
        </div>
      </div>
      <p className="text-sm mb-2">
        Följ oss för inspiration, erbjudanden och var först med att ta del av
        kommande produktsläpp.
      </p>
      <form
        action=""
        className="flex justify-between mb-2.5 py-2 pl-5 pr-2 rounded-[10px] bg-[#5D209F]"
      >
        <input
          placeholder="E-postadress"
          type="text"
          className="bg-[#5D209F] w-[80%] focus:outline-none"
        />
        <button className="underline w-[20%] text-c-White">Skicka</button>
      </form>
      <p className="text-[10px] mb-[30px] text-center">
        Du kan när som helst avsluta prenumerationen. Läs vår integritetspolicy
        här
      </p>
    </div>
  );
}
