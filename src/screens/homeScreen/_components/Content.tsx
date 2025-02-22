import Button from "@/components/button/Button";
import { svgGlasses } from "@/components/icon/svg/Glasses";
import { svgPrebook } from "@/components/icon/svg/Prebook";
import Typography from "@/components/typography/Typography";
import Image from "next/image";

export default function Content() {
  return (
    <div className="w-full h-full relative sm:static sm:flex sm:flex-row flex flex-col justify-between items-center lg:px-28 md:px-8 px-4">
      <div className="lg:w-[37%] h-full flex flex-col lg:justify-center lg:items-start md:justify-center md:items-start sm:justify-center sm:items-start items-center justify-start w-full   md:w-[60%]">
        <Typography
          fontType={"Subtitle"}
          text={"The Future of Gaming is Here"}
        />
        <div className="w-[80px] bg-white h-[3px] mb-3 mt-2"></div>
        <Typography fontType={"Heading1"} text={"INTRODUCING PLAYSTATION 6"} />
        <Typography fontType={"Heading1"} text={"WITH POWER AND PRECISION"} />
        <Typography
          fontType={"Body"}
          classname={"text-justify pt-4 pb-12"}
          text={
            "A New Era of Gaming Begins, Where Every Moment Feels More Real, Every Action More Precise, and Every Experience More Immersive Than Ever Before, Redefining What’s Possible in the World of Play."
          }
        />
        <div className="flex flex-col lg:flex-row lg:gap-x-8 gap-y-4 lg:gap-y-0 gap-x-0 justify-between w-full">
          <Button buttonText={"PRE-BOOK"} svgCode={svgPrebook} classname={"hover:px-[17.8px]"}/>
          <Button buttonText={"WATCH THE REVEAL"} svgCode={svgGlasses} classname={"hover:px-[15px]"} />
        </div>
      </div>
      <div className="sm:w-auto invisible xs:visible w-44 absolute -bottom-8 right-4 sm:static">
        <Image
          alt=""
          src={"/assets/homepage/ps.png"}
          width={502}
          height={596}
        />
      </div>
    </div>
  );
}
