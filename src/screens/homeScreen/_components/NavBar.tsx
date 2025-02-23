"use client";
import Button from "@/components/button/Button";
import { svgPrebook } from "@/components/icon/svg/Prebook";
import Typography from "@/components/typography/Typography";
import { navbarData } from "@/data/navbarData";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { div } from "motion/react-client";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isMenuClose, setMenuClose] = useState(false);
  function toggleMenu() {
    setMenuClose(!isMenuClose);
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
                classname={
                  "flex-initial hover:cursor-pointer hover:rounded-md z-1 hover:z-50 hover:visible hover:scale-125 pointer-events-auto transition ease-in-out duration-300  hover:font-semibold  hover:px-2 hover:py-1 hover:shadow-white hover:underline hover:underline-offset-8"
                }
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
      <AnimatePresence mode="wait">
        {isMenuClose ? (
          <motion.div
            key="hamburger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex gap-x-4 items-center justify-start"
          >
            <div onClick={toggleMenu} className="md:hidden px-4">
              <Menu />
            </div>
            <Image
              alt="Logo image"
              src={"/assets/homepage/logo.png"}
              width={201}
              height={72}
              className="pb-2 md:hidden"
            />
          </motion.div>
        ) : (
          <motion.div
            key="full-menu"
            className="flex flex-col w-full relative"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: 1,
              scaleY: 1,
              transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
              },
            }}
            exit={{
              opacity: 0,
              scaleY: 0,
              transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <div
              onClick={toggleMenu}
              className="md:hidden absolute top-4 right-4 px-4 text-end"
            >
              <X />
            </div>
            <div className="w-full z-1 origin-top h-auto flex flex-col md:hidden pr-4 items-center justify-around text-center">
              <div className="flex gap-x-16 z-1 pointer-events-none hover:invisible visible md:flex-row flex-col gap-y-2 md:gap-y-0 md:w-auto md:gap-x-3 lg:gap-x-10 xs:gap-x-0">
                <Image
                  alt="Logo image"
                  src={"/assets/homepage/logo.png"}
                  width={201}
                  height={72}
                  className="pb-2 md:hidden visible"
                />
                {navbarData.map((data) => (
                  <div key={data}>
                    <Typography
                      fontType={"SmallText"}
                      text={data}
                      classname="flex-initial hover:shadow-white hover:shadow-sm hover:cursor-pointer hover:rounded-md z-1 hover:z-50 hover:visible hover:scale-125 pointer-events-auto transition ease-in-out duration-300 hover:font-semibold  hover:px-2 hover:py-1 "
                    />
                  </div>
                ))}
              </div>
              <span className="pt-3 hover:cursor-pointer z-50 visible">
                <Button
                  buttonText={"PRE-BOOK"}
                  svgCode={svgPrebook}
                  classname=" hover:px-[17px] z-50"
                />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
