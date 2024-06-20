import React from "react";
import Image from "next/image";

export default function LoginBlock() {
  return (
    <div className="lg:flex bg-c-Purple text-c-White">
      <div className="lg:w-1/2">
        <div className="relative h-full aspect-[43/34] lg:aspect-[96/67] lg:w-full">
          <div className="h-[100%] w-full lg:hidden">
            <Image
              src={"/loginimage.jpg"}
              alt="Image"
              fill
              sizes="100vw"
              className="object-cover object-center rounded-br-[20vw] "
            />
          </div>
          <div className="hidden relative h-full lg:block">
            <Image
              src={"/loginimage.jpg"}
              alt="Image"
              fill
              sizes="(min-width: 1024) 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-10 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:px-10 xl:px-20">
        <div className="flex flex-col gap-5 max-w-[390px] mx-auto lg:mx-0">
          <h3 className="text-2xl font-bold averiaSerifLibre mb-10">
            Logga in på ditt konto
          </h3>

          <form action="" className="flex flex-col gap-5">
            <div className="w-full">
              <label
                className="block text-xs lato ml-2.5 mb-0.5"
                htmlFor="email"
              >
                E-post *
              </label>
              <input
                className="w-full px-5 py-2.5 rounded-lg placeholder:text-c-White placeholder:opacity-65 bg-c-DarkPurple"
                type="email"
                id="email"
                placeholder="E-post"
              />
            </div>
            <div className="w-full">
              <label
                className="block text-xs lato ml-2.5 mb-0.5"
                htmlFor="password"
              >
                Lösenord *
              </label>
              <input
                className="w-full px-5 py-2.5 rounded-lg placeholder:text-c-White placeholder:opacity-65 bg-c-DarkPurple"
                type="password"
                id="password"
                placeholder="Lösenord"
              />
            </div>
            <button className="w-full px-5 py-2.5 bg-black rounded-full lato mt-10">
              Logga in
            </button>
          </form>

          <a className="w-full text-center px-5 py-2.5 bg-transparent border-2 border-c-White lato rounded-full">
            Skapa nytt konto
          </a>
          <a className="text-center text-xs">Glömt ditt lösenord?</a>
        </div>
      </div>
    </div>
  );
}
