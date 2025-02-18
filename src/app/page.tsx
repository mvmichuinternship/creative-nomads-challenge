import Button from "@/components/button/Button";
import ButtonContainer from "@/components/button/ButtonContainer";
import ImageContainer from "@/components/imagecontainer/ImageContainer";
import Typography from "@/components/typography/Typography";
import Image from "next/image";
import { svgPrebookHome } from "@/components/icon/svg/PrebookHomePage";
import { BigRectangle } from "@/components/posters/BigRectangle";
import Card from "@/components/card/Card";
import HomeScreen from "@/screens/homeScreen/HomeScreen";
import CardScreen from "@/screens/cardscreen/CardScreen";
import FeatureScreen from "@/screens/featurescreen/FeatureScreen";
import FooterScreen from "@/screens/footerscreen/FooterScreen";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-primary">
      {/* <Typography fontType={"Heading1"}  text={"This is Heading"}/> */}
      {/* <ButtonContainer ButtonContainerSrc="" text={"DUMMY TEXT"}/> */}
      {/* <Button buttonText={"PRE-BOOK"} svgCode={svgPrebookHome}/> */}
      {/* <Card /> */}
      {/* <span className="w-fit absolute bottom-0 right-0 w-full h-full"> */}

      {/* <BigRectangle pattern={"/assets/rectangleimages/image.png"}/> */}
      {/* </span> */}
      <HomeScreen />
      <CardScreen/>
      <FeatureScreen/>
      <FooterScreen/>
    </div>
  );
}
