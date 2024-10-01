import React from "react";
import { WhoAreWe } from "./constant";
import Image from "next/image";
const CardSection = () => (
  <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-2 p-3 ">
    {WhoAreWe.map((item) => (
      <div
        key={item.name}
        className="flex flex-col justify-start items-center p-4 gap-6 "
      >
        <div className="flex items-center">
          <Image
            src={item.img}
            className="rounded-md"
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className="">
          <h1 className="text-[36px] font-semibold tracking-normal text-center leading-[48px]">
            {item.name}
          </h1>
          <p className="text-[24px] text-F_dark tracking-normal text-center leading-[33px]  ">
            {item.title}
          </p>
        </div>
        <div>
          <p className="text-[18px] text-F_light_gray tracking-normal text-center leading-[31px] ">
            {item.p}
          </p>
        </div>
      </div>
    ))}
  </div>
);
const ContactUs = () => {
  return (
    <section>
      <div className="container flex flex-col gap-2  ">
        <div className="text-center text-[56px] leading-[67.9px] tracking-normal ">
          <h1>Who are we?</h1>
        </div>
        <div className="text-center text-[24px] leading-[43px] tracking-normal">
          <h1>Developers, Developers, Developers!</h1>
        </div>
        <div className="text-center text-F_light_gray text-[24px] leading-[43px] tracking-normal">
          <h1>You can read the full-story here.</h1>
        </div>

        <CardSection />
        <div className="flex items-center text-center py-40 flex-col gap-5  ">
          <h1 className="text-[56px] leading-[68px] text-F_dark font-bold">
            Contact us
          </h1>
          <h1 className="text-[24px] leading-[42px] ">
            Got any questions? Don't hesitate to reach
          </h1>
          <button className="bg-bg_black text-white p-4 rounded-md text-[20px] font-semibold   hover:opacity-95 duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
