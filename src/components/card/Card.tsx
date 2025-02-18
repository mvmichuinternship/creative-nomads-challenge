import React from "react";
import Typography from "../typography/Typography";
import Image from "next/image";
import cn from 'clsx'

interface CardProps {
  isDefault?:Boolean;
  classname?: String;
  onHover?: () => {};
  CardSrc?: string;
  CardAlt?: String;
}
const Card = ({
  classname,
  isDefault,
  onHover,
  CardSrc,
  CardAlt,
}: CardProps) => {
  return (
    <div className={cn(`relative  max-w-[434px] max-h-[392px]  hover:scale-150 transition delay-10 ease-in-out transform duration-300 flex justify-center items-center group `,classname)}>
      <div className=" group-hover:bg-cardShadowHover absolute -inset-1 bg-cardShadow   blur-[6px] scale-[1.02] opacity-90 "></div>
      <div
        className="relative w-[300px] h-[258px] bg-none  justify-center items-center    
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
