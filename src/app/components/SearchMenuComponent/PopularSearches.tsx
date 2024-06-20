import React from "react";
import Image from "next/image";
import { categories, categoryBubbleWithImage } from "@/app/Utilities/ExtraInfo";

type Props = {
  handleFilterChange: (value: string) => void;
};

export default function PopularSearches({ handleFilterChange }: Props) {
  return (
    <div className="p-5 bg-c-White space-y-10">
      <div className="mb-10">
        <h3 className="averiaSerifLibre font-bold text-2xl mb-5">
          Populära sök
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleFilterChange(category.categoryValue)}
              className="py-1.5 px-3 text-xs lato bg-c-LightBlue rounded-[120px]"
            >
              {category.categoryName}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="averiaSerifLibre font-bold text-2xl mb-5">
          Populära kategorier
        </h3>
        <div className="grid grid-cols-2 grid-flow-row-2 gap-x-5 gap-y-10">
          {categoryBubbleWithImage.map((category, index) => (
            <a key={index} href={category.categoryLink}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={category.categoryImage}
                  alt="Image"
                  fill
                  sizes="100vw"
                  className="object-cover object-center "
                />
              </div>
              <p className="mt-2.5 z-10 font-bold lato">
                {category.categoryName}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
