import Image from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import { FooterData } from "./constant";
const UpperSection = () => (
  <div className="py-20 border-b-[1px] pb-28 border-F_dark_gray  ">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
      <div className="flex justify-center items-center flex-col gap-6 text-F_white">
        <h1 className="text-[56px] font-semibold  leading-[67px] text-left tracking-[0.2px] ">
          Ready to get started?
        </h1>
        <p className="text-[18px] leading-[32px] text-left tracking-normal  ">
          Get access to 1,000 free API credits, no credit card required!
        </p>
      </div>
      <div className=" items-center flex justify-center">
        <button className="p-6 hover:opacity-95 bg-bg_light_yellow text-center  font-semibold rounded-md ">
          Try ScrapingBee for Free
        </button>
      </div>
    </div>
  </div>
);
const OtherSection = () => (
  <div className="py-4 ">
    <div className="flex py-6   ">
      <div className="md:flex flex-col gap-3 hidden ">
        <div>
          <Image
            src="/logo-white.svg"
            alt=""
            className=""
            width={150}
            height={150}
          />
        </div>
        <div className="text-white text-[18px] leading-[30px] ">
          <h1 className="">
            ScrapingBee API handles headless browsers and rotates proxies for
            you.
          </h1>
        </div>
        <div className="flex gap-4 ">
          <FaLinkedinIn className="text-bg_white" />
          <FaTwitter className="text-bg_white" />
          <FaInstagram className="text-bg_white" />
          <FaFacebookF className="text-bg_white " />
        </div>
        <div className="text-white font-semibold flex gap-4 items-center">
          <FaPhoneAlt />
          01096975997
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
        {FooterData.sections.map((data) => (
          <div className="flex flex-col gap-5 " key={data.title}>
            <h1 className="text-[18px] text-center text-F_light_yellow leading-[30px] font-semibold py-1 ">
              {data.title}
            </h1>
            <ul>
              {Array(10)
                .fill(1)
                .map((_, index) => (
                  <li
                    className="text-white text-center text-[18px] leading-[24px] py-3 hover:underline cursor-pointer  "
                    key={index}
                  >
                    {data.items[index]}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const Footer = () => {
  return (
    <section className="py-4 bg-bg_black ">
      <div className="container flex flex-col gap-3 ">
        <UpperSection />
        <OtherSection />
        <div className="py-10 flex-col gap-3  flex items-center justify-center">
          <div className=" w-fit p-5 bg-bg_light_yellow rounded-full ">
            <FaHeart className="text-[30px]" />
          </div>
          <h1 className="text-white text-[18px] leading-[31px] font-semibold">
            Copyright © 2024
          </h1>
          <h1 className="text-white text-[18px] leading-[31px]  ">
            made in egypt
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
