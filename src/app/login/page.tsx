"use client";
import React from "react";
import LoginBlock from "../components/Login/LoginBlock";
import LOGOFamily from "../components/Login/LOGOFamily";
import PointSwiper from "../components/Login/PointSwiper";
import ImageWithText from "../components/Login/ImageWithText";
import ThreeColumnTextBlock from "../components/Login/ThreeColumnTextBlock";
import QuestionsAbout from "../components/Login/QuestionsAbout";
import InstagramGadget from "../components/Login/InstagramGadget";

export default function page() {
  return (
    <div className="">
      <LoginBlock />
      <LOGOFamily />
      <PointSwiper />
      <ImageWithText />
      <ThreeColumnTextBlock />
      <QuestionsAbout
        smallImage={"/heroimage.jpg"}
        largeImage={"/heroimage2.jpg"}
        text={"Har du frågor om LOGO Family?"}
        buttonText={"FAQ"}
        bottomRight={true}
      />
      <InstagramGadget />
    </div>
  );
}
