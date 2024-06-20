import React from "react";
import Button from "../ButtonComponentFolder/Button";

export default function ShoppingCartRegisterLogin() {
  return (
    <div className="px-5 py-6 bg-c-Purple text-c-White rounded-3xl mb-10">
      <h3 className="mb-2.5">Join LOGO Family</h3>
      <ul className="text-[.75rem] space-y-1 list-disc ml-4 mb-5">
        <li>10% rabatt på din beställning</li>
        <li>Samla bonuspoäng på alla köp</li>
      </ul>
      <div className="flex space-x-5">
        <Button className="w-full px-[35px] py-3" variant="white-outlined">
          Registrera
        </Button>
        <Button className="w-full px-[35px] py-3" variant="black">
          Logga in
        </Button>
      </div>
    </div>
  );
}
