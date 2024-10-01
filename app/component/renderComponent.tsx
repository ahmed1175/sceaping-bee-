import Image from "next/image";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { render } from "./constant";
const RenderComponent = () => {
  return (
    <section>
      <div className="container flex flex-col ">
        {render.map((item) => (
          <div className="flex my-20 py-4  " key={item.header}>
            {item.right ? (
              <>
                <LeftSection Img={item.Img} />
                <RightSection
                  header={item.header}
                  p={item.p}
                  p1={item.p1}
                  p2={item.p2}
                  position={item.position}
                  position2={item.position2}
                  imgCard={item.imgCard}
                  numCard={item.NamCard}
                  Pcard={item.Pcard}
                  yollowP={item.yollowP}
                />
              </>
            ) : (
              <>
                <RightSection
                  header={item.header}
                  p={item.p}
                  p1={item.p1}
                  p2={item.p2}
                  position={item.position}
                  position2={item.position2}
                  imgCard={item.imgCard}
                  numCard={item.NamCard}
                  Pcard={item.Pcard}
                  yollowP={item.yollowP}
                />
                <LeftSection Img={item.Img} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
type Right = {
  header: string;
  p1: string;
  p2: string;
  p: string;
  numCard: string;
  imgCard: string;
  position2: string;
  position: string;
  Pcard: string;
  yollowP: string;
};
const RightSection = ({
  header,
  p1,
  p2,
  p,
  numCard,
  imgCard,
  position2,
  position,
  Pcard,
  yollowP,
}: Right) => (
  <div className="flex-1 text-start flex flex-col m-7 gap-5 items-center ">
    <h1 className="text-[48px] tracking-tighter-[-0.48px] leading-[60.32px] text-start font-bold my-3">
      {header}
      <span className=" border-b-[5px] border-bg_light_yellow ">{yollowP}</span>
    </h1>
    <p className="text-F_light_gray text-[18px] leading-[31px] text-start ">
      {p}
    </p>
    <div className="flex gap-8 text-F_light_gray text-[18px] leading-[31px] text-start ">
      <p className="flex gap-2 items-center">
        <FiCheckCircle className="text-green-600" /> {p1}
      </p>
      <p className="flex gap-2 items-center">
        <FiCheckCircle className="text-green-600" /> {p2}
      </p>
    </div>
    <div className=" gap-14 flex flex-col   bg-[#f2f2f2] p-10 m-2 rounded-[16px] text-[18px] leading-[28px] text-start  ">
      <p>{Pcard}</p>
      <div>
        <div className="flex gap-4">
          <div>
            <Image
              src={imgCard}
              className="rounded-full"
              width={70}
              height={70}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className=" font-semibold text-[18px] leading-[28px] text-start">
              {numCard}
            </h3>
            <div className="text-[15px] leading-[24px] ">
              {position} @
              <span className="underline font-semibold">{position2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
type left = {
  Img: string;
};

const LeftSection = ({ Img }: left) => (
  <div className="flex-1 xl:flex hidden ">
    <Image src={Img} width={500} height={500} alt="" />
  </div>
);


export default RenderComponent;
