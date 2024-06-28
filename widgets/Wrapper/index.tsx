import React from "react";
import ParticlesJs from "@/components/Particles";
import SideBar from "@/widgets/SideBar";
import MobileNav from "../MobileNav";

function Wrapper({ children }: any) {
  return (
    <div className="relative">
      <ParticlesJs />
      <div className="absolute w-screen h-screen flex ">
        <span className="lg:block hidden h-full max-h-full">
          <SideBar />
        </span>
        <span className="lg:hidden flex h-full max-h-full">
          <MobileNav />
        </span>
        <span className="flex-grow w-full flex justify-center items-center">
          {children}
        </span>
      </div>
    </div>
  );
}

export default Wrapper;
