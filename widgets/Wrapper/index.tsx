import React, { useState } from "react";
import ParticlesJs from "@/components/Particles";
import SideBar from "@/widgets/SideBar";
import MobileNav from "../MobileNav";
import { Group } from "@mantine/core";
import { userThemeStorage } from "@/lib/localStorage";
import { cn } from "@/lib";
import { Setting2 } from "iconsax-react";
import { useThemeContext } from "@/contetxt/ThemeContext";
import { useSpring, animated } from "@react-spring/web";

function Wrapper({ children }: any) {
  const colors = ["blue", "red", "green", "yellow", "cray", "purple", "orange"];
  const { color, setColor }: any = useThemeContext();

  const setTheme = (item: string) => {
    userThemeStorage({ theme: item });
    setColor(item);
  };
  const [open, setOpen] = useState(false);

  const groupAnimation = useSpring({
    transform: open ? "translateX(0)" : "translateX(100%)",
    opacity: open ? 1 : 0,
    config: { tension: 210, friction: 20 },
  });
  return (
    <div className="relative">
      <ParticlesJs />
      <div className="absolute w-screen h-screen flex ">
        <span className="lg:block hidden h-full max-h-full">
          <SideBar />
        </span>
        <span className="lg:hidden flex h-full max-h-full z-50">
          <MobileNav />
        </span>
        <span className="flex-grow w-full flex justify-center items-center">
          {children}
        </span>
      </div>
      <span className="fixed top-3 right-0 ">
        {!open ? (
          <span
            className="text-[12px] bg-[#00000060] p-2 rounded-l-xl flex items-center gap-1 pr-4 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <Setting2 variant="Bold" /> Change Theme
          </span>
        ) : (
          <span
            className="text-[12px] bg-[#00000060] p-2 rounded-l-xl flex items-center gap-1 pr-4 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <Setting2 variant="Bold" /> Close Theme
          </span>
        )}
        {open && (
          <animated.div
            style={groupAnimation}
            className="max-w-[120px] bg-[#00000060] p-2 rounded-l-xl flex flex-wrap gap-1"
          >
            {colors.map((item, index) => (
              <span
                key={index}
                onClick={() => setTheme(item)}
                className={cn("w-8 h-8 rounded-full border cursor-pointer", {
                  "bg-primary-blue": item === "blue",
                  "bg-primary-red": item === "red",
                  "bg-primary-green": item === "green",
                  "bg-primary-yellow": item === "yellow",
                  "bg-primary-cray": item === "cray",
                  "bg-primary-purple": item === "purple",
                  "bg-primary-orange": item === "orange",
                })}
              ></span>
            ))}
          </animated.div>
        )}
      </span>
    </div>
  );
}

export default Wrapper;
