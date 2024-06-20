import Login from "@/app/Utilities/icons/login";
import Tiktok from "@/app/Utilities/icons/tiktok";
import Instagram from "@/app/Utilities/icons/instagram";
import React from "react";

export default function SideButtonInfluence() {
  return (
    <div className="px-5 mb-5">
      <div className="flex justify-between items-center pb-5 border-b-[1px] border-black">
        <a className="flex items-center space-x-2 rounded-full text-white bg-c-Purple w-[148] py-[10px] px-3">
          <Login fill={"#FFFFFF"} />
          <span className="text-xs">Mina Sidor</span>
        </a>
        <div className="flex gap-5">
          <div>
            <Instagram />
          </div>
          <div>
            <Tiktok />
          </div>
        </div>
      </div>
    </div>
  );
}
