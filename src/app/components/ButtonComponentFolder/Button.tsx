import React, { FC } from "react";
import A from "@/app/components/ButtonComponentFolder/A";
import { twMerge } from "tailwind-merge";

export type ButtonType = {
  className?: string;
  onClick?: false | ((e?: any) => void);
  submit?: boolean;
  href?: string;
  children?: any;
  name?: string;
  hover?: boolean;
  size?: string;
  fullWidth?: boolean;
  variant?:
    | "white"
    | "black"
    | "purple"
    | "yellow"
    | "bright-yellow"
    | "dark-gray"
    | "red"
    | "blue"
    | "green"
    | "black-outlined"
    | "white-outlined"
    | "no-style";
};

const Button: FC<ButtonType> = ({
  className,
  onClick,
  submit,
  href,
  children,
  name,
  hover,
  size,
  variant,
}) => {
  let variantClasses = "bg-black text-c-W hite";
  switch (variant) {
    case "white":
      variantClasses = "bg-c-White text-black";
      break;
    case "black":
      variantClasses = "bg-black text-c-White";
      break;
    case "purple":
      variantClasses = "bg-c-Purple text-c-White";
      break;
    case "yellow":
      variantClasses = "bg-c-Yellow text-black";
      break;
    case "bright-yellow":
      variantClasses = "bg-c-BYellow text-black";
      break;
    case "dark-gray":
      variantClasses = "bg-c-DarkGray text-c-White";
      break;
    case "red":
      variantClasses = "bg-c-Red text-c-White";
      break;
    case "blue":
      variantClasses = "bg-c-Blue text-c-White";
      break;
    case "green":
      variantClasses = "bg-c-Green text-c-White";
      break;
    case "black-outlined":
      variantClasses = "bg-transparent border-black border-[2px] text-black";
      break;
    case "white-outlined":
      variantClasses =
        "bg-transparent border-c-White border-[2px] text-c-White";
      break;
    case "no-style":
      variantClasses = "";
      break;
    default:
      break;
  }

  const padding = variant !== "no-style" ? "px-[35px] py-[12px]" : "";

  const classes = twMerge(
    padding,
    className ?? "",
    variant === "no-style"
      ? ""
      : `text-center cursor-pointer font-medium rounded-full ${variantClasses} ${
          hover
            ? "lg:hover:border-black lg:hover:bg-transparent lg:hover:text-black"
            : ""
        } 
        ${size == "xs" ? "text-xs" : ""}
         ${size == "s" ? "text-sm" : ""} 
         ${size == "m" ? "text-base" : ""} 
         ${size == "l" ? "text-lg" : ""}
         ${size == "xl" ? "text-xl" : ""}
         ${size == "2xl" ? "text-2xl" : ""}`
  );

  return href ? (
    <A className={classes} href={href}>
      {children}
    </A>
  ) : (
    <button
      type={submit ? "submit" : "button"}
      className={classes}
      onClick={onClick || undefined}
      name={name}
    >
      {children}
    </button>
  );
};

export default Button;
