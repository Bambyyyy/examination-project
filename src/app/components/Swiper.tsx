import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";
import Arrowrightthin from "../Utilities/icons/arrowrightthin";
import Arrowdownthin from "../Utilities/icons/arrowdownthin";
import Button from "./ButtonComponentFolder/Button";

export default function SwiperComponent() {
  return (
    <Swiper
      className="max-w-[120rem] mb-10"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center w-full h-[70vh] lg:h-[860px] cxl:h-[870px]">
          <Image
            src={"/heroimage3.jpg"}
            alt="Test"
            fill
            sizes="100vw"
            className="object-cover object-center lg:hidden"
          />
          <Image
            src={"/heroimage.jpg"}
            alt="Test"
            fill
            sizes="100vw"
            className="object-cover object-center hidden lg:block"
          />
          <div className="lg:hidden z-10 text-c-White p-4 flex flex-col items-center text-center">
            <h1 className={"averiaSerifLibre text-5xl"}>Summer is calling</h1>
            <p className={"lato"}>Kolla in de senaste skalen för sommaren</p>
            <div className="size-10">
              <Arrowrightthin />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center w-full relative h-[70vh] lg:h-[860px] cxl:h-[870px]">
          <Image
            src={"/heroimage2.jpg"}
            alt="Test"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-c-White z-10 lg:p-4 w-full">
            <h1 className={"averiaSerifLibre mb-5 text-5xl"}>
              Summer is calling
            </h1>
            <p className={"lato mb-5"}>
              Kolla in de senaste skalen för sommaren
            </p>
            <Button size="xl" variant="purple" className="mb-5">
              Köp nu
            </Button>
            <div className="size-10 flex justify-center">
              <Arrowdownthin />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex flex-col justify-center items-center relativex h-[70vh] lg:h-[860px] cxl:h-[870px]">
          <Image
            src={"/heroimage4.jpg"}
            alt="Test"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="flex justify-center w-full z-10 lg:hidden">
            <Button size="xl" variant="red">
              Köp nu
            </Button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
