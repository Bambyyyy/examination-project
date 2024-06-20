"use client";
import LatestLaptopSleeve from "./components/LatestLaptopSleeve";
import PopularProducts from "./components/PopularProducts";
import SwiperComponent from "./components/Swiper";
import TripleImages from "./components/TripleImages";
import OurMustHaves from "./components/OurMustHaves";
import QuadContent from "./components/QuadContent";
import TheLOGOWay from "./components/TheLOGOWay";
import SmallerMustHaves from "./components/SmallerMustHaves";
import LetterSticker from "./components/LetterSticker";
import UttryckDig from "./components/UttryckDig";
import DoubleImage from "./components/DoubleImage";
import TextBlock from "./components/TextBlock";

export default function Home() {
  return (
    <div>
      <SwiperComponent />
      <PopularProducts blockTitle={"Populära produkter"} />
      <LatestLaptopSleeve />
      <OurMustHaves />
      <TripleImages />
      <QuadContent />
      <TheLOGOWay />
      <SmallerMustHaves />
      <LetterSticker bottomLeft={true} />
      <PopularProducts blockTitle={"On our mind"} />
      <UttryckDig />
      <DoubleImage />
      <TextBlock />
    </div>
  );
}
