"use client";

import { BigRectangle } from "@/components/posters/BigRectangle";
import { SmallRectangle } from "@/components/posters/SmallRectangle";
import Content from "./_components/Content";
import ImageContainer from "@/components/imagecontainer/ImageContainer";
import Typography from "@/components/typography/Typography";
import { useState } from "react";
import { posterData } from "@/data/posetData";
import Button from "@/components/button/Button";
import { svgPrebook } from "@/components/icon/svg/Prebook";
import { svgGame } from "@/components/icon/svg/Game";

export default function PosterScreen() {
  const [imagePattern, setImagePattern] = useState("astrobot");

  function onHover(e: any) {
    console.log(e);
    setImagePattern(e.imageName);
  }
  return (
    <div className="relative w-full h-full  ">
      <div className="absolute z-1 -top-12 lg:-left-80 md:-left-[11rem] sm:-left-[10rem]  w-[60%] h-[60%] ">
        <SmallRectangle
          pattern={`/assets/rectangleimages/${imagePattern}.png`}
        />
      </div>
      <div className="w-[70%] h-[50%] place-self-center justify-self-center absolute ">
        <div className="flex flex-col justify-start items-start w-[43%]">
          <Typography fontType={"Heading2"} text={"PLAY YOUR WAY !"} />
          <Typography
            classname={"py-4"}
            fontType={"Body"}
            text={
              "Embark on Epic Adventures, Conquer New Worlds, and Redefine Your Gaming Journey with PS6 Exclusive Titles and Enhanced Classics"
            }
          />
          <div className="grid grid-cols-3 place-items-start gap-x-12 gap-y-10 py-8">
            {posterData.map((data) => (
              <div key={data.title}>
                <ImageContainer
                  ImageContainerSrc={data.imageName}
                  onHover={() => {setImagePattern(data.imageName)}}
                />
              </div>
            ))}
          </div>
          <div className=" z-50 my-3">
            <Button buttonText={"GET GAME NOW"} svgCode={svgGame} />
          </div>
        </div>
      </div>
      <div className="">
        <BigRectangle pattern={`/assets/rectangleimages/${imagePattern}.png`} />
      </div>
    </div>
  );
}
