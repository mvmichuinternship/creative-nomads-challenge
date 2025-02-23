import Content from "./_components/Content";
import NavBar from "./_components/NavBar";

export default function HomeScreen() {
  return (
    <div className="sm:h-full h-fit w-[100%] flex flex-col  items-center justify-between bg-homepagebg bg-contain bg-no-repeat">
      <span className="w-full h-auto py-8">
        <NavBar />
        <div className="w-full h-[3px] mt-6 flex justify-center item-center bg-gradient-to-r from-[#06091D] via-[#3F4FB5] to-[#070924] "></div>
      </span>
      <div className="flex flex-col sm:flex-row w-full h-[90%]">
        <Content />
      </div>
    </div>
  );
}
