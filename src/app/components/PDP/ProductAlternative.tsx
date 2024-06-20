"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestProducts, SampleProduct } from "@/app/Utilities/ExtraInfo";
import Image from "next/image";
import Heart from "@/app/Utilities/icons/heart";
import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import Cart from "@/app/Utilities/icons/cart";
import Plus from "@/app/Utilities/icons/plus";

export default function ProductAlternative() {
  const [randomProducts, setRandomProducts] = useState<SampleProduct[]>([]);
  const { toggleFavoriteMarked, addToCart } = useMenuSlider();

  useEffect(() => {
    const getRandomProducts = () => {
      const shuffledProducts = [...TestProducts];
      const completeUrl = window.location.href;
      const splittedUrl = completeUrl.split("/");
      const productUrl = splittedUrl[4];

      const arrayWithoutCurrentOne = shuffledProducts.filter(
        (product) => product.itemUrl !== productUrl
      );

      arrayWithoutCurrentOne.sort(() => Math.random() - 0.5);

      setRandomProducts(arrayWithoutCurrentOne.slice(0, 5));
    };

    getRandomProducts();
  }, []);

  return (
    <div className="px-4 cmd:px-6 cmd:pr-0 xl:pr-6 max-w-[110rem] xl:mx-auto">
      <div className="flex items-center justify-start mb-5">
        <h3 className="text-2xl averiaSerifLibre font-bold">Alternativ</h3>
      </div>
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1.3}
          breakpoints={{
            768: { slidesPerView: 2.27 },
            1024: { slidesPerView: 3.35 },
            1290: { slidesPerView: 5 },
          }}
        >
          {randomProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-2.5">
                <div className="relative rounded-3xl overflow-hidden">
                  <a
                    href={`https://examination-project-delta.vercel.app/p/${product.itemUrl}`}
                  >
                    <Image
                      src={product.itemImage}
                      alt="Image"
                      height={800}
                      width={640}
                      sizes="100vw"
                      className="object-cover"
                    />
                  </a>
                  <div className="absolute flex justify-center items-center p-2 bg-c-White rounded-full size-7 top-2.5 right-2.5">
                    <button
                      onClick={() => toggleFavoriteMarked(product.itemId)}
                    >
                      <Heart
                        stroke={"#ff7ab8"}
                        liked={product.itemLiked}
                        className="scale-1"
                      />
                    </button>
                  </div>
                </div>
                <div className="lato space-y-2.5">
                  <a
                    href={`https://examination-project-delta.vercel.app/p/${product.itemUrl}`}
                    className="font-bold text-sm"
                  >
                    {product.itemName}
                  </a>
                  <div className="text-xs opacity-60">
                    <p>{product.itemColor}</p>
                    <p>{product.itemDescription}</p>
                  </div>
                  <p className="font-bold text-sm">
                    {product.itemPrice}.00 SEK
                  </p>
                  <div className="flex items-end justify-between">
                    <div className="flex items-center gap-1">
                      <div className="size-2 rounded-full bg-c-Purple"></div>
                      <div className="size-2 rounded-full bg-c-Pink"></div>
                      <div className="size-2 rounded-full bg-c-Blue"></div>
                      <p className="text-[10px]">+9</p>
                    </div>
                    <div className="pr-[10px]">
                      <button
                        onClick={() => addToCart(product)}
                        className="flex justify-center gap-1 items-center border-[1px] border-black rounded-[13px] w-14 h-6"
                      >
                        <Cart /> <Plus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
