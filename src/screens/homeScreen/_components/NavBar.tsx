"use client";
import Button from "@/components/button/Button";
import { svgGlasses } from "@/components/icon/svg/Glasses";
import { svgPrebookHeading } from "@/components/icon/svg/PrebookHeader";
import Typography from "@/components/typography/Typography";
import { navbarData } from "@/data/navbarData";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="w-full h-auto">
      <div className="md:hidden flex items-start justify-between px-4">
        <div onClick={toggleMenu} className="relative cursor-pointer">
          {isMenuOpen ? <X /> : <Menu />}
        </div>
        {/* <Image
          alt="Logo image"
          src="/assets/homepage/logo.png"
          width={201}
          height={72}
          className={!isMenuOpen ? "pb-2" : "hidden"}
        /> */}
      </div>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key="full-menu"
            className="flex z-1 flex-col w-full relative md:hidden"
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
            <div className="w-full z-1 origin-top h-auto flex flex-col pr-4 items-center justify-start text-center">
              <div className="flex flex-col gap-y-2 xs:gap-x-0 ">
                {navbarData.map((data) => (
                  <div key={data} className="z-1">
                    <Typography
                      fontType="SmallText"
                      text={data}
                      classname="flex-initial hover:cursor-pointer hover:rounded-md z-1 hover:z-50  hover:scale-125 transition ease-in-out duration-300 hover:font-semibold hover:shadow-sm hover:px-2 hover:py-1 hover:shadow-white"
                    />
                  </div>
                ))}
              </div>
              <span className="pt-3 hover:cursor-pointer ">
                {/* <Button
                  buttonText={"WATCH THE REVEAL"}
                  svgCode={svgGlasses}
                  classname={"hover:px-[15px]"}
                /> */}
                <Button
                  buttonText="PRE-BOOK"
                  svgCode={svgPrebookHeading}
                  classname="hover:px-[17px]  items-center"
                />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-[100%] z-0 h-auto hidden md:flex md:flex-row pr-4 items-center justify-around text-center">
        <Image
          alt="Logo image"
          src="/assets/homepage/logo.png"
          width={201}
          height={72}
          className="pb-2 pl-4 flex-none visible "
        />
        <div className="flex min-w-[42%] gap-x-16  md:flex-row md:items-center md:justify-center md:gap-y-0 md:w-auto md:gap-x-3 lg:gap-x-10 xs:gap-x-0">
          {navbarData.map((data) => (
            <div key={data} className="z-1">
              <Typography
                fontType="SmallText"
                text={data}
                classname="flex-initial hover:cursor-pointer hover:rounded-md z-1 hover:z-50  hover:scale-125  transition ease-in-out duration-300 hover:font-semibold hover:underline hover:px-2 hover:py-1 hover:underline-offset-8"
              />
            </div>
          ))}
        </div>
        <span className="pt-3 pr-6 hover:cursor-pointer z-50 ">
          <Button
            buttonText="PRE-BOOK"
            svgCode={svgPrebookHeading}
            classname="hover:px-[17px]  items-center"
          />
          {/* <Button
            buttonText={"WATCH THE REVEAL"}
            svgCode={svgGlasses}
            classname={"hover:px-[15px]"}
          /> */}
        </span>
      </div>
    </div>
  );
}
