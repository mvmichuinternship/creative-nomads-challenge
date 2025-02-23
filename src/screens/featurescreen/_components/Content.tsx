"use client";
import Button from "@/components/button/Button";
import ButtonContainer from "@/components/button/ButtonContainer";
import { svgCursor } from "@/components/icon/svg/Cursor";
import { svgGlasses } from "@/components/icon/svg/Glasses";
import { svgPrebook } from "@/components/icon/svg/Prebook";
import Typography from "@/components/typography/Typography";
import { buttonData, ButtonProps } from "@/data/buttonData";
import Image from "next/image";
import { useState } from "react";

// const [state, setState] = useState({name:""})
// text:"WHAT SETS US APART !",
// description:"Discover the groundbreaking features that make the PlayStation 6 the ultimate gaming console. From stunning 8K visuals to intelligent AI-driven gameplay, every element is designed to immerse you in a world of unparalleled realism and performance."

export default function Content() {
  const [content, setContent] = useState<ButtonProps>({
    text: "WHAT SETS US APART !",
    buttonContainerAlt: "image1",
    ButtonContainerSrc: "image1",
    imageClassName: "",
    description:
      "Discover the groundbreaking features that make the PlayStation 6 the ultimate gaming console. From stunning 8K visuals to intelligent AI-driven gameplay, every element is designed to immerse you in a world of unparalleled realism and performance.",
  });

  return (
    <div className="relative w-full h-full flex  md:flex-row flex-col md:gap-y-0 gap-y-8  xl:pr-64 lg:pr-32   md:px-8 px-4 ">
      {/* <div className="w-full relative"> */}
      <div className="absolute md:top-10 top-8 z-1 sm:right-16 right-0">
        <Image
          alt=""
          src="/assets/featurepage/airpods.png"
          width={179}
          height={139}
        />
      </div>
      <div className="absolute md:-bottom-32 bottom-32 z-1 md:hidden lg:inline inline right-0">
        <Image
          alt=""
          src="/assets/featurepage/feature.svg"
          width={179}
          height={139}
        />
      </div>
      <div className=" md:pt-16 pt-16 w-full flex flex-col gap-y-12">
        {buttonData.map((data) => (
          <span key={data.text}>
            <ButtonContainer
              text={data.text}
              ButtonContainerAlt={data.buttonContainerAlt}
              ButtonContainerSrc={`/assets/featurepage/buttonimages/${data.ButtonContainerSrc}.png`}
              imageClassName={data.imageClassName}
              onHover={() => {
                setContent(data);
              }}
            />
          </span>
        ))}
      </div>
      {/* </div> */}
      <div className="flex flex-col justify-center items-center  sm:w-[31rem] w-[70%] z-50  md:pt-40 ">
        <div className=" w-full ">
          <Typography
            fontType={"Heading2"}
            text={content.text}
            classname={"xs:text-nowrap"}
          />
          <Typography
            fontType={"Body"}
            classname={" pt-4 pb-8"}
            text={content.description}
          />
          <div className="flex flex-col lg:flex-row  w-full">
            <Button
              buttonText={"MORE FEATURES"}
              svgCode={svgCursor}
              classname={"hover:px-[14.6px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
