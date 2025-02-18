import Image from "next/image";
import FooterSection from "./_components/FooterSection";
import Typography from "@/components/typography/Typography";
import Divider from "@/components/divider/Divider";


export default function FooterScreen() {
  return (
    <div className="h-fit w-[100%] bg-secondary flex flex-col gap-y-7 justify-center items-start px-20">
        <div className="flex ">
            <Image alt="" src={"/assets/footerimages/logo.png"} width={71} height={59}/>
            <Typography fontType={"Heading1"} text={"PLAYSTATION"}/>
        </div>
        <Divider/>
     <FooterSection/>
     <Divider/>
     <div className="flex flex-col">
            <Typography fontType={"Heading3"} text={"SONY INTERACTIVE ENTERTAINMENT"}/>
            <Typography fontType={"SmallText"} text={"© 2025 Sony Interactive Entertainment Europe Limited (SIEE)"}/>
            <Typography fontType={"SmallText"} text={"All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks copyright material of their respective owners. All rights reserved."}/>
        </div>
    </div>
  );
}
