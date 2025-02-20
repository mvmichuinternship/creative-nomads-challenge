import Typography from "@/components/typography/Typography";
import { footerItems } from "@/data/footerData";

export default function FooterSection() {
  return (
    <div className="h-full w-full grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 justify-items-stretch  grid-cols-1  pt-3">
      {footerItems.map((footerData) => (
        <div className="flex flex-col gap-y-4     text-start h-full lg:py-0 py-4" key={footerData.footerHeading}>
          <Typography fontType={"Subtitle"} text={footerData.footerHeading} classname={""}/>
          <div className="flex flex-col   items-baseline text-start">
            {footerData.footerItems.map((itemData) => (
              <Typography
                fontType={"SmallText"}
                text={itemData}
                classname={"place-self-stretch "}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
 
  );
}
