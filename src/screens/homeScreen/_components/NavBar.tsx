import Button from "@/components/button/Button";
import { svgPrebook } from "@/components/icon/svg/Prebook";
import Typography from "@/components/typography/Typography";
import { navbarData } from "@/data/navbarData";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-[100%] h-auto md:flex sm:flex-row pr-4 flex flex-col items-center justify-around text-center ">
        
      <Image
        alt="Logo image"
        src={"/assets/homepage/logo.png"}
        width={201}
        height={72}
        className="pb-2"
      />
      <div className="flex gap-x-16 sm:flex-row flex-col gap-y-2 sm:gap-y-0 md:w-auto sm:gap-x-8 sm:gap-x-10 xs:gap-x-0">
        {navbarData.map((data) => (
          <Typography fontType={"SmallText"} text={data} />
        ))}
      </div>
      <span className="pt-3">

      <Button buttonText={"PRE-BOOK"} svgCode={svgPrebook} classname={""}/>
      </span>
    </div>
  );
}
