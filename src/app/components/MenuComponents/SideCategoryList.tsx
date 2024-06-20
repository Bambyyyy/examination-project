"use client";
import React from "react";
import { categorys } from "@/app/Utilities/ExtraInfo";
import Smallarrowright from "@/app/Utilities/icons/smallarrowright";

export default function SideCategoryList() {
  return (
    <section className="px-5 mb-10">
      {categorys.map((categoryItem, index) => (
        <div
          key={index}
          className={`${
            categoryItem.categorySubMenu.length > 0
              ? "flex justify-between items-center"
              : "flex justify-start items-center"
          } flex justify-between items-center h-[62px]`}
        >
          {categoryItem.categorySubMenu.length > 0 ? (
            <>
              <span className="absolute">
                <h3 className="lato text-xl font-bold">
                  {categoryItem.categoryName}
                </h3>
              </span>

              <button
                onClick={() => console.log("Hej")}
                className="relative w-full h-full flex justify-end items-center outline-none"
              >
                <Smallarrowright fill={"#000"} />
              </button>
            </>
          ) : (
            <>
              <a
                href={categoryItem.categoryLink}
                className="w-full h-full flex items-center"
              >
                <span>
                  <h3
                    className={`${
                      categoryItem.categoryHighlighted === true
                        ? "text-c-Red"
                        : ""
                    } lato text-xl font-bold`}
                  >
                    {categoryItem.categoryName}
                  </h3>
                </span>
              </a>
              {categoryItem.categoryNew === true ? (
                <a href="/test" className="absolute right-[24px]">
                  <div className="py-1 px-4 bg-[#a899e8] text-c-White rounded-full text-[10px] mr-6">
                    New in
                  </div>
                </a>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
}
