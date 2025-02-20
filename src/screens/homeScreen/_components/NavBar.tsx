import Button from "@/components/button/Button";
import { svgPrebook } from "@/components/icon/svg/Prebook";
import Typography from "@/components/typography/Typography";
import { navbarData } from "@/data/navbarData";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-[100%] h-auto md:flex md:flex-row pr-4 flex flex-col items-center justify-around text-center ">
        
      <Image
        alt="Logo image"
        src={"/assets/homepage/logo.png"}
        width={201}
        height={72}
        className="pb-2 flex-none"
      />
      <div className="flex gap-x-16 md:flex-row flex-col gap-y-2 md:gap-y-0 md:w-auto md:gap-x-3 lg:gap-x-10 xs:gap-x-0">
        {navbarData.map((data) => (
          <Typography fontType={"SmallText"} text={data} classname={"flex-initial"}/>
        ))}
      </div>
      <span className="pt-3">

      <Button buttonText={"PRE-BOOK"} svgCode={svgPrebook} classname={"flex-initial"}/>
      </span>
    </div>
  );
}
