import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCreative } from "swiper/modules";

export default function UttryckDig() {
  return (
    <div className="w-full bg-c-Purple bg-opacity-[0.1] py-[100px] max-w-[110rem] lg:mx-auto mb-20">
      <Swiper
        slidesPerView={1.5}
        loop
        effect="creative"
        spaceBetween={0}
        creativeEffect={{
          prev: {
            opacity: 0.6,
            scale: 0.8,
            translate: ["-98%", 0, 0],
          },
          next: {
            opacity: 0.6,
            scale: 0.8,
            translate: ["98%", 0, 0],
          },
          limitProgress: 2,
        }}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 100 },
        }}
        modules={[EffectCreative]}
        centeredSlides
      >
        <SwiperSlide>
          <div className="h-auto w-full">
            <div className="relative w-full h-[100%] aspect-[40/56]">
              <Image
                src={"/maplecase.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center rounded-[20px]"
              />
              <div className="averiaSerifLibre font-bold w-[80%] absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-c-White text-2xl text-center">
                <h3>
                  Uttryck Dig Själv <br /> Med Färgglada Mobilskal
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto w-full">
            <div className="relative w-full h-[100%] aspect-[40/56]">
              <Image
                src={"/expressyourself2.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center rounded-[20px]"
              />
              <div className="averiaSerifLibre font-bold w-[80%] absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-c-White text-2xl text-center">
                <h3>
                  Kreativa Mobilskal: <br /> Visa Din Stil
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto w-full">
            <div className="relative w-full h-[100%] aspect-[40/56]">
              <Image
                src={"/expressyourself1.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center rounded-[20px]"
              />
              <div className="averiaSerifLibre font-bold w-[80%] absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-c-White text-2xl text-center">
                <h3>Mobilskal För Varje Humör</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="h-auto w-full">
            <div className="relative w-full h-[100%] aspect-[40/56]">
              <Image
                src={"/image-5.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center rounded-[20px]"
              />
              <div className="averiaSerifLibre font-bold w-[80%] absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-c-White text-2xl text-center">
                <h3>
                  Uttryck Dig Själv <br /> Med Färgglada Mobilskal
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto w-full">
            <div className="relative w-full h-[100%] aspect-[40/56]">
              <Image
                src={"/image-2.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center rounded-[20px]"
              />
              <div className="averiaSerifLibre font-bold w-[80%] absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-c-White text-2xl text-center">
                <h3>
                  Kreativa Mobilskal: <br /> Visa Din Stil
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto w-full">
            <div className="relative w-full h-[100%] aspect-[40/56]">
              <Image
                src={"/image-6.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center rounded-[20px]"
              />
              <div className="averiaSerifLibre font-bold w-[80%] absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-c-White text-2xl text-center">
                <h3>Mobilskal För Varje Humör</h3>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
