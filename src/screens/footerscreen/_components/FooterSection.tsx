import Typography from "@/components/typography/Typography";
import { footerItems } from "@/data/footerData";
import Image from "next/image";

export default function FooterSection() {
  return (
    <div className="h-full w-full grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 justify-items-stretch  grid-cols-1  pt-3">
      {footerItems.map((footerData) => (
        <div
          className=" gap-y-4   text-start h-full lg:py-0 py-4"
          key={footerData.footerHeading}
        >
          <Typography
            fontType={"Subtitle"}
            text={footerData.footerHeading}
            classname={"pb-4 cursor-pointer hover:font-medium transition-all ease-in-out duration-300"}
          />
          <div className="   items-baseline text-start">
            <div className="flex text-justify gap-x-2">
              {footerData.footerIcons?.map((data) => (
                <div className="">
                  <Image
                    alt={""}
                    className="cursor-pointer hover:scale-[1.3] transition-all duration-300 ease-in-out"
                    src={`/assets/footerimages/icons/${data}`}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
            {footerData.footerItems.map((itemData) => (
              <span key={itemData}>
                <Typography
                  fontType={"SmallText"}
                  text={itemData}
                  classname={"place-self-stretch cursor-pointer"}
                />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
