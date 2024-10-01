import Image from "next/image";
import React, { memo } from "react";
import { Nav_data } from "./constant";
import { GoArrowDown } from "react-icons/go";
import Link from "next/link";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
// image section {logo}
const ImageSection = memo(() => (
  <div>
    <Image src="/logo.svg" width={170} height={170} alt="logo-image" priority />
  </div>
));
ImageSection.displayName = "ImageSection";
// text in the middle
const MiddleSection = memo(() => (
  <div
    className="xl:flex hidden relative items-center gap-14 "
    id="text_of_Nav"
  >
    {Nav_data.map((items) => (
      <div key={items.text}>
        <ul>
          <Link
            href="#"
            className={`flex relative text-[16px] leading-[19.2px] text-left items-center gap-2 cursor-pointer ${
              items.other ? "hover:opacity-60 duration-300" : "hover:underline"
            }`}
          >
            {items.text} {items.other ? <GoArrowDown /> : null}
          </Link>
        </ul>
      </div>
    ))}
  </div>
));
MiddleSection.displayName = "MiddleSection";
// login and sign in section
const LastSection = () => (
  <div className="flex   gap-7 justify-between items-center">
    <button className="xl:flex hidden hover:underline p-3 text-[16px]">
      Login
    </button>
    <button className="xl:flex hidden py-1 hover:bg-bg_black hover:text-F_white duration-300 px-4 border-[2px] rounded-[4px] border-bg_black text-F_dark text-start font-semibold text-[16px] leading-[31px]">
      Sign Up
    </button>
    <TfiLayoutListThumbAlt className="flex xl:hidden text-[24px]" />
  </div>
);
// Component of the Nav
const Nav = () => (
  <nav className="relative bg-bg_light_yellow p-8">
    <div className="flex  container  items-center justify-between">
      <div className="flex items-center gap-24">
        <ImageSection />
        <MiddleSection />
      </div>
      <LastSection />
    </div>
  </nav>
);

export default Nav;
