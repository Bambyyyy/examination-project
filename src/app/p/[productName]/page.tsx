"use client";
import React, { useEffect, useState } from "react";
import { SampleProduct } from "@/app/Utilities/ExtraInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import ProductDescription from "@/app/components/PDP/ProductDescription";
import ProductTagInfo from "@/app/components/PDP/ProductTagInfo";
import Arrowsmalldown from "@/app/Utilities/icons/arrowsmalldown";
import Heart from "@/app/Utilities/icons/heart";
import ProductFixedMenu from "@/app/components/PDP/ProductFixedMenu";
import ProductAlternative from "@/app/components/PDP/ProductAlternative";
import ProductChooseYourVibe from "@/app/components/PDP/ProductChooseYourVibe";
import Link from "next/link";

const productColorsArray: string[] = [
  "#751c38",
  "#ebf0eb",
  "#a899e8",
  "#9c9694",
  "#606060",
  "#0373e5",
  "#ffc5e5",
  "#526178",
  "#ffa310",
  "#306363",
  "#a39987",
  "#f0ede5",
  "#d2d2fc",
  "#ccae89",
  "#000000",
  "#c4e87d",
  "#ecd7d2",
];

export default function Page() {
  const [product, setProduct] = useState<SampleProduct>();
  const [matchedCategory, setMatchedCategory] = useState<string | undefined>(
    undefined
  );
  const [productColors, setProductColors] = useState<
    SampleProduct[] | undefined
  >([]);

  const keywords = ["slim", "ipad", "silicone", "magsafe", "card", "wavy"];

  const { choosenCurrency, toggleFavoriteMarked, products, addToCart } =
    useMenuSlider();
  useEffect(() => {
    const fetchProduct = () => {
      const completeUrl = window.location.href;
      const productPart = completeUrl.split("/");
      const productUrl = productPart[4];
      const clickedProduct = products.filter((p) => p.itemUrl === productUrl);
      let sameProductModelArray = products.filter(
        (p) =>
          p.itemTag === product?.itemTag && p.itemType === product?.itemType
      );

      const indexOfCurrentProduct = sameProductModelArray.findIndex(
        (p) => p.itemUrl === productUrl
      );
      const removedCurrentProduct = sameProductModelArray.splice(
        indexOfCurrentProduct,
        1
      )[0];

      sameProductModelArray = [removedCurrentProduct, ...sameProductModelArray];
      setProductColors(sameProductModelArray);

      if (productUrl) {
        const findCategory = keywords.find((keyword) =>
          productUrl.includes(keyword)
        );
        setMatchedCategory(findCategory);
      }
      if (clickedProduct) setProduct(clickedProduct[0]);
    };

    fetchProduct();
  }, [products]);

  return (
    <>
      {product ? (
        <>
          <div className="w-full h-full lg:grid lg:grid-cols-2 lg:mb-10 xl:my-16 xl:mt-10 xl:grid-cols-[minmax(0,_1.4fr)_minmax(0,_1fr)] max-w-[110rem] mx-auto 2xl:grid-cols-[minmax(0,_1.6fr)_minmax(0,_1fr)]">
            <div className="lg:sticky lg:top-[102px] lg:h-fit lg:rounded-br-3xl overflow-hidden xl:hidden">
              <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination
                loop
                className="w-full"
              >
                <div className="absolute z-10 top-[10px] flex justify-center items-center bg-c-White right-[10px] size-7 rounded-full">
                  <button onClick={() => toggleFavoriteMarked(product.itemId)}>
                    <Heart
                      className="scale-1"
                      stroke="#ff7ab8"
                      liked={product.itemLiked}
                    />
                  </button>
                </div>
                {product?.itemImageAngels.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt="Image"
                      priority={index === 0}
                      height={1396}
                      width={1118}
                      sizes="100vw"
                      className="object-cover lg:object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="hidden ml-8 xl:grid grid-cols-2 grid-rows-2 gap-2.5">
              {product?.itemImageAngels.map((image, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden ${
                    index === 1 ? "relative" : ""
                  }`}
                >
                  <Image src={image} alt="Image" height={1074} width={860} />
                  {index === 1 && (
                    <div className="absolute z-10 top-[10px] flex justify-center items-center bg-c-White right-[10px] size-7 rounded-full">
                      <button
                        onClick={() => toggleFavoriteMarked(product.itemId)}
                      >
                        <Heart
                          className="scale-1"
                          stroke="#ff7ab8"
                          liked={product.itemLiked}
                        />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 lg:p-8 lg:pb-0 xl:py-0 space-y-10 lato">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h3 className="font-semibold">
                    {product?.itemName.replace("-", " ")}
                  </h3>
                  <p className="text-xs">{product?.itemDescription}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p>
                    {product?.itemPrice +
                      " " +
                      (choosenCurrency.currency === undefined
                        ? "SEK"
                        : choosenCurrency.currency)}
                  </p>
                  <p className="underline text-xs">Prishistorik</p>
                </div>
              </div>
              <div>
                <div className="w-full mb-4">
                  <p>
                    <b>Färg: </b>
                    {product?.itemColor}
                  </p>
                </div>
                <div>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={12}
                    className="w-auto"
                  >
                    {productColors?.map((product, index) => (
                      <SwiperSlide key={index}>
                        <a href={`http://localhost:3000/p/${product?.itemUrl}`}>
                          <div
                            style={{ backgroundColor: product?.itemColorHex }}
                            className={`size-11 rounded-full`}
                          ></div>
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="hidden lg:flex">
                <button className="border-[1px] w-2/5 border-black rounded-full px-4 py-2 flex items-center justify-center">
                  <span>Iphone 13</span>
                  <Arrowsmalldown fill="#000" className="ml-2" />
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="rounded-full ml-2.5 w-3/5 bg-black lg:h-[63px] text-c-White py-5 px-9"
                >
                  <span>Lägg i varukorg</span>
                </button>
              </div>
              <div>
                <div className="mb-5 font-semibold">
                  <p>Säker betalning & Snabb leverans!</p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 font-bold">
                  <div className="flex justify-center items-center bg-c-Gray h-10 rounded-lg max-w-56 px-4">
                    <p>Klarna.</p>
                  </div>
                  <div className="flex justify-center items-center bg-c-Gray h-10 rounded-lg max-w-56 px-4">
                    <p>Swish</p>
                  </div>
                  <div className="flex justify-center items-center bg-c-Gray h-10 rounded-lg max-w-56 px-4">
                    <p>VISA</p>
                  </div>
                  <div className="flex justify-center items-center bg-c-Gray h-10 rounded-lg max-w-56 px-4">
                    <p>postnord</p>
                  </div>
                  <div className="flex justify-center items-center bg-c-Gray h-10 rounded-lg max-w-56 px-4">
                    <p>budbee</p>
                  </div>
                  <div className="flex justify-center items-center bg-c-Gray h-10 rounded-lg max-w-56 px-4">
                    <p>instabox</p>
                  </div>
                </div>
              </div>
              <div>
                <ProductDescription
                  productLongDescription={product?.itemLongDescription ?? ""}
                />
              </div>
            </div>
          </div>
          <ProductTagInfo
            mainImage={product?.itemImage}
            matchedCategory={matchedCategory}
          />
          <ProductFixedMenu product={product} addToCart={addToCart} />
          <ProductAlternative />
          <ProductChooseYourVibe />
        </>
      ) : (
        <>
          <div className="animate-pulse w-full h-full lg:grid lg:grid-cols-2 lg:mb-10 xl:my-16 xl:mt-10 xl:grid-cols-[minmax(0,_1.4fr)_minmax(0,_1fr)] max-w-[110rem] mx-auto 2xl:grid-cols-[minmax(0,_1.6fr)_minmax(0,_1fr)]">
            <div className="lg:sticky lg:top-[102px] aspect-[418/522] lg:aspect-[500/550] h-full w-full bg-c-LoadingGray lg:h-fit lg:rounded-br-3xl overflow-hidden xl:hidden"></div>
            <div className="hidden  ml-8 xl:grid grid-cols-2 grid-rows-2 gap-2.5">
              <div className="rounded-2xl aspect-[520/650] bg-c-LoadingGray"></div>
              <div className="rounded-2xl aspect-[520/650] bg-c-LoadingGray"></div>
              <div className="rounded-2xl aspect-[520/650] bg-c-LoadingGray"></div>
              <div className="rounded-2xl aspect-[520/650] bg-c-LoadingGray"></div>
            </div>
            <div className="p-4 lg:p-8 lg:pb-0 xl:py-0 space-y-10 lato">
              <div className="flex justify-between">
                <div className="flex flex-col space-y-2 ">
                  <div className="h-[18px] w-[70px] bg-c-LoadingGray"></div>
                  <div className="h-[10px] w-[220px] bg-c-LoadingGray"></div>
                </div>
                <div className="flex flex-col items-end space-y-2 ">
                  <div className="h-[18px] w-[60px] bg-c-LoadingGray"></div>
                  <div className="h-[10px] w-[60px] bg-c-LoadingGray"></div>
                </div>
              </div>
              <div>
                <div className="w-full mb-5 ">
                  <div className="h-[20px] w-[140px] bg-c-LoadingGray"></div>
                </div>
                <div className="flex space-x-2 ">
                  <div
                    className={`bg-c-LoadingGray size-11 rounded-full`}
                  ></div>
                  <div
                    className={`bg-c-LoadingGray size-11 rounded-full`}
                  ></div>
                  <div
                    className={`bg-c-LoadingGray size-11 rounded-full`}
                  ></div>
                  <div
                    className={`bg-c-LoadingGray size-11 rounded-full`}
                  ></div>
                  <div
                    className={`bg-c-LoadingGray size-11 rounded-full`}
                  ></div>
                  <div
                    className={`bg-c-LoadingGray size-11 rounded-full`}
                  ></div>
                  <div
                    className={`bg-c-LoadingGray size-11 rounded-full`}
                  ></div>
                  <div
                    className={`bg-c-LoadingGray size-11 rounded-full`}
                  ></div>
                </div>
              </div>
              <div className="hidden lg:flex ">
                <button className="border-[1px] w-2/5 border-c-LoadingGray bg-c-LoadingGray text-c-LoadingGray rounded-full px-4 py-2 flex items-center justify-center">
                  <span>Iphone 13</span>
                  <Arrowsmalldown fill="#f5f5f5" className="ml-2" />
                </button>
                <button className="rounded-full ml-2.5 w-3/5 bg-c-LoadingGray text-c-LoadingGray py-5 px-9 ">
                  <span>Lägg i varukorg</span>
                </button>
              </div>
              <div>
                <div className="mb-5 font-semibold ">
                  <div className="h-[16px] w-[240px] bg-c-LoadingGray"></div>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 font-bold ">
                  <div className="flex justify-center items-center bg-c-LoadingGray text-c-LoadingGray h-10 rounded-lg max-w-56 px-4">
                    <p>Klarna.</p>
                  </div>
                  <div className="flex justify-center items-center bg-c-LoadingGray text-c-LoadingGray h-10 rounded-lg max-w-56 px-4">
                    <p>Swish</p>
                  </div>
                  <div className="flex justify-center items-center bg-c-LoadingGray text-c-LoadingGray h-10 rounded-lg max-w-56 px-4">
                    <p>VISA</p>
                  </div>
                  <div className="flex justify-center items-center bg-c-LoadingGray text-c-LoadingGray h-10 rounded-lg max-w-56 px-4">
                    <p>postnord</p>
                  </div>
                  <div className="flex justify-center items-center bg-c-LoadingGray text-c-LoadingGray h-10 rounded-lg max-w-56 px-4">
                    <p>budbee</p>
                  </div>
                  <div className="flex justify-center items-center bg-c-LoadingGray text-c-LoadingGray h-10 rounded-lg max-w-56 px-4">
                    <p>instabox</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-c-LoadingGray h-[160px] xl:h-[420px] rounded-2xl w-full "></div>
              </div>
            </div>
          </div>
          <div className="animate-pulse w-full xl:max-w-[110rem] mx-auto xl:px-8 mb-8 xl:mb-20">
            <div className="cmd:grid cmd:grid-cols-2 xl:rounded-2xl xl:overflow-hidden">
              <div className="relative aspect-[21/30] cmd:aspect-square">
                <div className="cmd:block h-full w-full bg-c-LoadingGray"></div>
              </div>
              <div className="relative aspect-[21/30] cmd:aspect-square">
                <div className="cmd:hidden h-full w-full bg-c-Gray"></div>
                <div className="cmd:block hidden h-full w-full bg-c-LoadingGray"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
