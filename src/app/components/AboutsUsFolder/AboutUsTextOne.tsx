import React from "react";

export default function AboutUsTextOne() {
  const h3 = `Hey there!`;
  const p1 = `Ready to dive into the world of LOGO? You're in for a treat! Let's
  unravel the essence of what makes us tick, how we roll, and introduce
  you to the faces driving the magic. Hold on tight; this is going to be a
  thrilling ride!`;
  const p2 = `So, who are we, you ask? LOGO isn't just a brand; it's a dynamic
  collective of extraordinary individuals striving daily to stay in charge
  of phone fashion. Dedication pulses through our veins, shaping every
  facet of our company. From our commitment to the environment to
  fostering a sense of unity within our team - and extending that
  dedication right to you!`;
  const p3 = `We're all about crafting top-notch phone cases and accessories (100% vegan, naturally) that not only safeguard your tech but elevate your
    style game. Because, let's face it, your phone is more than just a
    gadget—it's a fashion statement. We're on a mission to ensure you're
    always decked out in the latest trends, seamlessly blending tech and
    style.`;
  return (
    <div className="space-y-5 text-[15px] px-4 lato mb-20 max-w-[65rem] mx-auto">
      <h3 className="averiaSerifLibre font-bold text-4xl">{h3}</h3>
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
    </div>
  );
}
