import { SampleProduct } from "@/app/Utilities/ExtraInfo";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CartItem, useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import Plus from "@/app/Utilities/icons/plus";
import Minus from "@/app/Utilities/icons/minus";
import Arrowsmalldown from "@/app/Utilities/icons/arrowsmalldown";

type Props = {
  shoppingCartItems: CartItem[];
};

export default function ShoppingCartItems({ shoppingCartItems }: Props) {
  const [showAll, setShowAll] = useState(false);
  const { decrementItemFromCart, incrementItemFromCart } = useMenuSlider();

  useEffect(() => {
    if (shoppingCartItems.length <= 3) {
      setShowAll(false);
    }
  }, [shoppingCartItems.length]);

  return (
    <div
      className={`${
        showAll
          ? "overflow-y-autox min-h-[calc(100%-72px)]x h-[calc(100%-72px)]x"
          : ""
      } -mx-5 mb-5`}
    >
      <ul>
        {shoppingCartItems.map((item, index) => (
          <li
            key={index}
            className={`${index % 2 ? "" : "bg-[#e8f2fa80]"} ${
              showAll === false && index > 2 ? "hidden" : "block"
            } p-5 border-b-[1px] border-c-DarkGray border-opacity-15 flex justify-between space-x-5`}
          >
            <div className="flex space-x-4">
              <div className="relative">
                <Image
                  src={item?.itemImage}
                  alt="Image"
                  sizes="100vw"
                  height={75}
                  width={60}
                  className="object-cover rounded-lg overflow-hidden"
                />
              </div>
              <div className="text-[0.75rem]">
                <h3 className="font-bold mb-2.5">{item?.itemName}</h3>
                <p className="mb-5 max-w-[252px]">{item?.itemDescription}</p>
                <div className="flex justify-start items-center font-bold space-x-3">
                  <button
                    onClick={() => decrementItemFromCart(item?.itemId)}
                    className="flex justify-center items-center size-7 border-black border-[1.3px] rounded-full"
                  >
                    <Minus />
                  </button>
                  <p>{item?.itemQuantity}</p>
                  <button
                    onClick={() => incrementItemFromCart(item?.itemId)}
                    className="flex justify-center items-center size-7 border-black border-[1.3px] rounded-full"
                  >
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[0.75rem] font-bold">
                {item?.itemPrice}.00 SEK
              </p>
            </div>
          </li>
        ))}
      </ul>
      {shoppingCartItems.length > 3 ? (
        <>
          {showAll ? (
            <div className="text-center mb-2 text-xs py-1 border-b-[1px] border-c-DarkGray border-opacity-15">
              <button onClick={() => setShowAll(!showAll)}>
                <span>Visa mindre</span>
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                className="flex flex-col items-center justify-center gap-2 py-2 w-full text-xs"
                onClick={() => setShowAll(!showAll)}
              >
                <span>Visa mer</span>
                <Arrowsmalldown fill="#000" />
              </button>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
