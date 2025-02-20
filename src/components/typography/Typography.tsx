import React from "react";
import cn from "clsx";

interface TypographyProps {
  classname?: String;
  fontType: String;
  text: String;
}
const Typography = ({ classname, fontType, text }: TypographyProps) => {
  return (
    <div>
      {(fontType === "Heading1" && (
        <p className={cn(`font-heading font-normal text-xl1 `,classname)}>{text}</p>
      )) ||
        (fontType === "Heading2" && (
          <p className={cn(`font-heading font-normal text-xl `,classname)}>{text}</p>
        )) ||
        (fontType === "Heading3" && (
          <p className={cn(`font-heading font-normal text-lg `,classname)}>{text}</p>
        )) ||
        (fontType === "Subtitle" && (
          <p className={cn(`font-body font-normal text-base `,classname)}>{text}</p>
        )) ||
        (fontType === "Body" && (
          <p className={cn(`font-body font-normal text-sm `,classname)}>{text}</p>
        )) ||
        (fontType === "SmallText" && (
          <p className={cn(`font-body font-normal text-xs `,classname)}>{text}</p>
        )) ||
        (fontType === "Button" && (
          <p
            className={cn(
              `font-body  inline-block `,
              classname
            )}
          >
            {text}
          </p>
        ))}
    </div>
  );
};

export default Typography;
