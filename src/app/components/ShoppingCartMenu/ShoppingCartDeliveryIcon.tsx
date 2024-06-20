import Budbee from "@/app/Utilities/icons/budbee";
import Instabox from "@/app/Utilities/icons/instabox";
import Postnord from "@/app/Utilities/icons/postnord";
import React from "react";

type Props = {
  deliveryIcon?: string;
};

export default function ShoppingCartDeliveryIcon({ deliveryIcon }: Props) {
  return (
    <>
      {deliveryIcon === "postnord" && (
        <div className="size-[30px]">
          <Postnord className="absolute -top-0.5 right-0" />
        </div>
      )}
      {deliveryIcon === "instabox" && (
        <div className="size-[30px]">
          <Instabox className="absolute -top-0.5 right-0" />
        </div>
      )}
      {deliveryIcon === "budbee" && (
        <div className="size-[30px]">
          <Budbee className="absolute -top-0.5 right-0" />
        </div>
      )}
    </>
  );
}
