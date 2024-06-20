import React from "react";

export default function ThreeColumnTextBlock() {
  return (
    <div className="flex flex-col justify-center items-center text-sm lato mb-20 px-4 max-w-[70rem] mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl averiaSerifLibre font-bold">
          Såhär funkar det
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 items-center w-full">
        <div className="text-center lg:w-1/3 lg:max-w-[304px]">
          <p className="mb-4">
            <b>✓ Skapa ett konto </b>
            <br />
            <br />
            Skapa ett konto och få 10 % rabatt på ditt första köp.
          </p>
        </div>
        <div className="text-center lg:w-1/3 lg:max-w-[304px]">
          <p className="mb-4">
            <b>✓ Samla poäng </b>
            <br />
            <br />
            Samla poäng när du shoppar på LOGO.com eller engagerar dig.
          </p>
        </div>
        <div className="text-center lg:w-1/3 lg:max-w-[304px]">
          <p className="mb-4">
            <b>✓ Nyttja poäng </b>
            <br />
            <br />
            Omvandla dina poäng till bonuscheckar och använd dem direkt i
            kassan.
          </p>
        </div>
      </div>
    </div>
  );
}
