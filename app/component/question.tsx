import React from "react";
import { question } from "./constant";

const Question = () => {
  return (
    <section className=" py-4">
      <div className="md:[clip-path:polygon(0_10%,_100%_0,_100%_90%,_0_100%)] conatiner [clip-path:polygon(0_6%,_100%_0,_100%_94%,_0_100%)] py-32 flex justify-center flex-col   bg-bg_black p-10  ">
        <div className="pt-10 mt-10">
          <h1 className="text-center text-F_white text-[48px] leading-[48px] tracking-normal font-bold">
            Developers are asking...
          </h1>
        </div>
        <div className="flex flex-wrap text-wrap py-16 my-10 relative p-4    ">
          {question.map((item) => (
            <div
              className="md:w-[50%] text-center w-[100%]  md:text-start flex gap-5 flex-col py-7   "
              key={item.h1}
            >
              <h1 className="text-F_white text-[20px] leading-[28px] font-semibold ">
                {item.h1}
              </h1>
              <p className="text-[16px] leading-[24px] text-F_light_blue w-[95%] ">
                {item.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
