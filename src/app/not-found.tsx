import React from "react";
import Image from "next/image";
import InstagramGadget from "./components/Login/InstagramGadget";

export default function NotFound() {
  return (
    <main className="mt-28 text-center">
      <section className="space-y-10 px-4 my-10">
        <h2 className="text-3xl averiaSerifLibre font-bold">
          Sidan hittades inte
        </h2>
        <p>
          Hoppsan! Det verkar som att du tagit fel sväng någonstans. Oroa dig
          inte, vi kommer inte att berätta för någon att du har gått vilse.
          Försök använda menyn eller trycka på bakåtknappen för att hitta rätt.
        </p>
        <div className="flex justify-center">
          <a href="/" className="bg-black text-c-White py-4 px-8 rounded-full">
            Gå tillbaka hem
          </a>
        </div>
      </section>
      <div className="w-full relative flex items-end h-full aspect-[43/61] overflow-hidden">
        <div className="relativex">
          <Image
            src={"/heroimage3.jpg"}
            alt="Image"
            fill
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>
      </div>
      <InstagramGadget />
    </main>
  );
}
