import ParticlesJs from "@/components/Particles";
import SideBar from "@/widgets/SideBar";

export default function HomePage() {
  return (
    <div className="relative">
      <ParticlesJs />
      <div className="absolute w-screen h-screen flex ">
        <span className="h-full max-h-full">
          <SideBar />
        </span>
        <span className="flex-grow w-full flex justify-center items-center">
          <span className="flex flex-col gap-4 items-center">
            <h1 className="text-[52px]">Ayobami Paul Ade.</h1>
            <p className="text-white text-[30px]">I'm a Software Engineer</p>
          </span>
        </span>
      </div>
    </div>
  );
}
