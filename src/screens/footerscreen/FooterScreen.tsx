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
      <div className="w-full flex lg:flex lg:flex-row flex-col justify-center items-start lg:justify-between lg:items-center lg:pb-16">
        <div className="flex items-center justify-center gap-x-2">
          <Image
            alt=""
            src={"/assets/footerimages/icons/Geography.svg"}
            width={24}
            height={24}
            className="pt-[2px]"
          />
          <Typography fontType={"SmallText"} text={"India"} />
        </div>
        <div className="md:space-x-4 flex sm:flex-row flex-col flex-wrap ">
          {footerPolicies.map((data, index) => (
            <div className="flex flex-nowrap">
              <Typography
                fontType={"SmallText"}
                text={`${data}`}
                classname={"text-nowrap text-start"}
              />
              {index < footerPolicies.length - 1 && (
                <Typography
                  fontType={"SmallText"}
                  text={`|`}
                  classname={" px-4 sm:flex hidden text-nowrap "}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
