"use client";

// import { BigRectangle } from "@/components/posters/BigRectangle";
import { SmallRectangle } from "@/components/posters/SmallRectangle";
import Content from "./_components/Content";
import ImageContainer from "@/components/imagecontainer/ImageContainer";
import Typography from "@/components/typography/Typography";
import { useEffect, useState } from "react";
import { posterData } from "@/data/posetData";
import Button from "@/components/button/Button";
import { svgPrebook } from "@/components/icon/svg/Prebook";
import { svgGame } from "@/components/icon/svg/Game";
import RenderThreeModel from "@/components/rendermodels/RenderModel";
import { AstroModel } from "@/components/models/Astro.jsx";
import { SpidyModel } from "@/components/models/Spidy.jsx";
import { EAModel } from "@/components/models/EAModel.jsx";
import { HelldiversModel } from "@/components/models/Helldivers.jsx";
import { RNCModel } from "@/components/models/RNCModel.jsx";
import { LastofusModel } from "@/components/models/LatofUSModel.jsx";

export default function PosterScreen() {
  const [setWindow, setSetWindow] = useState(window.innerWidth < 1024);
  const [bgimagePattern, setbGImagePattern] = useState("astrobot1");
  const [imagePattern, setImagePattern] = useState("astrobot1");
  const [smallimagePattern, setSmallImagePattern] = useState("b-astrobot");

  const renderModelSpace = () => {
    switch (imagePattern) {
      case "astrobot1":
        return <AstroModel />;
      case "spidy":
        return <SpidyModel />;
      case "lastofus":
        return <LastofusModel />;
      case "ea":
        return <EAModel />;
      case "helldiver":
        return <HelldiversModel />;
      case "rnc":
        return <RNCModel />;

      default:
        return <AstroModel />;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSetWindow(window?.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`relative min-w-screen w-full max-w-screen lg:bg-transparent min-h-screen bg-[url('/assets/rectangleimages/${bgimagePattern}.png')] rounded-lg bg-cover flex justify-center items-center`}
      style={{
        backgroundImage: setWindow
          ? `url('/assets/rectangleimages/${bgimagePattern}.png')`
          : "none",
        objectFit: "cover",
        padding: "0 8px",
      }}
    >
      <div className=" hidden lg:block lg:absolute z-1 -top-10 lg:-left-80  w-[60%] h-[60%] ">
        <SmallRectangle
          pattern={`/assets/rectangleimages/${bgimagePattern}.png`}
        />
      </div>
      <div className="w-[70%] h-[100%] lg:w-[80%] relative z-50 lg:left-32 xl:top-0 lg:top-0">
        <div className="lg:hidden w-full h-full inline z-0  absolute -inset-1 bg-cardShadow  blur-[6px] scale-[1.02] opacity-90 "></div>
        <div className=" flex bg-primary h-full lg:bg-transparent opacity-100 relative z-30 lg:border-none border border-white lg:rounded-none rounded-lg p-8  justify-start  items-center  ">
          <div className="flex flex-col sm:w-[40%] lg:w-[60%] items-center md:items-start justify-center md:text-start text-center h-full  ">
            <Typography
              fontType={"Heading2"}
              text={"PLAY YOUR WAY !"}
              classname={"text-base lg:text-xl"}
            />
            <div className=" w-full">
              <Typography
                classname={"py-4 text-base lg:text-sm"}
                fontType={"Body"}
                text={
                  "Embark on Epic Adventures, Conquer New Worlds, and Redefine Your Gaming Journey with PS6 Exclusive Titles and Enhanced Classics"
                }
              />
            </div>
            <div className="grid grid-cols-3 place-items-start gap-x-4 gap-y-4 lg:gap-x-10 lg:gap-y-8 lg:max-w-full py-8">
              {posterData.map((data) => (
                <div key={data.title}>
                  <ImageContainer
                    ImageContainerSrc={data.imageName}
                    onHover={() => {
                      setImagePattern(data.imageName);
                      setbGImagePattern(data.svgName);
                      setSmallImagePattern(data.bigimageName);
                    }}
                  />
                </div>
              ))}
            </div>
            <div className=" z-50 my-3">
              <Button
                buttonText={"GET GAME NOW"}
                svgCode={svgGame}
                classname={"hover:px-[16.5px]"}
              />
            </div>
          </div>
          <div className="lg:w-auto md:w-[50%] h-[50%] hidden sm:block absolute py-8 lg:py-0 px-2 lg:-top-24 right-0">
            {/* <div className="absolute bottom-0 w-[300px]  h-[300px] blur-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-70" /> */}
            <RenderThreeModel className={"z-50 "}>
              {renderModelSpace()}
            </RenderThreeModel>
          </div>
        </div>
      </div>
      <div className="w-[60%] hidden lg:flex  lg:relative bottom-0  z-1">
        <img
          src={`/assets/rectangleimages/${smallimagePattern}.png`}
          className="w-full "
        />
        {/* <BigRectangle pattern={`/assets/rectangleimages/${imagePattern}.png`}/> */}
      </div>
    </div>
  );
}
