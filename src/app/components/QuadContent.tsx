import React from "react";
import Image from "next/image";
import { QuadImages } from "../Utilities/ExtraInfo";
import SingleQuadComponent from "./SingleQuadComponent";

export default function QuadContent() {
  return (
    <div className="w-full max-w-[120rem] mx-auto mb-20 h-auto grid grid-cols-2 gap-[10px] lg:flex lg:gap-0 lg:h-auto">
      {QuadImages.map((card, index) => (
        <SingleQuadComponent key={index} image={card.image} index={index} />
      ))}
    </div>
  );
}
