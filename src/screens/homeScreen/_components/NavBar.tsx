"use client";
import Button from "@/components/button/Button";
import { svgPrebook } from "@/components/icon/svg/Prebook";
import Typography from "@/components/typography/Typography";
import { navbarData } from "@/data/navbarData";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isMenuClose, setMenuClose] = useState(false);
  function onOpenClick() {
    setMenuClose(false);
  }
  function onCloseClick() {
    setMenuClose(true);
  }

  return (
    <div className="w-[100%] h-auto flex">
      <div className="w-[100%] z-0  h-auto md:flex md:flex-row   transition ease-in-out delay-300 pr-4 hidden md:inline items-center justify-around text-center ">
        <Image
          alt="Logo image"
          src={"/assets/homepage/logo.png"}
          width={201}
          height={72}
          className="pb-2 flex-none visible"
        />
        <div className=" flex gap-x-16 pointer-events-none hover:invisible visible md:flex-row flex-col gap-y-2 md:gap-y-0 md:w-auto md:gap-x-3 lg:gap-x-10 xs:gap-x-0">
          {navbarData.map((data) => (
            <div key={data} className="z-1">
              <Typography
                fontType={"SmallText"}
                text={data}
                classname={"flex-initial hover:cursor-pointer hover:rounded-md z-1 hover:z-50 hover:visible hover:scale-125 pointer-events-auto transition ease-in-out duration-300  hover:font-semibold hover:bg-white hover:px-2 hover:py-1 hover:text-primary"}
              />
            </div>
          ))}
        </div>
        <span className="pt-3 hover:cursor-pointer z-50 visible">
          <Button
            buttonText={"PRE-BOOK"}
            svgCode={svgPrebook}
            classname={" hover:px-[17px] z-50 "}
          />
        </span>
      </div>

      {!isMenuClose && (
        <div
          className={`${isMenuClose}`?`w-[100%] z-1  transition-all ease-in-out transform duration-300  h-auto flex flex-col md:hidden pr-4 items-center justify-around text-center`:``}
        >
          <Image
            alt="Logo image"
            src={"/assets/homepage/logo.png"}
            width={201}
            height={72}
            className="pb-2 flex-none"
          />
          <div className="flex gap-x-16 z-1 pointer-events-none hover:invisible visible md:flex-row flex-col gap-y-2 md:gap-y-0 md:w-auto md:gap-x-3 lg:gap-x-10 xs:gap-x-0">
            {navbarData.map((data) => (
              <div key={data}>
                <Typography
                  fontType={"SmallText"}
                  text={data}
                  classname={" flex-initial hover:cursor-pointer hover:rounded-md z-1 hover:z-50 hover:visible hover:scale-125 pointer-events-auto transition ease-in-out duration-300  hover:font-semibold hover:bg-white hover:px-2 hover:py-1 hover:text-primary"}
                />
              </div>
            ))}
          </div>
          <span className="pt-3 hover:cursor-pointer z-50  visible">
            <Button
              buttonText={"PRE-BOOK"}
              svgCode={svgPrebook}
              classname={" hover:px-[17px] z-50"}
            />
          </span>
        </div>
      )}
      {isMenuClose ? (
        <div onClick={onOpenClick} className="md:hidden px-4">
          <Menu />
        </div>
      ) : (
        <div onClick={onCloseClick} className="md:hidden absolute top-4 right-4 px-4 text-end">
          <X/>
        </div>
      )}
    </div>
  );
}
