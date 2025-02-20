import React from "react";
import Typography from "../typography/Typography";
import Image from "next/image";
import cn from "clsx";

interface ButtonContainerProps {
  classname?: String;
  onHover?: () => void;
  ButtonContainerSrc?: string;
  ButtonContainerAlt?: String;
  imageClassName?: String;
  text: String;
}
const ButtonContainer = ({
  classname,
  onHover,
  ButtonContainerSrc,
  ButtonContainerAlt,
  imageClassName,
  text,
}: ButtonContainerProps) => {
  return (
    <div
      className="relative w-fit flex justify-between items-center group transform hover:scale-110 transition-all duration-600 z-[99]"
      onMouseEnter={onHover}
    >
      <div className="absolute rounded-xs -inset-1 bg-buttonShadow z-[1] group-hover:z-[1] group-hover:blur-sm group-hover:scale-y-[1.05] group-hover:opacity-100 transition-all duration-600 transform blur-sm opacity-80"></div>
      <div className="absolute opacity-100 -top-3 -left-5 z-[99] bg-firstGradient   w-[50%] h-[120%] group-hover:h-[140%] group-hover:-top-5  group-hover:z-[99]"></div>
      <div
        className=" flex  w-fit bg-secondGradient z-[3] group-hover:z-[3] justify-start items-center  px-0 sm:px-2 md:px-8 py-2 flex   group">
        <Image
          alt="ButtonContainerAlt"
          src={ButtonContainerSrc || ""}
          className={cn(`  w-auto z-[5]  pr-4`, imageClassName)}
          width={100} height={100} layout="responsive"
        />
        <Typography
          fontType={"Heading3"}
          classname={
            "w-full lg:text-nowrap text-wrap lg:text-lg lg:leading-snug leading-0 text-sm"
          }
          text={text}
        />
      </div>
    </div>
  );
};

export default ButtonContainer;
