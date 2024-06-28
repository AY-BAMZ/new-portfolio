import Title from "@/components/Title";
import { cn } from "@/lib";
import { getTheme } from "@/lib/localStorage";
import { Progress, RingProgress, ScrollArea, Text } from "@mantine/core";
import {
  BinanceCoin,
  Book1,
  Cpu,
  CpuCharge,
  Game,
  Mobile,
  MobileProgramming,
  Monitor,
  MonitorMobbile,
  Music,
  PresentionChart,
  VideoHorizontal,
  VideoPlay,
} from "iconsax-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SkillsPage() {
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

  const interests = [
    { name: "Music", icon: Music },
    { name: "Book", icon: Book1 },
    { name: "Technology", icon: Cpu },
    { name: "Games", icon: Game },
    { name: "Movies", icon: VideoPlay },
    { name: "TedX", icon: VideoHorizontal },
    { name: "Trading", icon: PresentionChart },
    { name: "Crypto", icon: BinanceCoin },
  ];

  const ratings = [
    {
      skill: "HTML/HTML5",
      rate: 90,
    },
    {
      skill: "CSS",
      rate: 90,
    },
    {
      skill: "React JS",
      rate: 95,
    },
    {
      skill: "Next JS",
      rate: 90,
    },
    {
      skill: "React Native",
      rate: 90,
    },
    {
      skill: "Expo",
      rate: 90,
    },
    {
      skill: "Swift",
      rate: 75,
    },
    {
      skill: "SwiftUI",
      rate: 70,
    },
    {
      skill: "Tailwind",
      rate: 90,
    },
    {
      skill: "Redux",
      rate: 90,
    },
  ];
  return (
    <ScrollArea className="h-screen">
      <div className="w-full lg:px-16 p-6 flex flex-col gap-8 py-6 bg-[#0E0F10]">
        <Title title={"Skills"} />
        <span className="w-full bg-[#00000090] p-8 py-16 grid lg:grid-cols-2 grid-cols-1 gap-8 rounded-2xl">
          <span className="col-span-1 flex flex-col gap-4 w-full">
            {ratings.map((item, index) => (
              <span>
                <p className={cn("text-white text-[16px] mb-2")}>
                  {item.skill}
                </p>
                <Progress
                  h={20}
                  value={item.rate}
                  key={index}
                  w={"100%"}
                  color={"white"}
                  animated
                  bg={"#444"}
                />
              </span>
            ))}
          </span>
          <span className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-6 col-span-1">
            {ratings.map((item, index) => (
              <RingProgress
                key={index}
                size={200}
                thickness={6}
                roundCaps
                rootColor={"#1f1f1f"}
                sections={[{ value: item.rate, color: "white" }]}
                className="mx-auto col-span-1"
                label={
                  <>
                    <Text
                      c={"white"}
                      fw={500}
                      ta="center"
                      size="50px"
                      className="text-white"
                    >
                      {item.rate}%
                    </Text>
                    <Text
                      c={"white"}
                      fw={300}
                      ta="center"
                      size="16px"
                      className="text-white mt-1"
                    >
                      {item.skill}
                    </Text>
                  </>
                }
              />
            ))}
          </span>
        </span>
      </div>
    </ScrollArea>
  );
}

export default SkillsPage;
