import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import Close from "@/app/Utilities/icons/close";
import Search from "@/app/Utilities/icons/search";
import React from "react";

type Props = {
  handleFilterChange: (value: string) => void;
  filter: string;
};

export default function SearchMenu({ handleFilterChange, filter }: Props) {
  const { handleSearchMenuToggler } = useMenuSlider();

  return (
    <div className="flex p-5 w-full mb-1 bg-c-White shadow-sm">
      <div className="flex justify-between w-full">
        <input
          placeholder="Vad letar du efter?"
          type="text"
          className="w-[80%] outline-none placeholder:text-black lato"
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        />
        <button className="mr-10">
          <Search />
        </button>
      </div>
      <button onClick={() => handleSearchMenuToggler()}>
        <Close />
      </button>
    </div>
  );
}
