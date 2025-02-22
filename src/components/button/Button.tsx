import React, { ReactElement } from "react";
import Typography from "../typography/Typography";
import Image from "next/image";
import IconComponent from "@/components/icon/IconComponent";
import cn from 'clsx'

interface ButtonProps {
  classname?: String;
  onHover?: () => {};
  buttonText: String;
  icon?: string;
  svgCode:ReactElement;
}
const Button = ({ classname, onHover, buttonText, icon,svgCode }: ButtonProps) => {
  return (
    <div className={cn(`w-fit h-fit justify-center text-xs font-normal items-center bg-buttonbg border border-white px-5 py-2  hover:py-2 flex gap-x-4 hover:bg-white hover:text-primary group hover:font-bold hover:text-[20.5px] transition-all duration-300 origin-center`,classname)}>
      <div className="justify-center  items-center flex gap-x-4 w-full">
      <Typography fontType={"Button"} text={buttonText} />
      <IconComponent svgCode={svgCode}/>
      </div>
    </div>
  );
};

export default Button;
