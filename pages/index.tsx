import ParticlesJs from "@/components/Particles";

export default function HomePage() {

  return (
    <div className="relative">
    <ParticlesJs />
    <div className="z-10 absolute w-screen h-screen">
      <h1>Hello</h1>
      <p className="text-white text-[30px]">Hello</p>
    </div>

    </div>
  );
}
