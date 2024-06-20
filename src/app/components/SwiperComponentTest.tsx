import React, { ReactElement } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {
  children?: ReactElement<any, any>[];
  slidesPerView?: number | "auto";
  pagination?: boolean;
  navigation?: boolean;
  scrollbar?: boolean;
  loop?: boolean;
  spaceBetween?: number;
  noSwiping?: boolean;
  onSwiper?: any;
};

const SwiperComponentTest: React.FC<Props> = ({
  children,
  slidesPerView,
  pagination,
  navigation,
  scrollbar,
  loop,
  spaceBetween,
  noSwiping,
  onSwiper,
}) => {
  return children ? (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigation}
        loop={loop}
        pagination={pagination}
        scrollbar={scrollbar}
        onSwiper={onSwiper}
        noSwiping={noSwiping}
      >
        {children?.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) : null;
};
export default SwiperComponentTest;
