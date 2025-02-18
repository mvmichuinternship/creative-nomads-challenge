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
    <div className="relative w-full flex justify-around items-center lg:px-28 md:px-8 px-4">
      <div className="w-full absolute -top-24 ">
        <div className="flex flex-col gap-y-12">
          {buttonData.map((data) => (
            <ButtonContainer
              text={data.text}
              ButtonContainerAlt={data.buttonContainerAlt}
              ButtonContainerSrc={`/assets/featurepage/buttonimages/${data.ButtonContainerSrc}.png`}
              imageClassName={data.imageClassName}
              onHover={() => {setContent(data);console.log("hovered")}}
            />
          ))}
        </div>
      </div>
      <div className="relative lg:w-full flex flex-col lg:justify-center lg:items-end md:justify-center md:items-end sm:justify-center sm:items-end items-center justify-start w-full   md:w-[60%]">
        <div className="absolute -top-[120px] -right-8">
          <Image
            alt=""
            src="/assets/featurepage/airpods.png"
            width={179}
            height={139}
          />
        </div>
        <div className="absolute -bottom-12 -right-24">
          <Image
            alt=""
            src="/assets/featurepage/feature.svg"
            width={179}
            height={139}
          />
        </div>
        <div className="w-[27%] mr-32  mb-12">
          <Typography fontType={"Heading2"} text={content.text} />
          <Typography
            fontType={"Body"}
            classname={" pt-4 pb-8"}
            text={
              content.description
              // "Discover the groundbreaking features that make the PlayStation 6 the ultimate gaming console. From stunning 8K visuals to intelligent AI-driven gameplay, every element is designed to immerse you in a world of unparalleled realism and performance."
            }
          />
          <div className="flex flex-col lg:flex-row  w-full">
            <Button buttonText={"MORE FEATURES"} svgCode={svgCursor} />
          </div>
        </div>
      </div>
    </div>
  );
}
