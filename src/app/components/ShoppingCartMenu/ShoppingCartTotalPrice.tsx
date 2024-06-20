import { CartItem } from "@/app/Utilities/SliderMenuContext";
import React from "react";

type Props = {
  shoppingCartItems: CartItem[];
};

export default function ShoppingCartTotalPrice({ shoppingCartItems }: Props) {
  const totalPrice = shoppingCartItems?.reduce((accumulator, currValue) => {
    const itemTotalPrice =
      currValue.itemQuantity > 1
        ? currValue.itemQuantity * currValue.itemPrice
        : currValue.itemPrice;
    return accumulator + itemTotalPrice;
  }, 0);

  const totalPriceWithTax = totalPrice / 1.25;
  const tax = totalPrice - totalPriceWithTax;
  const roundedTax = Math.floor(tax);

  return (
    <div className="text-sm space-y-0.5 mb-5">
      <div className="flex justify-between">
        <p>Delsumma</p>
        <p>{totalPrice}.00 SEK</p>
      </div>
      <div className="flex justify-between">
        <p>Frakt</p>
        <p>0.00 SEK</p>
      </div>
      <div className="flex justify-between text-base font-bold">
        <p>Totalsumma (inkl.moms)</p>
        <p>{totalPrice}.00 SEK</p>
      </div>
      <div className="flex justify-between">
        <p>Moms</p>
        <p>{roundedTax}.00 SEK</p>
      </div>
    </div>
  );
}
