'use client'
import Card from "@/components/card/Card";
import Typography from "@/components/typography/Typography";
import { cardData } from "@/data/cardData";
import { useEffect, useState } from "react";

export default function CardScreen() {

  const [cln,setCln]=useState("scale-110")
  const [isHover,setIsHover]=useState(false)

  function onHover(){
    setIsHover(true)
    cardData[1].isDefault=false
  }
  function onNotHover(){
    setIsHover(false)
    cardData[1].isDefault=true
  }

  // useEffect(()=>{
  //   !isHover?setCln("scale-150 z-1"):setCln("scale-1 z-50")
  // },[onHover])
  return (
    <div className="sm:h-full h-fit w-[100%] text-center flex flex-col justify-start py-12 items-center bg-primary bg-contain">
      <div className=" flex flex-col w-full  items-center py-12 gap-y-2">
        <Typography fontType={"Heading1"} text={"DUALSENSE 2 CONTROLLER"} />
        <Typography
          fontType={"Heading1"}
          text={"THE ULTIMATE GAMING COMPANION"}
        />
        <Typography
          fontType={"Subtitle"}
          text={"Feel Every Moment, Control Every Move"}
          classname={"pt-3 sm:pb-24 pb-12"}
        />
      </div>
      <div className="flex sm:flex-row flex-col w-full justify-center items-center">

      {cardData.map((data) => (
        <div className="w-fit " key={data.text}>
         
                <Card CardAlt={"cardData"} CardSrc={data.text}  onHover={onHover} onNotHover={onNotHover} isHover={isHover} classname={data.className} isDefault={data.isDefault}/>
             
                {/* <Card CardAlt={"cardData"} CardSrc={data.text}  onHover={onHover} isHover={isHover} isDefault={isDefault}/> */}
              
            
          
        </div>
      ))}
      </div>
    </div>
  );
}
