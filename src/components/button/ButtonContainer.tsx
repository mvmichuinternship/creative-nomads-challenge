import React from "react";
import Typography from "../typography/Typography";
import Image from "next/image";
import cn from 'clsx'

interface ButtonContainerProps {
  classname?: String;
  onHover?: () => void;
  ButtonContainerSrc?: string;
  ButtonContainerAlt?: String;
  imageClassName?:String;
  text:String;
}
const ButtonContainer = ({
  classname,
  onHover,
  ButtonContainerSrc,
  ButtonContainerAlt,
  imageClassName,
  text
}: ButtonContainerProps) => {
  return (
    <div className="relative w-fit flex justify-center items-center group transform hover:scale-110 transition-all duration-600 z-[99]" onMouseEnter={onHover}>
     

      <div
        className="relative flex h-[70px] w-fit bg-secondGradient z-[3] group-hover:z-[3] justify-center items-center overflow-hidden px-8 py-2 flex gap-x-4 
        group"
      >
        <img
          alt="ButtonContainerAlt"
          src={ButtonContainerSrc || ""}
          className={cn(`w-min h-full z-[5]`,imageClassName)}
        />
        <Typography fontType={"Heading3"} classname={"w-auto"} text={text}/>
      </div>
        <div className="absolute rounded-xs -inset-1 bg-buttonShadow z-[1] group-hover:z-[1] group-hover:blur-sm group-hover:scale-y-[1.05] group-hover:opacity-100 transition-all duration-600 transform blur-sm opacity-80"></div>
      <div className="absolute opacity-100 -top-3 -left-5 z-[99] bg-firstGradient  h-[93px] w-[50%] group-hover:h-[110px] group-hover:-top-5  group-hover:z-[99]"></div>
    </div>
  );
};

export default ButtonContainer;
