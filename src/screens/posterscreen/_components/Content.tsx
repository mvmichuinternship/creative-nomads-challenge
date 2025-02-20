import ImageContainer from "@/components/imagecontainer/ImageContainer";
import Typography from "@/components/typography/Typography";

export default function Content() {
  return <div className="flex flex-col justify-start items-start">
    <Typography fontType={"Heading2"} text={"PLAY YOUR WAY !"}/>
    <Typography  fontType={"Subtitle"} text={"Embark on Epic Adventures, Conquer New Worlds, and Redefine Your Gaming Journey with PS6 Exclusive Titles and Enhanced Classics"}/>
    <div className="grid grid-col-6 place-items-start">
        <ImageContainer ImageContainerSrc="" />
    </div>
  </div>;
}
