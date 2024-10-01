import Image from "next/image";
import React from "react";
import { Cards1, ImgCard } from "./constant";
const Cards = () => {
  return (
    <section className=" flex flex-col gap-9 py-5 ">
      <Card1 />
      <Card2 />
    </section>
  );
};

const Card1 = () => (
  <div className="flex flex-col justify-center gap-3 container ">
    {/* text in the top  */}
    <div className="flex text-center p-4  m-3 flex-col gap-1 ">
      <h1 className="text-[36px] p-2 leading-[48px] ">
        Six ways to use ScrapingBee for web harvesting
      </h1>
      <p className="text-[24px] leading-[32px] text-F_light_gray ">
        Wondering how our customers use our web scraping API?
      </p>{" "}
      <p className="text-[24px] leading-[32px] text-F_light_gray ">
        From a general web scrape to JavaScript rendering, our simple API does
        it all.
      </p>
    </div>
    {/* card section  */}
    <div className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1  items-center justify-center">
      {Cards1.map((items) => {
        return (
          <div
            key={items.id}
            className=" gap-3 w-fit p-5 flex flex-col  justify-center items-center "
          >
            <div>
              <Image src={items.img} alt="" width={60} height={60} />
            </div>
            <h1 className="text-[18px] leading-[32px] text-center text-F_dark font-semibold">
              <span className="font-semibold">{items.id} -</span> {items.header}
            </h1>
            <p className="text-[16px] leading-[31.99px] text-center  text-F_light_gray w-[100%]">
              {items.p}
              <span className="font-semibold underline text-black ">
                {items.lastword}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  </div>
);
const Card2 = () => (
  <div className="flex flex-col justify-center gap-5 py-5 ">
    {/* text in the top  */}
    <div className="flex text-center p-4  m-3 flex-col gap-1 ">
      <h1 className="text-[36px] p-2 leading-[48px] ">
        You're in great company.
      </h1>
      <p className="text-[24px] leading-[32px] text-F_light_gray ">
        500+ customers all around the globe use ScrapingBee to solve their web
        scraping needs.
      </p>{" "}
    </div>
    {/* card section  */}
    <div className="  grid lg:grid-cols-5  md:grid-cols-3 grid-cols-2 gap-1  items-center justify-center">
      {ImgCard.map((items) => {
        return (
          <div
            key={items.img}
            className=" gap-3 p-5 justify-center items-center "
          >
            <div className="flex justify-center ">
              <Image src={items.img} alt="" width={60} height={60} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Cards;
