import { DeliveryArray } from "@/app/Utilities/ExtraInfo";
import React from "react";
import Image from "next/image";
import Postnord from "@/app/Utilities/icons/postnord";
import Instabox from "@/app/Utilities/icons/instabox";
import Budbee from "@/app/Utilities/icons/budbee";
import ShoppingCartDeliveryIcon from "./ShoppingCartDeliveryIcon";
import Ingrid from "@/app/Utilities/icons/ingrid";

export default function ShoppingCartDeliveryPayment() {
  return (
    <div className="mb-5">
      <div>
        <h3 className="font-bold averiaSerifLibre text-2xl mb-5">
          Leverans & Betalning
        </h3>
      </div>
      <div className="border-[1px] border-opacity-30 rounded-md pt-6 px-4">
        <div className="mb-4">
          <h4 className="text-base">Leveransalternativ</h4>
        </div>
        <ul>
          {DeliveryArray.map((item, index) => (
            <li
              key={index}
              className="space-y-2 border-t-[#e6e6e6] border-t-[1px] pt-4 pb-3"
            >
              <div className="grid grid-cols-[20px,1fr,auto,32px] gap-x-4 text-[.875rem] font-semibold relative">
                <div className="size-5 rounded-full border-black border-[1px]"></div>
                <div className="flex flex-col overflow-auto space-y-0.5">
                  <h3 className="text-ellipsis text-nowrap overflow-hidden">
                    {item.deliveryName}
                  </h3>
                  <p className="text-[#797979] font-extralight">
                    {item.deliveryTime}
                  </p>
                </div>
                <div>
                  <p>{item.deliveryCost}</p>
                </div>
                <ShoppingCartDeliveryIcon deliveryIcon={item.deliveryIcon} />
              </div>
              <div className="text-[.75rem] w-full">
                <div className="ml-[36px] mr-[40px]">
                  <p>
                    <span className="text-[#00AA30]">{item.deliveryGreen}</span>
                    <span className="text-[#797979]">∙ Spårbart</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-end w-full border-t-[#e6e6e6] border-t-[1px]">
          <div className="pt-3 pb-4">
            <Ingrid />
          </div>
        </div>
      </div>
    </div>
  );
}
