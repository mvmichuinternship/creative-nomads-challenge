import Image from "next/image";
import FooterSection from "./_components/FooterSection";
import Typography from "@/components/typography/Typography";
import Divider from "@/components/divider/Divider";
import { footerPolicies } from "@/data/footerData";

export default function FooterScreen() {
  return (
    <div className="h-fit w-[100%] bg-secondary flex flex-col gap-y-7 justify-center items-start md:px-20 px-4 pt-8">
      <div className="flex ">
        <Image
          alt=""
          src={"/assets/footerimages/logo.png"}
          width={71}
          height={59}
        />
        <Typography fontType={"Heading1"} text={"PLAYSTATION"} />
      </div>
      <Divider />
      <FooterSection />
      <Divider />
      <div className="flex flex-col gap-y-2">
        <Typography
          fontType={"Heading3"}
          text={"SONY INTERACTIVE ENTERTAINMENT"}
        />
        <Typography
          fontType={"SmallText"}
          text={"© 2025 Sony Interactive Entertainment Europe Limited (SIEE)"}
        />
        <Typography
          fontType={"SmallText"}
          text={
            "All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks copyright material of their respective owners. All rights reserved."
          }
        />
      </div>
      <Divider />
      <div className="w-full flex md:flex-row flex-col justify-start items-start md:justify-between md:items-center pb-16">
        <div className="flex gap-x-2">
        <Image alt="" src={"/assets/footerimages/icons/Geography.svg"} width={25} height={25}/>
        <Typography fontType={"SmallText"} text={"India"} />
        </div>
        <div className="md:space-x-4 flex sm:flex-row flex-col">

        {footerPolicies.map((data) => (
          <div key={data} >

            <Typography fontType={"SmallText"} text={data} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
