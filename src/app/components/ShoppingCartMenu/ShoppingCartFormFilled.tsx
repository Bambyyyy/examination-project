import React from "react";
import { FormValues } from "@/app/Utilities/ExtraInfo";
import Button from "../ButtonComponentFolder/Button";

type Props = {
  formData: FormValues;
  changeDetails: () => void;
};

export default function ShoppingCartFormFilled({
  formData,
  changeDetails,
}: Props) {
  return (
    <div className="space-y-10 pb-10">
      <div className="bg-c-MineralBlue px-5 py-6 text-sm space-y-5 rounded-3xl">
        <div className="space-y-0.5">
          <p className="font-semibold">
            {formData?.firstname + " " + formData?.lastname}
          </p>
          <p>{formData.address1}</p>
          <p>{formData.zipcode + " " + formData.city}</p>
        </div>
        <div className="space-y-0.5">
          <p>{formData.phoneNumber}</p>
          <p>{formData.email}</p>
        </div>
        <Button
          onClick={changeDetails}
          variant="black-outlined"
          className="w-full !bg-c-White"
        >
          Ändra detaljer
        </Button>
      </div>
      <Button variant="black" className="w-full">
        Fullfölj köp
      </Button>
    </div>
  );
}
