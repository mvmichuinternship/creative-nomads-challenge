import React, { ReactElement } from "react";
import cn from "clsx";

interface IconComponentProps {
  classname?: String;
  svgCode: ReactElement;
}
const IconComponent = ({ classname, svgCode }: IconComponentProps) => {
  return <span className={cn(`w-fit h-fit `,classname)}>{svgCode}</span>;
};

export default IconComponent;
