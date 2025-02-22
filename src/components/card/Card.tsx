import React from "react";
import Typography from "../typography/Typography";
import Image from "next/image";
import cn from "clsx";

interface CardProps {
  isDefault?: Boolean;
  isHover?: Boolean;
  classname?: String;
  onHover?: () => void;
  onNotHover?: () => void;
  CardSrc?: string;
  CardAlt?: String;
}
const Card = ({
  classname,
  isDefault,
  onHover,
  onNotHover,
  CardSrc,
  isHover,
  CardAlt,
}: CardProps) => {
  return (
    <div
      className={cn(
        `relative  lg:max-w-[434px] lg:max-h-[392px] max-w-[234px] max-h-[192px]  transition delay-10 ease-in-out transform duration-300 flex justify-center items-center group `,
        classname,
        isHover ? "hover:scale-150 hover:z-[99]" : "scale-1 z-1",
        isDefault ? "scale-150 " : ""
      )}
      onMouseEnter={onHover}
      onMouseLeave={onNotHover}
    >
      <div className=" group-hover:bg-cardShadowHover absolute -inset-1 bg-cardShadow   blur-[6px] scale-[1.02] opacity-90 "></div>
      <div
        className="relative lg:w-[300px] lg:h-[258px] w-[200px] h-[158px] bg-none  justify-center items-center    
       group"
      >
        <img
          alt="CardAlt"
          src={`/assets/cardpage/${CardSrc}.png`}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Card;
