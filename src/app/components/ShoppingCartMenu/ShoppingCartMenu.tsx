"use client";
import React, { useEffect, useState } from "react";
import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import ShoppingCartHeader from "./ShoppingCartHeader";
import ShoppingCartItems from "./ShoppingCartItems";
import ShoppingCartTotalPrice from "./ShoppingCartTotalPrice";
import ShoppingCartGiftDonate from "./ShoppingCartGiftDonate";
import ShoppingCartRegisterLogin from "./ShoppingCartRegisterLogin";
import ShoppingCartDeliveryPayment from "./ShoppingCartDeliveryPayment";
import ShoppingCartForm from "./ShoppingCartForm";
import { FormValues } from "@/app/Utilities/ExtraInfo";
import ShoppingCartFormFilled from "./ShoppingCartFormFilled";

export default function ShoppingCartMenu() {
  const [formData, setFormData] = useState<FormValues | undefined>(undefined);
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const {
    handleShoppingCartMenuToggler,
    isShoppingCartMenuOpen,
    shoppingCartItems,
  } = useMenuSlider();

  useEffect(() => {
    if (isShoppingCartMenuOpen === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isShoppingCartMenuOpen]);

  const onSubmit = (data: FormValues) => {
    setFormData(data);
    setDisplayForm(true);
  };

  const changeDetails = () => {
    setDisplayForm(false);
  };

  return (
    <>
      <div className="fixed w-full h-full z-30">
        <div
          className={`${
            isShoppingCartMenuOpen ? "translate-x-0" : "translate-x-full"
          } w-full max-w-[434px] h-full transition-all duration-500 ease-in-out fixed bg-c-White top-0 right-0 z-50 lato overflow-y-auto custom-scrollbar`}
        >
          <ShoppingCartHeader />
          <div className="px-5 h-full">
            <ShoppingCartItems shoppingCartItems={shoppingCartItems} />
            <ShoppingCartTotalPrice shoppingCartItems={shoppingCartItems} />
            <ShoppingCartGiftDonate />
            <ShoppingCartRegisterLogin />

            {formData && displayForm ? (
              <ShoppingCartFormFilled
                formData={formData}
                changeDetails={changeDetails}
              />
            ) : (
              <>
                <ShoppingCartDeliveryPayment />
                <ShoppingCartForm onSubmit={onSubmit} formData={formData} />
              </>
            )}
          </div>
        </div>
        <div
          onClick={handleShoppingCartMenuToggler}
          className={`h-full w-full z-10 fixed inset-0 duration-300 ease-in-out ${
            isShoppingCartMenuOpen
              ? "bg-black opacity-50"
              : "pointer-events-none"
          }`}
        ></div>
      </div>
    </>
  );
}
