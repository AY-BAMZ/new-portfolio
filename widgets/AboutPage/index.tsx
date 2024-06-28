import Title from "@/components/Title";
import { cn } from "@/lib";
import { getTheme } from "@/lib/localStorage";
import { ScrollArea } from "@mantine/core";
import {
  CpuCharge,
  LocationTick,
  MedalStar,
  Mobile,
  MobileProgramming,
  Monitor,
  MonitorMobbile,
} from "iconsax-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function AboutPage() {
  const theme = getTheme();
  const [color, setColor] = useState("");

  useEffect(() => {
    if (theme) {
      setColor(theme);
    } else {
      setColor("orange");
    }
  }, [theme]);

  const borderColors = {
    "border-primary-blue": color === "blue",
    "border-primary-red": color === "red",
    "border-primary-green": color === "green",
    "border-primary-yellow": color === "yellow",
    "border-primary-cray": color === "cray",
    "border-primary-purple": color === "purple",
    "border-primary-orange": color === "orange",
  };

  const textColors = {
    "text-primary-blue": color === "blue",
    "text-primary-red": color === "red",
    "text-primary-green": color === "green",
    "text-primary-yellow": color === "yellow",
    "text-primary-cray": color === "cray",
    "text-primary-purple": color === "purple",
    "text-primary-orange": color === "orange",
  };
  const services = [
    {
      name: "Web Development",
      description:
        "I’m an experienced and skilled frontend and mobile app developer with a strong background in developing user-friendly and visually appealing websites",
      icon: Monitor,
    },
    {
      name: "Mobile App Development",
      description:
        "I’m an experienced and skilled frontend and mobile app developer with a strong background in developing user-friendly and visually appealing websites",
      icon: Mobile,
    },
    {
      name: "Web App Development",
      description:
        "I’m an experienced and skilled frontend and mobile app developer with a strong background in developing user-friendly and visually appealing websites",
      icon: Monitor,
    },
    {
      name: "iOS Development",
      description:
        "I’m an experienced and skilled frontend and mobile app developer with a strong background in developing user-friendly and visually appealing websites",
      icon: CpuCharge,
    },
    {
      name: "Website Optimization",
      description:
        "I’m an experienced and skilled frontend and mobile app developer with a strong background in developing user-friendly and visually appealing websites",
      icon: MonitorMobbile,
    },
    {
      name: "Mobile App Optimization",
      description:
        "I’m an experienced and skilled frontend and mobile app developer with a strong background in developing user-friendly and visually appealing websites",
      icon: MobileProgramming,
    },
  ];

  return (
    <ScrollArea className="h-screen">
      <div className="w-full lg:px-16 p-6 flex flex-col gap-8 py-6 bg-[#0E0F10]">
        <Title title={"About Me"} />
        <span className="w-full bg-[#00000090] p-8 py-16 flex flex-col gap-16">
          <span className="flex lg:flex-row flex-col items-center gap-6">
            <Image
              src="https://res.cloudinary.com/dmixz7eur/image/upload/v1718836708/21A17C5B-0536-4E7B-945C-F67C766385BB_1_201_a_saj6vf.jpg"
              alt=""
              width={260}
              height={260}
              className="object-cover aspect-square w-[260px] h-auto rounded-full mx-auto"
            />
            <span className="flex flex-col gap-2 flex-grow">
              <p className={cn("text-white text-[20px]")}>
                Ayobami Paul Adegbohungbe
              </p>
              <span className={cn("flex items-center gap-1", textColors)}>
                <LocationTick size="16" variant="Bold" />
                <p className="text-[16px]">Lagos Nigeria</p>
              </span>
              <p className="text-[16px] font-thin">
                I’m an experienced and skilled frontend and mobile app developer
                with a strong background in developing user-friendly and
                visually appealing websites and mobile applications using a
                variety of languages and frameworks such as REACT JS and REACT
                NATIVE. I have proven ability to work independently and as part
                of a team to deliver high-quality software on time and within
                budget. <br /> <br />
                My skills include having the ability to listen and communicate
                with others verbally and in writing. This is very important in
                order to collaborate with team members and solve problems. I
                have excellent problem-solving skills and the ability to work
                effectively while meeting tight deadlines.
              </p>
            </span>
          </span>
          <span className="grid lg:grid-cols-4 grid-cols-1 gap-6">
            <span className="flex gap-4 col-span-1">
              <span
                className={cn(
                  "w-14 h-12 flex items-center justify-center rounded-full border-[2px] border-white",
                  borderColors
                )}
              >
                <MedalStar size={28} variant="Bold" className="" />
              </span>
              <span>
                <p className="text-[16px]">5 Years</p>
                <p className={cn("text-[13px]", textColors)}>Experience</p>
              </span>
            </span>
            <span className="flex gap-4 col-span-1">
              <span
                className={cn(
                  "w-14 h-12 flex items-center justify-center rounded-full border-[2px] border-white",
                  borderColors
                )}
              >
                <MedalStar size={28} variant="Bold" className="" />
              </span>
              <span>
                <p className="text-[16px]">15+ Projects</p>
                <p className={cn("text-[13px]", textColors)}>Completed</p>
              </span>
            </span>
            <span className="flex gap-4 col-span-1">
              <span
                className={cn(
                  "w-14 h-12 flex items-center justify-center rounded-full border-[2px] border-white",
                  borderColors
                )}
              >
                <MedalStar size={28} variant="Bold" className="" />
              </span>
              <span>
                <p className="text-[16px]">Consultation</p>
                <p className={cn("text-[13px]", textColors)}>Available</p>
              </span>
            </span>
            <span className="flex gap-4 col-span-1"></span>
          </span>
        </span>
        <span className="my-12 w-full">
          <Title title={"Services"} />
          <span className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-8">
            {services.map((item, index) => (
              <span
                key={index}
                className="flex flex-col items-center justify-center gap-4 col-span-1 bg-[#00000090] p-6 py-12"
              >
                <span
                  className={cn(
                    "w-16 h-16 flex items-center justify-center rounded-full border-[2px] border-white",
                    borderColors
                  )}
                >
                  <item.icon size={28} className="" />
                </span>
                <p className={cn("text-white text-[20px]")}>{item.name}</p>
                <p className="text-[14px] font-thin text-center">
                  {item?.description}
                </p>
              </span>
            ))}
          </span>
        </span>
      </div>
    </ScrollArea>
  );
}

export default AboutPage;
