import Typography from "@/components/typography/Typography";
import Content from "./_components/Content";


export default function FeatureScreen() {
  return (
    <div className="h-full w-[100%] flex flex-col  items-center justify-around bg-secondary">
        <Typography fontType={"Heading1"} text={"REVOLUTIONARY FEATURES"}/>
      {/* <div className="flex flex-col sm:flex-row w-full h-full justify-center "> */}
        <Content/>
      {/* </div> */}
    </div>
  );
}
