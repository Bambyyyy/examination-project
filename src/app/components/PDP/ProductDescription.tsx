"use client";
import React, { useState } from "react";

type Props = {
  productLongDescription: string | "";
};

export default function ProductDescription({ productLongDescription }: Props) {
  const [subMenuOpen, setSubMenuOpen] = useState<Number | null>(0);

  const handleClick = (menuNumber: Number) => {
    subMenuOpen === menuNumber
      ? setSubMenuOpen(null)
      : setSubMenuOpen(menuNumber);
  };

  return (
    <ul className="w-full border-t-[1px] border-black">
      <li className="w-full h-full border-b-[1px] border-black">
        <button
          className="averiaSerifLibre py-5 font-bold text-2xl flex justify-between w-full"
          onClick={() => handleClick(0)}
        >
          <p>Produktbeskrivning</p>
          <p className="pl-4">{subMenuOpen === 0 ? "-" : "+"}</p>
        </button>
        <div
          className={`${
            subMenuOpen === 0 ? "max-h-52" : "max-h-0"
          } transition-all overflow-hidden duration-500 h-auto`}
        >
          <div className="pb-6 text-base/4">
            <p>{productLongDescription}</p>
          </div>
        </div>
      </li>
      <li className="w-full border-b-[1px] border-black">
        <button
          className="averiaSerifLibre py-5 font-bold text-2xl flex justify-between w-full"
          onClick={() => handleClick(1)}
        >
          <p>Detaljer</p>
          <p className="pl-4">{subMenuOpen === 1 ? "-" : "+"}</p>
        </button>
        <div
          className={`${
            subMenuOpen === 1 ? "max-h-52" : "max-h-0"
          } transition-all overflow-hidden duration-500 h-auto`}
        >
          <ul className="list-disc list-inside pb-6">
            <li>Kompatibel med trådlös laddning</li>
            <li>Ultratunn passform på 0,8mm</li>
            <li>Materialet är greppvänligt och smidigt</li>
            <li>Vegan Product</li>
            <li>
              Innehåller återvunnet material - Gäller från iPhone 14 och AW22
            </li>
          </ul>
        </div>
      </li>
      <li className="w-full border-b-[1px] border-black">
        <button
          className="averiaSerifLibre py-5 font-bold text-2xl flex justify-between w-full"
          onClick={() => handleClick(2)}
        >
          <p>Hållbarhet</p>
          <p className="pl-4">{subMenuOpen === 2 ? "-" : "+"}</p>
        </button>
        <div
          className={`${
            subMenuOpen === 2 ? "max-h-60" : "max-h-0"
          } transition-all overflow-hidden duration-500 h-auto`}
        >
          <div className="pb-6 text-base/4">
            <p>
              Våra mobilskal i Silikon innehåller 100% återvunnen PC
              (polykarbonat), och materialet kommer från betrodda källor.
              PC-materialet är GRS-certifierat vilket betyder att en tredje part
              har certifierat denna produkt. Vid certifiering granskas både
              materialkedjan, social och miljömässig hantering samt användningen
              av kemikalier. Vi bryr oss om planeten, och människorna som bor
              här, och strävar efter att ständigt förbättra våra produkter. Ps!
              Hela vårt sortiment är självklart veganskt och godkänt av PETA.
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}
