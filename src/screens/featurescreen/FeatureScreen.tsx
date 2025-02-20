import Typography from "@/components/typography/Typography";
import Content from "./_components/Content";


export default function FeatureScreen() {
  return (
    <div className="sm:h-full h-fit w-[100%] md:py-48 py-12 flex flex-col items-center justify-around bg-secondary">
        <Typography fontType={"Heading1"} text={"REVOLUTIONARY FEATURES"} classname={"text-center"}/>
      {/* <div className="flex flex-col sm:flex-row w-full h-full justify-center "> */}
        <Content/>
      {/* </div> */}
    </div>
  );
}
