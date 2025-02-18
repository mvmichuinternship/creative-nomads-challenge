import Card from "@/components/card/Card";
import Typography from "@/components/typography/Typography";
import { cardData } from "@/data/cardData";

export default function CardScreen() {
  return (
    <div className="h-screen w-[100%] flex flex-col justify-start  items-center bg-primary bg-contain">
      <div className=" flex flex-col w-full  items-center py-12 gap-y-2">
        <Typography fontType={"Heading1"} text={"DUALSENSE 2 CONTROLLER"} />
        <Typography
          fontType={"Heading1"}
          text={"THE ULTIMATE GAMING COMPANION"}
        />
        <Typography
          fontType={"Subtitle"}
          text={"Feel Every Moment, Control Every Move"}
          classname={"pt-3 pb-24"}
        />
      </div>
      <div className="flex w-full justify-center items-center">

      {cardData.map((data) => (
        <Card CardAlt={"cardData"} CardSrc={data} />
      ))}
      </div>
    </div>
  );
}
