import React from "react";
import Button from "./ButtonComponentFolder/Button";

export default function TheLOGOWay() {
  return (
    <div className="w-full lg:flex lg:justify-center max-w-[120rem] mx-auto mb-20">
      <div className="flex flex-col lg:items-center lg:text-center lg:w-[390px] lato gap-5 text-left px-5 lg:px-0">
        <h4 className="text-2xl averiaSerifLibre font-extrabold">
          The LOGO way
        </h4>
        <p>
          LOGO består av ett gäng grymma personer som varje dag jobbar för att
          erbjuda just dig det allra bästa! Vi skapar och säljer mobilskal och
          massvis med andra accessoarer som gör livet med en telefon lite
          roligare och säkrare.
        </p>
        <Button variant="black" className="!bg-c-Pink">
          Läs mer
        </Button>
      </div>
    </div>
  );
}
