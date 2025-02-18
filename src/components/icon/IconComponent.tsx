import React, { ReactElement } from "react";
import cn from "clsx";

interface IconComponentProps {
  classname?: String;
  svgCode: ReactElement;
}
const IconComponent = ({ classname, svgCode }: IconComponentProps) => {
  return <span className="w-fit h-fit">{svgCode}</span>;
};

export default IconComponent;
