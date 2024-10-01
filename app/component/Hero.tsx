import Image from "next/image";
import React from "react";

const RightSectionHero = () => (
  <div className="flex flex-col flex-1" id="right_section_hero">
    <h1 className="text-[56px] leading-[68.32px] text-start font-bold my-3">
      Tired of getting blocked while scraping the web?
    </h1>
    <p className="text-[24px] leading-[36px] text-start my-6">
      The ScrapingBee web scraping API handles headless browsers and rotates
      proxies for you.
    </p>
    <div className="my-5">
      <button className="hover:opacity-90 duration-300 bg-bg_black text-F_white px-10 font-semibold py-4 rounded-[4px] text-[18px] leading-[27px]">
        Try ScrapingBee for Free
      </button>
    </div>
  </div>
);

const ImageSectionHero = () => (
  <div className="flex-1 relative lg:flex hidden  ">
    <Image
      src="/hero_illustration.svg"
      alt="hero_image"
      width={500}
      height={500}
      priority
    />
  </div>
);

const Hero = () => {
  return (
    <section className="relative bg-bg_light_yellow p-8 pb-56 [clip-path:polygon(20%_0%,_0_0,_0_51%,_0_100%,_100%_78%,_100%_51%,_100%_0,_80%_0%,_50%_0)]">
      <div className="container flex">
        <RightSectionHero />
        <ImageSectionHero />
      </div>
    </section>
  );
};

export default Hero;
