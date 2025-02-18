import Typography from "@/components/typography/Typography";
import { footerItems } from "@/data/footerData";

export default function FooterSection() {
  return (
    <div className="h-fit w-[100%] sm:grid sm:grid-cols-6 justify-items-center flex flex-col  pt-3">
      {footerItems.map((footerData) => (
        <div className="flex flex-col gap-y-4" key={footerData.footerHeading}>
          <Typography fontType={"Subtitle"} text={footerData.footerHeading} />
          <div className="flex flex-col ">
            {footerData.footerItems.map((itemData) => (
              <Typography fontType={"SmallText"} text={itemData} classname={""}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
