import React from "react";
import Typography from "../typography/Typography";
import Image from "next/image";

interface ImageContainerProps {
  classname?: String;
  onHover?: (e: any) => void;
  ImageContainerSrc?: string;
  ImageContainerAlt?: String;
}
const ImageContainer = ({
  classname,
  onHover,
  ImageContainerSrc,
  ImageContainerAlt,
}: ImageContainerProps) => {
  return (
    <div
      className="cursor-pointer relative lg:max-w-[122px] max-w-[75px]  flex justify-center items-center group rounded-full hover:scale-110 transition-all transform duration-300"
      onMouseEnter={onHover}
    >
      <div className="invisible group-hover:visible absolute rounded-full -inset-1 bg-white ease-in-out  blur-sm opacity-80"></div>
      <div
        className="relative xl:w-[100px] xl:h-[100px] lg:w-[85px] lg:h-[85px] w-[75px] h-[75px] rounded-full justify-center items-center flex    
       group"
      >
        <Image
          alt="ImageContainerAlt"
          src={`/assets/rectangleimages/${ImageContainerSrc}.png`}
          className="w-full h-full bg-cover rounded-full"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default ImageContainer;
