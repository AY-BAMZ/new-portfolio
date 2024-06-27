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
      <h1>Hello</h1>
      <p className="text-white text-[30px]">Hello</p>
    </div>

    </div>
  );
}
