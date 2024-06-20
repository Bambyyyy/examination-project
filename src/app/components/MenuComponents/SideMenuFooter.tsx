import React from "react";
import WalletCurrencyComponent from "./WalletCurrencyComponent";
import EarthLanguageComponent from "./EarthLanguageComponent";

export default function SideMenuFooter() {
  return (
    <div className="flex gap-4 px-5 mb-5">
      <EarthLanguageComponent id={1} />
      <WalletCurrencyComponent id={2} />
    </div>
  );
}
