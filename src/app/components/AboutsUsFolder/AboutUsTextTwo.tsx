import React from "react";

export default function AboutUsTextTwo() {
  const h3 = "What's our forte?";
  const p1 = `We're all about crafting top-notch phone cases and accessories (100% vegan, naturally) that not only safeguard your tech but elevate your
  style game. Because, let's face it, your phone is more than just a
  gadget—it's a fashion statement. We're on a mission to ensure you're
  always decked out in the latest trends, seamlessly blending tech and
  style.`;
  const p2 = `Speaking of missions, sustainability sits at the heart of everything we
  do. It's not just a buzzword; it's a way of life at LOGO. Our products
  boast recycled materials, we offset our carbon footprint during
  shipping, and our commitment to Corporate Social Responsibility (CSR)
  ensures guilt-free shopping every time you choose us.`;
  const p3 = `Keen on the nitty-gritty of our green initiatives? Dive into our
  sustainability report for an in-depth look! And because life is better
  in color, we've got your vibe covered. Take your pick from our vibrant
  range and let your style shine. At LOGO, we don't just follow trends;
  we set them.`;

  return (
    <div className="space-y-5 text-sm px-4 lato mb-20 max-w-[65rem] mx-auto">
      <h3 className="averiaSerifLibre font-bold text-4xl">{h3}</h3>
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
    </div>
  );
}
