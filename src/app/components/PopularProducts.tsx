import { ProductSetOne } from "../Utilities/ExtraInfo";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type Props = {
  blockTitle?: string;
};

export default function PopularProducts({ blockTitle }: Props) {
  return (
    <div className="flex flex-col gap-2 max-w-[110rem] mb-20 mx-auto lg:px-[47px]">
      <div className="flex justify-between items-end px-5 lg:px-0 pt-5">
        <h3 className="averiaSerifLibre text-2xl font-bold">
          {blockTitle ? blockTitle : "Populära produkter"}
        </h3>
        <p className="underline font-semibold">Visa alla</p>
      </div>
      <div className="flex py-5 px-5 gap-2 lg:gap-5 overflow-x-auto lg:pl-0x lg:px-0">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            712: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="popular-products-swiper h-auto flex flex-col relative"
        >
          <div className="lg:!hidden swipe-left-btn">
            <div className="swiper-button-prev nav-btn"></div>
          </div>
          {ProductSetOne.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
          <div className="lg:!hidden swipe-right-btn">
            <div className="swiper-button-next nav-btn"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
