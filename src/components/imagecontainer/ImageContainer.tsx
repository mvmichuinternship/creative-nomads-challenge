import React from "react";
import Typography from "../typography/Typography";
import Image from "next/image";

interface ImageContainerProps {
  classname?: String;
  onHover?: () => {};
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
    <div className="relative max-w-[122px] flex justify-center items-center group rounded-full">
      <div className="invisible group-hover:visible absolute rounded-full -inset-1 bg-white ease-in-out  blur-sm opacity-80"></div>
      <div
        className="relative w-[122px] h-[122px] bg-white rounded-full justify-center items-center overflow-hidden border  px-8 py-2 flex gap-x-2 
       group"
      >
        <Image
          alt="ImageContainerAlt"
          src={ImageContainerSrc || ""}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
