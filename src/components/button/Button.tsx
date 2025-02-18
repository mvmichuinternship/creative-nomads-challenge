import React, { ReactElement } from "react";
import Typography from "../typography/Typography";
import Image from "next/image";
import IconComponent from "@/components/icon/IconComponent";

interface ButtonProps {
  classname?: String;
  onHover?: () => {};
  buttonText: String;
  icon?: string;
  svgCode:ReactElement;
}
const Button = ({ classname, onHover, buttonText, icon,svgCode }: ButtonProps) => {
  return (
    <div className="w-fit h-fit justify-center text-xs font-normal items-center  border border-white px-5 py-1 flex gap-x-4 hover:bg-white hover:text-primary group hover:font-bold hover:text-[20.5px] transition-all duration-300 origin-center">
      <div className="justify-center  items-center flex gap-x-4 w-full">
      <Typography fontType={"Button"} text={buttonText} classname={classname}/>
      <IconComponent svgCode={svgCode}/>
      </div>
    </div>
  );
};

export default Button;
